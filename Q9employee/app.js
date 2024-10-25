const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'root', // replace with your MySQL password
    database: 'company',
};

// Function to connect to the database
async function connectDB() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Database connected successfully.');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Function to insert an employee record
async function insertEmployee(name, position, salary) {
    const connection = await connectDB();
    const query = 'INSERT INTO employee (name, position, salary) VALUES (?, ?, ?)';
    try {
        const [result] = await connection.execute(query, [name, position, salary]);
        console.log('Employee inserted with ID:', result.insertId);
    } catch (error) {
        console.error('Error inserting employee:', error);
    } finally {
        await connection.end();
    }
}

// Function to display all employee records
async function displayEmployees() {
    const connection = await connectDB();
    const query = 'SELECT * FROM employee';
    try {
        const [rows] = await connection.execute(query);
        console.log('Employee Records:', rows);
    } catch (error) {
        console.error('Error fetching employees:', error);
    } finally {
        await connection.end();
    }
}

// Example usage
(async () => {
    await insertEmployee('John Doe', 'Software Engineer', 70000);
    await displayEmployees();
})();
