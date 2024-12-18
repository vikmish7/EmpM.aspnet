# EmpM.aspnet

For DB setup in SSMS, once connected to local DB and server started , create new query as below and execute them

Result: This will create 2 table Employee and department
Also will create 2 stored procedures
sPGetEmployees
sPGetEmployeeDepartments


=========================================================
CREATE TABLE [dbo].[EMPLOYEE](
	[EmployeeId] [int] IDENTITY(1,1) PRIMARY KEY ,
	[EmployeeName] [varchar](255) NULL,
	[Designation] [varchar](255) NULL,
	[NID] [varchar](255) NULL,
	[bloodGroup] [varchar](25) NULL,
	[JoiningDate] [datetime] NULL,
	[DepartmentId] [int] NULL
) ON [PRIMARY]
GO

CREATE TABLE DEPARTMENT
(
	DepartmentId INT,
	Code	VARCHAR(255),
	Name VARCHAR(255)
)
GO




SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE sPGetEmployees
	AS
BEGIN
	SET NOCOUNT ON;
 
	SELECT * FROM dbo.EMPLOYEE
END
GO
 
exec sPGetEmployees



SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE sPGetEmployeeDepartments
	AS
BEGIN
	SET NOCOUNT ON;
 
	SELECT E.*,D.Code,D.Name as DepartmentName FROM dbo.EMPLOYEE E
	INNER JOIN DEPARTMENT D
	ON E.DepartmentId=D.DepartmentId
 
    
END
GO
exec sPGetEmployeeDepartments


=============================================================