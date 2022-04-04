import styled from "styled-components";
import {BoardCardProps} from "../../types/board-card";

const BoardCard = styled.li<BoardCardProps>`
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

export default BoardCard