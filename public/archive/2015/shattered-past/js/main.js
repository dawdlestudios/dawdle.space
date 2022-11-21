//COPYRIGHT 2015 HENRYMAXXX. ALL RIGHTS RESERVED.
var game = {};
game.level = {};
/* =============================================
   Helpers
   ============================================= */
var date = new Date();
var converter = new showdown.Converter();
//$(".gametext").converter.makehtml(texttest);
date.get = function() {
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()).toString();
};
game.deleteCookies = function() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};
/* =============================================
   Default Settings
   ============================================= */
game.defaultSettings = {
    lastPlayedSave: 0,
    version: "beta 0.0.1",
    autosaveEnabled: 0,
    language: "en-US",
    displaymode: "Windowed",
    speechrecognition: false,
};
game.defaultSave = {
    game: 'none',
    lastPlayed: "never", //date.get()
    inventory: [],
    timePlayed: 0,
    currentChapter: 1,
    currentRoom: 1,
    skill: {
        1: 0, //strength
        2: 0, //skillfulness
        3: 0, //intelligence
    },
    achievementsEarned: {},
};
/* =============================================
   LOAD GAME FUNCTIONS
   ============================================= */
game.load = function() {
    /* =============================================
     Loading Settings/Saves
     ============================================= */
    game.loadSettings = function() {
        if (Cookies.get("settings") === undefined) {
            Cookies.set("settings", [game.defaultSettings, game.globalVariables], {
                expires: 730
            });
            game.settings = JSON.parse(Cookies.get("settings"))[0];
        } else {
            game.settings = JSON.parse(Cookies.get("settings"))[0];
            game.globalVariables = JSON.parse(Cookies.get("settings"))[1];
        }
        game.settings.displaymode = $('#displaymode option:selected').text();
        $('#displaymode input[value="'+ game.settings.displaymode +'"]' ).val("selected");
        game.settings.language = $('#language option:selected').val();
        $('#displaymode input[value="'+ game.settings.language +'"]' ).val("selected");
    };
    game.loadSaves = function() {
        for (i = 1; i <= 5; i++) {
            if (Cookies.get("save" + i.toString()) === undefined) {
                game.createOverwriteSave(i);
                game["save" + i.toString()] = JSON.parse(Cookies.get("save" + i.toString()));
            } else {
                game["save" + i.toString()] = JSON.parse(Cookies.get("save" + i.toString()));
            }
        }
    };
    /* =============================================
     Save Stuff
     ============================================= */
    game.saveSettings = function() {};
    game.saveSave = function(currentSave) {
        //TODO COOKIES SAVEN
    };
    game.autoSave = function(currentSave) {
        game.saveSave();
        setTimeout(game.autoSave(), 5000);
    };
    game.createOverwriteSave = function(selectedSave) {
        Cookies.set('save' + selectedSave, game.defaultSave, {
            expires: 730
        });
    };
    /* =============================================
     TITLESCREEN + SETTINGS MENU
     ============================================= */
    game.startIntro = function() {
        $(".intro").one("click keydown", function() {
            $(this).slideUp();
        });
        setTimeout(function() {
            $(".intro").slideUp();
        }, 1); //needs to be changed!! TODO!!!
    };
    game.toggleMenu = function(dummy) {
        $(dummy).fadeToggle();
    };
    game.lvlSelectUpdate = function() {
        $(".lvlSelectpaste").html("");
        for (i = 1; i <= 5; i++) {
            $(".lvlSelectpaste").append('<ul class="collection"> <li class="collection-item avatar"> <span class="title">Slot ' + i +
                '</span> <p>' + 'Last played ' + game["save" + i.toString()].lastPlayed + " &nbsp;|&nbsp; Chapter " + game[
                    "save" + i.toString()].currentChapter +
                ' <br></p><a href="#" class="secondary-content event" id="lvlselectbtn"><i class="material-icons">play_arrow</i></a> </li></ul>');
        }
    };
    game.saveEverything = function() {
      Cookies.set("settings", [game.settings, game.globalVariables], {
          expires: 730
      });
      for (i = 1; i <= 5; i++) {
        Cookies.set('save' + i, game["save" + i], {
            expires: 730
        });
      }
      game.loadSettings();
      game.loadSaves();
    };
    /* =============================================
     GAME LOGIC (Load Levels/Rooms/EVERYTHING ELSE)
     ============================================= */
    game.loadLevelSettings = function(selectedgame, save, callback) {
        $.ajax({
            dataType: "json",
            url: "data/" + selectedgame + "/" + game.settings.language + "/config.tad",
            success: function(data) {
                game.level[selectedgame] = data;
                callback(game.settings.language);
            },
            error: function(a, b, c) {
                console.debug("Everything still works fine, this was just a test ^^");
                Materialize.toast("This Storry sadly isn't avalible in your Language. Using default Language of the game.", 5000);
                $.getJSON("data/" + selectedgame + "/lang.tad", function(data2) {
                    var lang = data2.default;
                    $.getJSON("data/" + selectedgame + "/" + data2.default+"/config.tad", function(data3) {
                        game.level[selectedgame] = data3;
                        callback(lang);
                    });
                });
            },
        });
    };
    var chapter = 1;
    game.loadChapter = function(langnew, i, selectedgame, save, i2) {
        $.getJSON("data/" + selectedgame + "/" + langnew + "/chapter" + i + ".tad", function(data3) {
            game.level[selectedgame]["chapter" + i] = data3;
            console.debug(chapter);
            console.debug("number: " + i + " andere number: " + Object.keys(game.level[selectedgame].levelsettings.chapters).length)
            if (chapter == (Object.keys(game.level[selectedgame].levelsettings.chapters).length)) {
                game.startLevel(save, game["save" + save].currentChapter, game["save" + save].currentRoom);
            }
            chapter+= 1;
        });
    };
    game.launchGame = function(save, selectedgame) {
        game.loadLevelSettings(selectedgame, save, function(langnew) {
            if (game["save" + save].game == "none") {
                game["save" + save].inventory = game.level[selectedgame].startitems;
                game["save" + save].skill = game.level[selectedgame].startskills;
                game["save" + save].currentChapter = 1;
                game["save" + save].currentRoom = 1;
                game["save" + save].game = selectedgame;
            }
            if (game.settings.autosaveEnabled) {
                game.autoSave();
            }
            for (i = 1; i <= (Object.keys(game.level[selectedgame].levelsettings.chapters).length); i++) {
                console.debug(i);
                game.loadChapter(langnew, i, selectedgame, save);
            }
        });
        $(".game").fadeIn(1000);
    };
    game.invAdd = function(itemid, save) {
        game["save" + save].inventory.push(itemid)
    }
    game.skillAdd = function(skillID, addRemoveCount, save) {
        game["save" + save].skill[skillId] += count;
    }
    game.startLevel = function(save, chapterId, roomId) {
        game.currentSave = save;
        game["save"+save].lastPlayed = date.get();
        game.settings.lastPlayedSave = save;
        console.debug("save: "+save);
        var level = game.level[game["save" + save].game];
        console.debug(level["chapter" + chapterId].rooms[roomId]);
        var currentRoom = level["chapter" + chapterId].rooms[roomId];
        console.debug(level["chapter" + chapterId].rooms[roomId]);
        if (level.hasOwnProperty("chapter" + chapterId) !== true) {
            Materialize.toast("The Campain you attempted to load isn't configured correctly. \n\r<br>Please contact it's Creator.", 4000, "rounded");
        }
        console.debug(level["chapter" + chapterId].rooms[roomId].hasOwnProperty("runFunction"));
        if (level["chapter" + chapterId].rooms[roomId].hasOwnProperty("runFunction")) {
            eval(level["chapter" + chapterId].rooms[roomId].runFunction);
        }
        $(".gametext p").html(level["chapter" + chapterId].rooms[roomId]["text"] + "<br>");
        $(".gametext h1").html(level["chapter" + chapterId].h1);
        $("#possibleoptions").html("");
        for (i = 0; i < Object.keys(currentRoom.possibleoptions).length; i++) {
            if (i == 0) {
                $("#possibleoptions").append((Object.keys(currentRoom.possibleoptions))[i]);
            }
            else {
                $("#possibleoptions").append(", " + (Object.keys(currentRoom.possibleoptions))[i]);
            }
        }
        $('#gameinput').keyup(function(e){
          if(e.keyCode == 13){
            var itWorked = 0;
            for (i = 0; i < Object.keys(currentRoom.possibleoptions).length; i++) {
              console.debug($('#gameinput').val().toLowerCase());
              console.debug(Object.keys(currentRoom.possibleoptions)[i].toLowerCase());
              if($('#gameinput').val().toLowerCase() == Object.keys(currentRoom.possibleoptions)[i].toLowerCase() ){
                var itWorked = 1;
                $('#gameinput').val("");
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("getItem")) {
                    game.invAdd(currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].getItem, save)
                }
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("removeItem")) {
                    for(var i2=game["save" + save].inventory.length-1; i2>=0; i2--){
                      if (game["save" + save].inventory[i2] == currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].removeItem) {
                        array.splice(i2, 1);
                      }
                    }
                }
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("getSkill")) {} //TODO
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("runFunction")) {
                    game.currentSave = save;
                    game.currentChapter = chapterId;
                    game.currentRoom = roomId;
                    eval(currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].runFunction);
                }
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("text")) {
                  $(".game p").append("<br>" + currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].text + "<br>");
                  $(".game p").scrollTop(1E10);
                }
                if (currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].hasOwnProperty("nextroom")) {
                   game.startLevel(save, chapterId, currentRoom.possibleoptions[Object.keys(currentRoom.possibleoptions)[i]].nextroom)
                }
              }
              else if(!itWorked && i==Object.keys(currentRoom.possibleoptions).length-1){
                var errorMsgs = ["Sein Gehirn spielt ihm einen Streich: er glaubt tatsächlich das [VUET] eine gute Idee wäre.", "George spürt das Bedürfnis, etwas vollkommen bescheuertes und kontraproduktives ohne jeden Kontext zu machen, doch ignoriert diesen weil es einfach dumm wäre diesem nachzugehen.", "Ein Gedanke fliegt George für den Bruchteil einer Sekunde durch den Kopf. Er ist sich nicht ganz sicher was es für einer war, aber er fühlt dass es sich um absoluten Schwachsinn handelte."];
                var errorMsg = errorMsgs[Math.floor(Math.random()*errorMsgs.length)];
                $(".game p").append("<br>" + errorMsg.replace('[VUET]', $('#gameinput').val()) + "<br>");
                $(".game p").scrollTop(1E10);
              }
            }
          }
        });

        $("#gameinput").keypress(function() {

        });
    };
    game.ifFirstRun = function() {
      if(game.settings.lastPlayedSave > 0) {
        $("#continue").html("Continue");
      }
    }
    /* =============================================
     MAIN LOOP
     ============================================= */
    game.startLoop = function() {
        console.debug("loopdidoop");
        setTimeout(game.startLoop, 200);
    };
};
//Load EVERYTHING
game.load();
//Let's launch this
$(function() {
    $('.tooltipped').tooltip({delay: 50});
    game.startIntro();
    /* Loading Settings */
    game.loadSettings();
    /* Loading Saves */
    game.loadSaves();
    /* start Game-Loop */
    game.startLoop();
    /* Stuff */
    game.ifFirstRun();
    if(game.settings.speechrecognition) {
      annyang.start({ autoRestart: true, continuous: true });
    }
    /* EVENT LISTENERS */
    $('.event').on("click", function() {
        console.debug($(this).attr("id"));
        if ($(this).attr("id") == "settings") {
            Cookies.set("settings", [game.settings, game.globalVariables], {
                expires: 730
            });
            game.loadSettings();
            game.toggleMenu(".settings");
        } else if ($(this).attr("id") == "load") {
            game.lvlSelectUpdate();
            game.toggleMenu(".lvlSelect");
        } else if ($(this).attr("id") == "continue") {
          if(game.settings.lastPlayedSave > 0) {
            game.launchGame(game.settings.lastPlayedSave, "shatteredpast", game.settings.language);
          }
          else {
            game.launchGame(1, "shatteredpast", game.settings.language);
          }
        } else if ($(this).hasClass("material-icons") || $(this).attr("id") == "gamesettings") {
            game.toggleMenu(".gameoptions");
            if(game.settings.speechrecognition) {
              annyang.start({ autoRestart: true, continuous: true });
            }
        } else if ($(this).attr("id") == "qtmm") {
            game.saveEverything();
            game.toggleMenu(".game");
            game.toggleMenu(".gameoptions");
        } else if ($(this).attr("id") == "lvlselectbtn") {
            console.debug($(this).attr("id"));
        }
    });
    /* Write Level Select */
    game.lvlSelectUpdate();
});
