CREATE DATABASE network_inventory;
CREATE USER network_admin WITH PASSWORD 'saleh';
GRANT ALL PRIVILEGES ON DATABASE network_inventory to network_admin;
\c network_inventory

CREATE TABLE devices (
  device_id       INTEGER NOT NULL,
  product_no      VARCHAR(128) NOT NULL,
  product_des     VARCHAR(256) NOT NULL,
  S/N             VARCHAR(64) NOT NULL,
  PRIMARY KEY     ( device_id )
);

CREATE TABLE sites (
  site_id     INTEGER NOT NULL,
  name            VARCHAR(128) NOT NULL,
  street_address  VARCHAR(256) NOT NULL,
  city            VARCHAR(64) NOT NULL,
  state           VARCHAR(32) NOT NULL,
  zip             VARCHAR(16) NOT NULL,
  phone           VARCHAR(16) NOT NULL,
  PRIMARY KEY     ( site_id )
);

CREATE TABLE tech (
  tech_id         INTEGER NOT NULL,
  name            VARCHAR(128) NOT NULL,
  description     TEXT NOT NULL,
  device_id  INTEGER NOT NULL,
  PRIMARY KEY ( tech_id ),
  CONSTRAINT fk_device FOREIGN KEY (device_id) REFERENCES devices(device_id)
);
CREATE TABLE locations (
  device_id       INTEGER NOT NULL,
  site_id         INTEGER NOT NULL,
  tech_id         INTEGER NOT NULL,
  PRIMARY KEY ( device_id, site_id, tech_id ),
  CONSTRAINT fk_tech FOREIGN KEY (tech_id) REFERENCES tech(tech_id), 
  CONSTRAINT fk_site FOREIGN KEY (site_id) REFERENCES sites(site_id)
);


GRANT ALL PRIVILEGES ON devices, sites, tech, locations TO network_admin;
