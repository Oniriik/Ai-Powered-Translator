import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
  
export const AItranslate= async ( inputLanguage:string,text:string,language: string , level:string) =>{
    console.log(`${inputLanguage == 'auto' ?
        inputLanguage ? 
            `from ${inputLanguage} ` 
            : '' 
        : ''
    }
traduce "${text}" to ${language} 
${level || level == 'common' 
        ? 
        `in a ${level} way` 
        :
        ''}`);
    const result = await openai.createCompletion({
        model: 'text-curie-001',
        prompt: `${inputLanguage == 'auto' ?
            inputLanguage ? 
                `from ${inputLanguage} ` 
                : '' 
            : ''
        }
    traduce "${text}" to ${language} 
    ${level || level == 'common' 
        ? 
        `in a ${level} way` 
        :
        ''}`,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    console.log(result.data.choices[0].text);
    return(result.data.choices[0].text.trim().replace(/"/g, ''));
};
