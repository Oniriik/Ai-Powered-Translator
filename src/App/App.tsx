import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'Routes';
import { GlobalStyles } from 'Styles';
import { ConfigProvider } from 'antd';

export const App: React.FC = () => {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#01AE89',
                },
            }}
        >
            <BrowserRouter >
                <GlobalStyles />
                <Routes />
            </BrowserRouter>
        </ConfigProvider>
        
    );
};
