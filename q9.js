const mysql = require('mysql');

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedb',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Function to execute a query and return a promise
function executeQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function insertEmployeeRecord(employee) {
  try {
    const query = 'INSERT INTO employee (name, age, destination) VALUES (?, ?, ?)';
    const params = [employee.name, employee.age, employee.designation];

    await executeQuery(query, params);
    console.log('Employee record inserted successfully!');
  } catch (error) {
    console.error('Error inserting employee record:', error);
  }
}

async function displayAllEmployees() {
  try {
    const query = 'SELECT * FROM employee';
    const employees = await executeQuery(query);
    console.log('All employees:');
    console.log(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

async function main() {
  const employee = {
    name: 'ABC',
    age: 21,
    designation: 'Software Engineer',
  };

  await insertEmployeeRecord(employee);
  await displayAllEmployees();

  pool.end(); // Close the connection pool when done
}

main();