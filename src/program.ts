import program from 'commander';
const pkg = require('../package.json');


program
    .version(pkg.version, '-v, --version')
    .usage('<module-name> [options] ')
    .option('-e, --no-eslint', `Don't include ESLint`)
    .option('-t, --no-travis', `Don't include TravisCI`)
    .option('-c, --no-coveralls', `Don't include Coveralls`)
    .option('-j, --no-jest', `Don't include Jest`)
    .parse(process.argv);

export default program;