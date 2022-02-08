import styled from "styled-components";

interface CardComponentProps {
    color?: string,
    isDragging?: boolean,
    isOver?: boolean
}

interface CardDropSlotComponentProps {
    isOver: boolean;
}

export const CardDndSlotComponent = styled.div<CardDropSlotComponentProps>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props => props.isOver && `
    height: 70px;
    border: 2px dashed white;
  `}
`;

export const CardComponent = styled.div<CardComponentProps>`
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

export const CardLabel = styled.span`
  cursor: default;
  font-size: 20px;
`;



export const CardDndLabel = styled.span`
  text-align: center;
  color: white;
`;