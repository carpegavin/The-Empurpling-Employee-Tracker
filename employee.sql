DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
  id int PRIMARY KEY,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL
);

CREATE TABLE role (
  id int PRIMARY KEY,
  title varchar(30) NOT NULL,
  salary decimal, 
  department_id int NOT NULL
);

CREATE TABLE department (
  id int PRIMARY KEY,
  name varchar(30) NOT NULL
);