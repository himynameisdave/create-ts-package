import { prompt } from 'enquirer';
import kebab from 'lodash.kebabcase';


export const promptName = async () => await prompt({
    type: 'input',
    name: 'name',
    message: 'What is your module called?',
    validate: (name: string) => {
        if (!name || !name.trim()) {
            return '🙅‍♀️ Please provide a module name.'
        }
        return true;
    },
    result: name => kebab(name.trim()),
});

const getName = async (inputName: string): Promise<string> => {
    if (!inputName || !inputName.trim()) {
        const result: any = await promptName();
        return result.name;
    }
    return inputName;
};

export default getName;