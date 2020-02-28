const core = require('@actions/core')
const execSync = require('child_process').execSync

try {
  let options = {
      stdio: 'inherit',
      env: process.env
  }
   execSync('sudo npm install -g @adobe/aio-cli', options)
   execSync('sudo aio -v', options)

} catch (error) {
  core.setFailed(error.message);
}
