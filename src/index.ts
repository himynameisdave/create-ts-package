#!/usr/bin/env ts-node

import * as fs from 'fs';
import program from 'commander';
import updateNotifier from 'update-notifier';
// import execa from 'execa';
import Listr from 'listr';


const pkg = require('../package.json');

// Update if newer version exists
updateNotifier({ pkg }).notify();

program
    .version(pkg.version, '-v, --version')
    .usage('<module-name> [options] ')
    .option('-e, --no-eslint', `Don't include ESLint`)
    .option('-t, --no-travis', `Don't include TravisCI`)
    .option('-c, --no-coveralls', `Don't include Coveralls`)
    .option('-j, --no-jest', `Don't include Jest`)
    .parse(process.argv);

const file = program.args[0];


const tasks = new Listr([
    {
        title: 'Checking Credentials',
        task: () => new Promise(res => {
            setTimeout(res, 2000)
        });
    },
    {
        title: 'Calling cops',
        task: () => new Promise(res => {
            setTimeout(res, 1000)
        });
    }
])

tasks.run().catch(err => {
    console.error(err);
});