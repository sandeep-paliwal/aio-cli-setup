const core = require('@actions/core')
const exec = require('@actions/exec')
const execSync = require('child_process').execSync

try {
  const os = core.getInput('os');
  console.log(" OS - " + os)
  // let options = {
  //     stdio: 'inherit',
  //     env: process.env
  // }
  //  execSync('sudo npm install -g @adobe/aio-cli', options)
  //  execSync('sudo aio -v', options)

   // await exec.exec('npm install -g @adobe/aio-cli')
   // await exec.exec('aio -v')

   runCommand(os)
   .then(res => {
     console.log("done")
   })
   .catch(e => {
     core.setFailed(e.message);
   })

} catch (error) {
  core.setFailed(error.message);
}

async function runCommand(os) {
  let commandStr = 'npm install -g @adobe/aio-cli'
  if(os && !os.startsWith("windows"))
    commandStr = 'sudo ' + commandStr

  await exec.exec(commandStr)
  await exec.exec('aio -v')
}
