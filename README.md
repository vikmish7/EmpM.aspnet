# Employee Management Application

A simple ASP.NET application to manage employees and departments.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Database Configuration](#database-configuration)
3. [Running the Application](#running-the-application)
4. [Troubleshooting](#troubleshooting)
5. [About](#about)

---

## Project Setup

### Prerequisites

- Microsoft SQL Server Management Studio (SSMS)
- Visual Studio with ASP.NET support
- .NET Framework installed on your system

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/vikmish7/EmpM.aspnet.git
   cd EmpM.aspnet
Open the solution file EmployeeManagementApp.sln in Visual Studio.

Configure your database connection in the Web.config file (refer to Database Configuration).

Database Configuration
Open SSMS and connect to your local database server.

Run the following SQL scripts to set up the database, tables, and stored procedures.

SQL Script for Tables and Procedures
Copy and execute the following SQL script in SSMS:

sql
Copy code
BEGIN TRY
    -- Drop existing tables and procedures if they exist
    IF OBJECT_ID('dbo.Employee', 'U') IS NOT NULL DROP TABLE dbo.Employee;
    IF OBJECT_ID('dbo.Department', 'U') IS NOT NULL DROP TABLE dbo.Department;

    IF OBJECT_ID('dbo.InsertEmployee', 'P') IS NOT NULL DROP PROCEDURE dbo.InsertEmployee;
    IF OBJECT_ID('dbo.InsertDepartment', 'P') IS NOT NULL DROP PROCEDURE dbo.InsertDepartment;
    IF OBJECT_ID('dbo.GetEmployees', 'P') IS NOT NULL DROP PROCEDURE dbo.GetEmployees;
    IF OBJECT_ID('dbo.GetDepartments', 'P') IS NOT NULL DROP PROCEDURE dbo.GetDepartments;
    IF OBJECT_ID('dbo.UpdateEmployee', 'P') IS NOT NULL DROP PROCEDURE dbo.UpdateEmployee;
    IF OBJECT_ID('dbo.UpdateDepartment', 'P') IS NOT NULL DROP PROCEDURE dbo.UpdateDepartment;
    IF OBJECT_ID('dbo.DeleteEmployee', 'P') IS NOT NULL DROP PROCEDURE dbo.DeleteEmployee;
    IF OBJECT_ID('dbo.DeleteDepartment', 'P') IS NOT NULL DROP PROCEDURE dbo.DeleteDepartment;

    -- Create Employee Table
    CREATE TABLE dbo.Employee (
        EmployeeId INT IDENTITY PRIMARY KEY,
        EmployeeName VARCHAR(50),
        Designation VARCHAR(30),
        NID VARCHAR(20),
        BloodGroup VARCHAR(5),
        JoiningDate DATETIME,
        DepartmentId INT
    );

    -- Create Department Table
    CREATE TABLE dbo.Department (
        DepartmentId INT PRIMARY KEY,
        Code VARCHAR(255),
        DNAME VARCHAR(50)
    );

    PRINT 'Tables created successfully.';

    -- Create Insert Employee Procedure
    CREATE PROCEDURE dbo.InsertEmployee
        @EmployeeName VARCHAR(50),
        @Designation VARCHAR(30),
        @NID VARCHAR(20),
        @BloodGroup VARCHAR(5),
        @JoiningDate DATETIME,
        @DepartmentId INT
    AS
    BEGIN
        INSERT INTO dbo.Employee (EmployeeName, Designation, NID, BloodGroup, JoiningDate, DepartmentId)
        VALUES (@EmployeeName, @Designation, @NID, @BloodGroup, @JoiningDate, @DepartmentId);
    END;

    -- Create Insert Department Procedure
    CREATE PROCEDURE dbo.InsertDepartment
        @DepartmentId INT,
        @Code VARCHAR(255),
        @DNAME VARCHAR(50)
    AS
    BEGIN
        INSERT INTO dbo.Department (DepartmentId, Code, DNAME)
        VALUES (@DepartmentId, @Code, @DNAME);
    END;

    -- Create Retrieve Employees Procedure
    CREATE PROCEDURE dbo.GetEmployees
        @EmployeeId INT = NULL,
        @EmployeeName VARCHAR(50) = NULL,
        @Designation VARCHAR(30) = NULL
    AS
    BEGIN
        SELECT * FROM dbo.Employee
        WHERE (@EmployeeId IS NULL OR EmployeeId = @EmployeeId)
          AND (@EmployeeName IS NULL OR EmployeeName LIKE '%' + @EmployeeName + '%')
          AND (@Designation IS NULL OR Designation LIKE '%' + @Designation + '%');
    END;

    -- Create Retrieve Departments Procedure
    CREATE PROCEDURE dbo.GetDepartments
        @DepartmentId INT = NULL,
        @Code VARCHAR(255) = NULL
    AS
    BEGIN
        SELECT * FROM dbo.Department
        WHERE (@DepartmentId IS NULL OR DepartmentId = @DepartmentId)
          AND (@Code IS NULL OR Code LIKE '%' + @Code + '%');
    END;

    PRINT 'Procedures created successfully.';
END TRY
BEGIN CATCH
    PRINT 'Error occurred: ' + ERROR_MESSAGE();
END CATCH;
Configuring Web.config
Update the following section in the Web.config file with your SQL Server details:

xml
Copy code
<connectionStrings>
    <add name="DefaultConnection" connectionString="Data Source=YOUR_SERVER_NAME;Initial Catalog=YOUR_DATABASE_NAME;Integrated Security=True;" providerName="System.Data.SqlClient" />
</connectionStrings>
Replace YOUR_SERVER_NAME and YOUR_DATABASE_NAME with your actual SQL Server details.

Running the Application
After completing the setup, press F5 in Visual Studio to run the application.

Access the application in your browser using the URL provided by Visual Studio (e.g., http://localhost:1234).

Troubleshooting
Common Issues and Solutions
Database Connection Errors: Ensure your SQL Server is running and the connection string in the Web.config file is correct.

SQL Errors: Verify that the SQL scripts were executed successfully in SSMS.

Missing Dependencies: Restore NuGet packages in Visual Studio:

bash
Copy code
nuget restore
About
This application provides CRUD operations for managing employees and departments. It is built using ASP.NET and SQL Server for backend management.

Languages Used:
C#
JavaScript
HTML
Feel free to contribute or raise issues for improvements!

vbnet
Copy code
