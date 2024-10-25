const AdmZip = require('adm-zip');
const path = require('path');

// Specify the path to your zip file
const zipFilePath = path.join(__dirname, 'output.zip'); // Replace 'yourfile.zip' with the actual zip file name
const Q6ExtractZip = path.join(__dirname, 'extracted'); // Directory to extract to

// Create a new instance of AdmZip
const zip = new AdmZip(zipFilePath);

// Extract all contents to the output directory
zip.extractAllTo(Q6ExtractZip, true);

console.log(`Extracted to ${Q6ExtractZip}`);
