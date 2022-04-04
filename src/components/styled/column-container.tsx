import styled from "styled-components";
import {ColumnContainerProps} from "../../types/column";

const ColumnContainer = styled.li<ColumnContainerProps>`
  width: 280px;
  min-width: 280px;
  ${props => props.height && `height: ${props.height}`};
  
  border-radius: 10px;
  margin-right: 20px;
  background: ${props => props.color || '#48D1CC'};
  box-shadow: 5px 8px 2px #0004;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ColumnContainer