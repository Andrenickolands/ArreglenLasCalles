
CREATE DATABASE IF NOT EXISTS ArreglenLasCallesDB;
USE ArreglenLasCallesDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(80) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    CountryId INT NOT NULL,
    Password VARCHAR(225),
    AcceptsTerms BOOLEAN NOT NULL,
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CountryId) REFERENCES Country(id)
);

CREATE TABLE Country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) UNIQUE NOT NULL COLLATE utf8mb4_general_ci,
    Code VARCHAR(8) UNIQUE NOT NULL
);

CREATE TABLE City (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL COLLATE utf8mb4_general_ci,
    CountryId INT NOT NULL,
    FOREIGN KEY (CountryId) REFERENCES Country(id),
    UNIQUE(Name, CountryId)
);

CREATE TABLE Locality (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL COLLATE utf8mb4_general_ci,
    CityId INT NOT NULL,
    FOREIGN KEY (CityId) REFERENCES City(id),
    UNIQUE(Name, CityId)
);

CREATE TABLE Neighborhood (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL COLLATE utf8mb4_general_ci,
    LocalityId INT NOT NULL,
    FOREIGN KEY (LocalityId) REFERENCES Locality(id),
    UNIQUE(Name, LocalityId)
);

CREATE TABLE ReportStatus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Status VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE ReportImportance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Level VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE ReportCategory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Report (
    id INT AUTO_INCREMENT PRIMARY KEY,
    CreationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastUpdatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    HasLocation BOOLEAN DEFAULT FALSE,
    Latitude DECIMAL(9,6), 
    Longitude DECIMAL(9,6), 
    Address VARCHAR(255) NOT NULL,
    Description TEXT, 
    CountryId INT NOT NULL,
    CityId INT NOT NULL,
    LocalityId INT NOT NULL,
    NeighborhoodId INT NOT NULL,
    UserId INT NOT NULL,
    ReportStatusId INT NOT NULL,
    ReportImportanceId INT NOT NULL,
    ReportCategoryId INT NOT NULL,

    FOREIGN KEY (CountryId) REFERENCES Country(id),
    FOREIGN KEY (CityId) REFERENCES City(id),
    FOREIGN KEY (LocalityId) REFERENCES Locality(id),
    FOREIGN KEY (NeighborhoodId) REFERENCES Neighborhood(id),
    FOREIGN KEY (UserId) REFERENCES users(id),
    FOREIGN KEY (ReportStatusId) REFERENCES ReportStatus(id),
    FOREIGN KEY (ReportImportanceId) REFERENCES ReportImportance(id),
    FOREIGN KEY (ReportCategoryId) REFERENCES ReportCategory(id)
);

CREATE TABLE Image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Url VARCHAR(255) NOT NULL,
    ReportId INT NOT NULL, 
    UploadDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ReportId) REFERENCES Report(id)
);
