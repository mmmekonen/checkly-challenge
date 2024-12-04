import fs from 'fs';
import { BrowserCheck } from 'checkly/constructs';
import { emailChannel } from '../alert-channels'

// Set alert channels to email only
const alertChannels = [emailChannel]

// This reads a directory and extracts all file paths containing '.spec.ts'
const files = fs.readdirSync('__checks__/');
const specFiles = files.filter((filename) => {
    return filename.includes('.spec.ts');
});

// Here we create a new browser check for each Playwright test
// Each browser check has an email alert
for (const specFile of specFiles) {
    new BrowserCheck(`${specFile}`, {
        name: `${specFile}`,
        alertChannels,
        code: {
            entrypoint: specFile,
        },
        runParallel: true,
    });
}