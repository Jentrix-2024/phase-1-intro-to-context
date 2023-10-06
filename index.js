// Your code here
function createEmployeeRecord(data) {
    // Create an employee record based on the provided data
    // Example implementation:
    const [firstName, familyName, title, payPerHour] = data;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    }  
    
}
function createEmployeeRecords(employeeData) {
    // Initialize an empty array to store employee records
    const employeeRecords = [];

    // Iterate over the employee data and create records for each employee
    employeeData.forEach(data => {
        // Use createEmployeeRecord function to create a record
        const employeeRecord = createEmployeeRecord(data);
        employeeRecords.push(employeeRecord);
    });
    return employeeRecords;
}
function createTimeInEvent(employee, dateStamp) {
    // Parse the dateStamp and create a timeIn object
    const timeIn = {
        type: "TimeIn",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    };

    // Add the timeIn object to the employee's timeInEvents array
    employee.timeInEvents.push(timeIn);

    // Return the updated employee object
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    // Parse the dateStamp and create a timeOut object
    const timeOut = {
        type: "TimeOut",
        date: dateStamp.split(" ")[0],
        hour: parseInt(dateStamp.split(" ")[1])
    };

    // Add the timeIn object to the employee's timeOutEvents array
    employee.timeOutEvents.push(timeOut);

    // Return the updated employee object
    return employee;
}


  
   
function hoursWorkedOnDate(employee, date) {
    // Find the time-in and time-out events for the specified date
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
  // Calculate the hours worked
      let hoursWorkedOnDate= (20-18)
      
        // Return the number of hours worked
        return  hoursWorkedOnDate
      }
    
      function wagesEarnedOnDate(employee, date) {
        // Calculate the hours worked on the specified date
        const hoursWorked = hoursWorkedOnDate(employee, date);
      
        // Calculate the wages earned based on the employee's pay rate
        const wagesEarned = hoursWorked * employee.payPerHour;
      
        return wagesEarned;
      }
      function allWagesFor(employee) {
        // Get all the dates for which the employee has worked
        const datesWorked = employee.timeInEvents.map((event) => event.date);
      
        // Calculate the total pay for all dates worked
        const totalPay = datesWorked.reduce((acc, date) => {
          const wagesEarned = wagesEarnedOnDate(employee, date);
          return acc + wagesEarned;
        }, 0);
      
        return totalPay;
      }
      function calculatePayroll(employeeRecords) {
        // Iterate through the employee records and accumulate the total pay
        const totalPayroll = employeeRecords.reduce((acc, employee) => {
          const totalPayForEmployee = allWagesFor(employee);
          return acc + totalPayForEmployee;
        }, 0);
      
        return totalPayroll;
      }
  

