using EmployeeManagementApp.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace EmployeeManagementApp.DAL
{
    public class EmployeeGateway
    {
        private string connectionString = WebConfigurationManager.ConnectionStrings["EMS"].ConnectionString;
        public List<Employee> GetAllEmployee()
        {
            SqlConnection connection = new SqlConnection(connectionString);
            SqlCommand command = new SqlCommand("sPGetEmployees", connection);
            command.CommandType = CommandType.StoredProcedure;
            connection.Open();
            SqlDataReader reader = command.ExecuteReader();
            var employeeList = new List<Employee>();
            while (reader.Read())
            {

                int employeeId = Convert.ToInt32(reader["EmployeeId"]);
                string Name = reader["Name"].ToString();
                string Designation = reader["Designation"].ToString();
                string NID = reader["NID"].ToString();
                string BloodGroup = reader["BloodGroup"].ToString();
                DateTime JoiningDate = Convert.ToDateTime(reader["JoiningDate"]);
                int DepartmentId = Convert.ToInt32(reader["Departmentid"]);

                Employee em = new Employee(Name, Designation, NID, JoiningDate, DepartmentId, BloodGroup);
                em.EmployeeId = employeeId;
                employeeList.Add(em);

            }
            reader.Close();
            connection.Close();
            return employeeList;
        }

        public string SaveEmployees(Employee employee)
        {
            SqlConnection connection = new SqlConnection(connectionString);
            string query = @"INSERT INTO EMPLOYEE(EmployeeName,Designation,NID,JoiningDate,BloodGroup,DepartmentId) VALUES('" + employee.Name + "','" + employee.Designation + "','" + employee.NID + "','" + employee.JoiningDate + "','" + employee.BloodGroup + "','" + employee.DepartmentId + "')";
            SqlCommand command = new SqlCommand(query, connection);
            connection.Open();
            int rowEffect = command.ExecuteNonQuery();
            connection.Close();

            if (rowEffect > 0)
            {
                return "SuccessFull";
            }
            return "Failed";
        }

        public string DeleteEmployees(int id)
        {
            SqlConnection connection = new SqlConnection(connectionString);

            // Prepare the SQL query to delete the employee by EmployeeId or NID
            string query = @"DELETE FROM EMPLOYEE WHERE EmployeeId = " + id;

            SqlCommand command = new SqlCommand(query, connection);

            // Use parameterized queries to avoid SQL injection
            //command.Parameters.AddWithValue("@EmployeeId", id);

            connection.Open();
            int rowEffect = command.ExecuteNonQuery(); // Execute the query
            connection.Close();

            // Check if any row was affected (i.e., a row was deleted)
            //if (rowEffect > 0)
            //{
            //    return "Success"; // Employee deleted successfully
            //}
            return "Success"; // No rows deleted (e.g., employee not found)
        }

        //public string UpdateEmployee(Employee employee)
        //{
        //    SqlConnection connection = new SqlConnection(connectionString);

        //    // SQL query to update employee details based on EmployeeId or NID
        //    string query = @"
        //UPDATE EMPLOYEE 
        //SET 
        //    EmployeeName = @EmployeeName,
        //    Designation = @Designation,
        //    NID = @NID,
        //    JoiningDate = @JoiningDate,
        //    BloodGroup = @BloodGroup,
        //    DepartmentId = @DepartmentId
        //WHERE EmployeeId = @EmployeeId";  // Or use WHERE NID = @NID if NID is the identifier

        //    SqlCommand command = new SqlCommand(query, connection);

        //    // Use parameterized queries to prevent SQL injection
        //    command.Parameters.AddWithValue("@EmployeeId", employee.EmployeeId);  // Or @NID if NID is used
        //    command.Parameters.AddWithValue("@EmployeeName", employee.Name);
        //    command.Parameters.AddWithValue("@Designation", employee.Designation);
        //    command.Parameters.AddWithValue("@NID", employee.NID);  // Assuming NID is part of the update
        //    command.Parameters.AddWithValue("@JoiningDate", employee.JoiningDate);
        //    command.Parameters.AddWithValue("@BloodGroup", employee.BloodGroup);
        //    command.Parameters.AddWithValue("@DepartmentId", employee.DepartmentId);

        //    try
        //    {
        //        connection.Open();
        //        int rowEffect = command.ExecuteNonQuery();  // Execute the query
        //        connection.Close();

        //        if (rowEffect > 0)
        //        {
        //            return "Success";  // Employee updated successfully
        //        }
        //        return "Failed";  // No rows updated (e.g., employee not found)
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error: " + ex.Message;  // Return the exception message if something goes wrong
        //    }
        //}
    }

}

