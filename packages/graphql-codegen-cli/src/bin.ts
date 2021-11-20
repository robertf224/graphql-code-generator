import { parseArgv } from './config';
import { runCli } from './cli';
import { cliError } from './utils/cli-error';

const [, , ...cmd] = process.argv;

runCli(cmd[0] === 'init' ? 'init' : parseArgv(cmd))
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    cliError(error);
  });
