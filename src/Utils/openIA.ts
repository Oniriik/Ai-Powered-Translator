import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);
  
export const AItranslate= async ( inputLanguage:string,text:string,language: string) =>{

    const result = await openai.createCompletion({
        model: 'text-curie-001',
        prompt: `${inputLanguage == 'auto' ?
            inputLanguage ? 
                `from ${inputLanguage} ` 
                : '' 
            : ''
        }
    "${text}" to ${language}`,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    console.log(result.data.choices[0].text);
    return(result.data.choices[0].text.trim().replace(/"/g, ''));
};
