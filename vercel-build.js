const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting custom Vercel build script...');

try {
    // 1. Build Frontend
    console.log('Building frontend...');
    // Ensure we are in the root, so we cd into frontend
    execSync('cd frontend && npm run build', { stdio: 'inherit' });

    // 2. Define paths
    const sourceDir = path.join(__dirname, 'frontend', 'dist');
    const targetDir = path.join(__dirname, 'dist');

    console.log(`Checking build output at: ${sourceDir}`);
    if (!fs.existsSync(sourceDir)) {
        throw new Error(`Build failed: Directory ${sourceDir} does not exist.`);
    }

    // 3. Clear target directory if it exists
    if (fs.existsSync(targetDir)) {
        console.log(`Cleaning target directory: ${targetDir}`);
        fs.rmSync(targetDir, { recursive: true, force: true });
    }

    // 4. Move artifacts
    console.log(`Moving artifacts from ${sourceDir} to ${targetDir}...`);
    // Using cpSync and rmSync is safer across different file systems than renameSync
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    fs.rmSync(sourceDir, { recursive: true, force: true });

    console.log('Build and move successful! Ready for internal Vercel deployment.');
} catch (error) {
    console.error('Build script failed:', error);
    process.exit(1);
}
