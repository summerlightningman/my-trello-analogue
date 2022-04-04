import styled from "styled-components";
import {CardDropSlotComponentProps} from "../../types/card";

const CardDndSlotContainer = styled.div<CardDropSlotComponentProps>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.isOver && `
    height: 70px;
    border: 2px dashed white;
    margin: 10px 0;
  `}
`;

export default CardDndSlotContainer