create table users (
    username text primary key not null,
    password_hash text not null,
    role text,
    created_at datetime not null default (strftime('%s', 'now')),

    minecraft_username text,
    minecraft_uuid text
);

create table sites (
    site_id text primary key not null,
    domain text not null,
    owner text not null,
    created_at datetime not null default (strftime('%s', 'now')),
    custom_domain text,
    redirect_to_custom_domain boolean not null default false,
    access_token text,
    foreign key (owner) references users (username) on delete cascade
);

create table sessions (
    session_token text primary key not null,
    username text not null,
    created_at datetime not null default (strftime('%s', 'now')),
    last_active datetime not null default (strftime('%s', 'now')),
    logged_out boolean not null default false,
    foreign key (username) references users (username) on delete cascade
);

create table applications (
    application_id text primary key not null,
    requested_username text not null,
    email text not null,
    about text not null,
    approved boolean not null default false,
    claimed boolean not null default false,
    claim_token text,
    created_at datetime not null default (strftime('%s', 'now'))
);

insert into users (username, password_hash, role) values ('system', '', 'admin');
insert into sites (site_id, domain, owner) values ('www', 'dawdle.space', 'system');
