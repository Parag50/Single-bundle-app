const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const buildDir = path.join(__dirname, 'build');
const assetsDir = path.join(buildDir, 'assets', 'images');

// Create the assets/images directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Move images into the assets/images directory
fs.readdirSync(buildDir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const oldPath = path.join(buildDir, file);
    const newPath = path.join(assetsDir, file);
    fs.renameSync(oldPath, newPath);
  }
});
