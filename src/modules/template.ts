import fs from 'fs-extra';
import path from 'path';
import { render } from 'mustache';
import Listr from 'listr';

export interface MustacheView {
    name: string,
    description: string
}

export const copyTemplate = (
    name: string,
    template: string,
    config: MustacheView
): Listr.ListrTask => ({
    title: `📄 Writing ${template}...`,
    task: async (): Promise<any> => {
        const paths = {
            from: <string> path.resolve(__dirname, '../', `templates/`, `${template}.mustache`),
            to: <string> path.resolve(process.cwd(), `${name}/`, template),
        }
        const raw: string = await fs.readFile(paths.from, 'utf8');
        const rendered: string = render(raw, config);
        await fs.writeFile(paths.to, rendered);
    },
});
