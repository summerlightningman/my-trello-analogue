import styled from "styled-components";
import {CardContainerProps} from "../../types/card";

const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  height: 70px;
  background: ${props => props.color || 'white'};
  border-radius: 10px;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 4px 6px 2px #0004;
`;

export default CardContainer