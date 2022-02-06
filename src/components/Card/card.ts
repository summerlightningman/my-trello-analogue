import styled from "styled-components";

interface CardComponentProps {
    color?: string,
    isDragging?: boolean,
    isOver?: boolean
}

export const CardComponent = styled.li<CardComponentProps>`
  width: 100%;
  height: 70px;
  background: ${props => props.color || 'white'};
  margin-top: 15px;
  border-radius: 10px;
  
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  box-shadow: 4px 6px 2px #0004;
`;

export const CardLabel = styled.span`
  cursor: default;
  font-size: 20px;
`;