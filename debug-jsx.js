import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('=== Enhanced JSX Runtime Debug & Recovery ===\n');

// Check package manager lock files
console.log('1. 🔍 Checking lock files:');
const hasPackageLock = fs.existsSync('package-lock.json');
const hasBunLock = fs.existsSync('bun.lockb');
const hasYarnLock = fs.existsSync('yarn.lock');

console.log(`   - package-lock.json: ${hasPackageLock ? '✅' : '❌'}`);
console.log(`   - bun.lockb: ${hasBunLock ? '✅' : '❌'}`);
console.log(`   - yarn.lock: ${hasYarnLock ? '✅' : '❌'}`);

if (hasBunLock) {
  console.log('\n🗑️  REMOVING conflicting bun.lockb file...');
  try {
    fs.unlinkSync('bun.lockb');
    console.log('   ✅ Removed bun.lockb');
  } catch (e) {
    console.log(`   ❌ Failed to remove bun.lockb: ${e.message}`);
  }
}

// Check current npm installation health
console.log('\n2. 🏥 Checking npm installation health:');
try {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  if (fs.existsSync(nodeModulesPath)) {
    console.log('   - node_modules exists');

    // Check React installation
    const reactPackagePath = path.join(nodeModulesPath, 'react', 'package.json');
    if (fs.existsSync(reactPackagePath)) {
      const reactPackage = JSON.parse(fs.readFileSync(reactPackagePath, 'utf8'));
      console.log(`   - React ${reactPackage.version}: ✅`);
    } else {
      console.log('   - React: ❌ Not found');
    }

    // Check JSX runtime files
    const jsxRuntimePath = path.join(nodeModulesPath, 'react', 'jsx-runtime.js');
    const jsxDevRuntimePath = path.join(nodeModulesPath, 'react', 'jsx-dev-runtime.js');

    if (fs.existsSync(jsxRuntimePath)) {
      console.log('   - JSX Runtime: ✅ Available');
    } else {
      console.log('   - JSX Runtime: ❌ Missing');
    }

    if (fs.existsSync(jsxDevRuntimePath)) {
      console.log('   - JSX Dev Runtime: ✅ Available');
    } else {
      console.log('   - JSX Dev Runtime: ❌ Missing');
    }

  } else {
    console.log('   - node_modules: ❌ Not found');
  }
} catch (e) {
  console.log(`   ❌ Error checking installation: ${e.message}`);
}

// Recovery steps
console.log('\n3. 🔧 Recovery Recommendations:');

if (hasBunLock || !fs.existsSync('node_modules')) {
  console.log('   📋 Run these commands to fix the installation:');
  console.log('   ');
  console.log('   rm -rf node_modules package-lock.json bun.lockb');
  console.log('   npm cache clean --force');
  console.log('   rm -rf ~/.npm/_cacache');
  console.log('   npm install');
  console.log('   ');
  console.log('   💡 Alternative: If npm continues to fail, consider using a different package manager temporarily:');
  console.log('   npm install -g yarn');
  console.log('   yarn install');
}

console.log('\n4. ✅ Verification:');
console.log('   After fixing the installation, run:');
console.log('   npx tsc --noEmit');
console.log('   npm run build');

console.log('\n=== End Enhanced Diagnostics ===');