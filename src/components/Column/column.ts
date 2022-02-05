import styled from "styled-components";


export const ColumnComponent = styled.li`
  width: 280px;
  
  border-radius: 10px;
  margin-right: 20px;
  background: ${props => props.color || '#48D1CC'};
  box-shadow: 5px 8px 2px #0004;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColumnLabel = styled.span`
  font-size: 1.5rem;
  color: white;
`;