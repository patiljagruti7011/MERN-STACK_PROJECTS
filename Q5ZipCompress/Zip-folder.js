const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const folderPath = 'path/to/your/folder'; // Replace with the path to your folder
const outputZipPath = 'output.zip'; // Name of the output zip file

function zipFolder(source, out) {
    const output = fs.createWriteStream(out);
    const archive = archiver('zip', {
        zlib: { level: 9 } // Set the compression level
    });

    output.on('close', () => {
        console.log(`Zipped ${archive.pointer()} total bytes`);
        console.log('Zip file has been created successfully!');
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(source, false); // `false` means no prefix
    archive.finalize();
}

zipFolder(folderPath, outputZipPath);
