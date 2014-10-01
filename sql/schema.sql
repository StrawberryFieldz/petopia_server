CREATE DATABASE petopia;

USE petopia;

CREATE TABLE Users (
  UserId int NOT NULL AUTO_INCREMENT,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  Password varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  -- CreatedAt date NOW(),
  PRIMARY KEY (UserId)
);
