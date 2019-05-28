import fs from 'fs-extra';
import path from 'path';
import Listr from 'listr';


const getDirTask = (name: string): Listr.ListrTask => ({
    title: '📂 Creating Directory...',
    task: async (): Promise<any> => await fs.mkdirp(path.resolve(process.cwd(), name, 'src/')),
});

export default getDirTask;