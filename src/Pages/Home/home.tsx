// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from 'react';
import { InputText } from 'Components';
import { Button, notification, Select } from 'antd';
import { CopyOutlined, RightSquareTwoTone,LoadingOutlined } from '@ant-design/icons';

import { AItranslate } from 'Utils/openIA';
import { spokenLanguages } from 'Utils/language';
import * as Styled from './styled';

export const Home: React.FC= () => {
    const [inputText, setInput] = useState('');
    const [inputLanguage, setInputLanguage] = useState();
    const [result, setResult] = useState('');
    const [resultLanguage, setResultLanguage] = useState();
    const [isLoading, setLoading] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const copyContent = async () => {
        if(!result || !resultLanguage) {return;}
        try {
            await navigator.clipboard.writeText(result);
            api['success']({
                message: 'Text copied',
                placement:'bottomRight',
                duration: 1.5,
            });
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
      
    const btnColor = () => {
        return inputText && resultLanguage ? '#01AE89':'#c6c6c6';
    };
    
    const translate = async() => {
        setLoading(true);
        const result = await AItranslate(inputLanguage,inputText.trim(),resultLanguage);
        setResult(result);
        setLoading(false);
    };
    return (
        <Styled.Container 
            style={{ backgroundImage: `url(${require('./Assets/green-bg2.png')})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
            {contextHolder}
            <Styled.Hero>
                <span>
                    AI Powered Translator
                </span>
                <Styled.HeroLogo size={'70px'}/>
            </Styled.Hero>
            <Styled.SelectorContainer>
                <Styled.Side>
                    <Select
                        showSearch
                        placeholder="language input (default detect)"
                        optionFilterProp="children"
                        onChange={setInputLanguage}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[{ value:'auto', label:'Auto detect' },...spokenLanguages]}

                    />
                </Styled.Side>
                <Styled.Side>
                    <Select
                        showSearch
                        placeholder="Translate to ..."
                        optionFilterProp="children"
                        onChange={setResultLanguage}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={spokenLanguages}
                    />
                    {/* <Select
                        showSearch
                        placeholder="Select a level of language (default common)"
                        optionFilterProp="children"
                        onChange={setLevel}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={
                            [
                                { value:'common', label:'common language' },
                                { value:'familiar', label:'familiar language' },
                                { value:'formal', label:'formal language' },
                            ]
                        }
                    /> */}
                </Styled.Side>
            </Styled.SelectorContainer>
            <Styled.FieldContainer filled={inputText}>
                <Styled.Side>
                    <InputText value={inputText} setValue={setInput} placeholder={'Translate'} disabled={false}/>
                </Styled.Side>
                
                {isLoading ?
                    <LoadingOutlined
                        className='translateBtn'
                        style={{ fontSize: '25px' }}
                    />
                    
                    :
                    <RightSquareTwoTone 
                        className='translateBtn'
                        twoToneColor={btnColor()}
                        style={{ fontSize: '25px' }}
                        onClick={translate}
                    />
                }
                
                <Styled.Side>

                    <InputText value={result} setValue={setResult} placeholder={'Result'} disabled={true} />
                    <Button 
                        icon={<CopyOutlined />}
                        onClick={copyContent}
                        disabled={result ? false: true}
                    />
                </Styled.Side>

            </Styled.FieldContainer>
        </Styled.Container>
    );
    
};
