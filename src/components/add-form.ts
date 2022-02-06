import styled from "styled-components";

interface AddFormProps {
    color?: string
}

const AddForm = styled.form<AddFormProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background: ${props => props.color || 'transparent'};
`;

export default AddForm;