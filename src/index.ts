#!/usr/bin/env ts-node

require('./modules/check-update');
import chalk from 'chalk';
import Listr from 'listr';
import program from './program';
import getDirTask from './modules/dir';
import getName from './modules/name';
import { copyTemplate, MustacheView } from './modules/template'


const BASE_FILES = [
    'package.json',
    // 'rollup.config.ts',
    // 'README.md',
    // 'tsconfig.json',
    // '.babelrc',
    // '.gitignore',
    // 'LICENSE',
];

(async function() {
    try {
        //  Collect config info
        const name: string = await getName(program.args[0]);

        const config: MustacheView = {
            name,
            description: 'Old macdonald on tha farm eyeyayayayah o'
        };

        //  Setup & run the tasks
        const tasks = new Listr([
            getDirTask(name),
            ...BASE_FILES.map(file => copyTemplate(name, file, config))
        ])
        await tasks.run();

        //  Say goodbye
        console.log(`\n  ✨ Boom, ${name} is now a real thing! Time to start building...`);
        process.exit(0);

    } catch(err) {
        console.error('\n  🔥 Something has gone horribly wrong.\n', err);
        process.exit(1);
    }
})();
