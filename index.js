const core = require('@actions/core')
const exec = require('@actions/exec')
const execSync = require('child_process').execSync

try {
  // let options = {
  //     stdio: 'inherit',
  //     env: process.env
  // }
  //  execSync('sudo npm install -g @adobe/aio-cli', options)
  //  execSync('sudo aio -v', options)

   // await exec.exec('npm install -g @adobe/aio-cli')
   // await exec.exec('aio -v')
   runCommand()
   .then(res => {
     console.log("done")
   })
   .catch(e => {
     core.setFailed(e.message);
   })

} catch (error) {
  core.setFailed(error.message);
}

async function runCommand() {
  await exec.exec('npm install -g @adobe/aio-cli')
  await exec.exec('aio -v')
}
