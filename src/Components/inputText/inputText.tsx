import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea } = Input;

export const InputText = ({ value, setValue, placeholder, disabled }) =>{
    disabled ?? false;
    return(
        <TextInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            autoSize={{ minRows: 10, maxRows: 10 }}
            disabled={disabled}
            style={{ cursor:'default', background: 'white' }}
        />
    );
};

const TextInput = styled(TextArea)`
    color: black!important;
`;