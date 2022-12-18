import styled from 'styled-components';

import { Logo } from 'Components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;

    height: 100vh;
`;
export const Hero = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;
    font-size: 2em;
    margin-bottom: 3em;
`;
export const HeroLogo = styled(Logo)`

`;

export const SelectorContainer= styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.5em;
    width: 100%;
    @media (max-width: 800px) {
        gap: 0.5em;
    }   
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 0.5em;

    .translateBtn{
       cursor: ${(props) => props.filled ? 'pointer':'default'};
    }   

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;

        .translateBtn{
            svg{
                transform: rotate(90deg);
            }
        }
    }   
`;

export const Side= styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    gap: 1em;
    width: 100%;
    
    .ant-select{
        width: 30%;
        min-width: fit-content;
    }
    button{
        position: absolute!important;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        border: none;
        transition: 0.5 s;
        background-color: none;
    }
`;