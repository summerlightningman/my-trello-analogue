import styled from "styled-components";

export interface BoardCardProps {
    background?: string,
    hoverBackground?: string,
    activeBackground?: string
}

export const BoardCard = styled.li<BoardCardProps>`
  width: 250px;
  height: 150px;
  
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  color: white;
  background: ${props => props.background || '#00BFFF'};
  overflow: hidden;
  
  &:hover {
    background: ${props => props.hoverBackground || '#1E90FF'};
  }
  
  &:active {
    background: ${props => props.activeBackground || '#4682B4'};
  }
`;

export const BoardCardLabel = styled.span`
  text-decoration: none;
  font-family: "Century Gothic", sans-serif;
  font-size: 32px;
`;

