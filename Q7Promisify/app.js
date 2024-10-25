const fs = require('fs');
const util = require('util');

// Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

// Function to delete a file
const deleteFile = async (filePath) => {
    try {
        await unlinkAsync(filePath);
        console.log(`Successfully deleted ${filePath}`);
    } catch (error) {
        console.error(`Error deleting file: ${error.message}`);
    }
};

// Call the deleteFile function
const filePath = 'path/to/your/file.txt'; // Change this to your file path
deleteFile(filePath);
