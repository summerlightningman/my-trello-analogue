import styled from "styled-components";
import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from "react";

interface AddInputProps {
    onInput: FormEventHandler<HTMLInputElement>,
    onEnterPress: () => void,
    value: string
}

const InputComponent = styled.input`
  width: 80%;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1E90FF;
  padding: 0 0 5px 6px;
  font-size: 20px;
`;



export const AddInput: FC<AddInputProps> = ({onEnterPress, onInput, value}) => {
    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key !== 'Enter')
            return

        e.preventDefault();
        return onEnterPress()
    };
    const handleClick: MouseEventHandler<HTMLInputElement> = e => e.stopPropagation();

    return <InputComponent
        type='text'
        onKeyPress={handleKeyPress}
        onInput={onInput}
        value={value}
        autoFocus
        onClick={handleClick}
    />
};

