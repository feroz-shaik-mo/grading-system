// googleDriveService.js

const { google } = require('googleapis');

// Authenticate with Google API
action = async () => {
    const auth = new google.auth.GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/drive'],
    });
    return auth;
};

// List Files
const listFiles = async () => {
    const auth = await action();
    const drive = google.drive({ version: 'v3', auth });
    const res = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    });
    return res.data.files;
};

// Download File
const downloadFile = async (fileId) => {
    const auth = await action();
    const drive = google.drive({ version: 'v3', auth });
    const dest = fs.createWriteStream(`./${fileId}.jpg`);
    const response = await drive.files.get({
        fileId,
        alt: 'media'
    }, { responseType: 'stream' });
    response.data
        .on('end', () => { console.log('Done downloading file.'); })
        .on('error', err => { console.error('Error downloading file.'); })
        .pipe(dest);
};

// Export functions
module.exports = { listFiles, downloadFile };