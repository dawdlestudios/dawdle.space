alter table sites add column hidden boolean not null default 0; -- show site on the site directory
alter table sites add column disabled boolean not null default 0; -- disable site temporarily
