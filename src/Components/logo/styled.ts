import styled from 'styled-components';

type ILogo = {
    size: string;
};
export const Logo = styled.img<ILogo>`
    height:${(props) => props.size || '100px'};
;
    width:${(props) => props.size || '100px'};
;
`;
