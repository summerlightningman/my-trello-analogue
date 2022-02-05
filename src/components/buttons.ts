import styled from "styled-components";

export const ButtonsPanel = styled.div`
  margin: 10px 0 0 0;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonBase = styled.button`
  border: none;
  background: none;
  font-family: "Century Gothic", sans-serif;
  cursor: pointer;
  font-size: 20px;
`;

export const ButtonAdd = styled(ButtonBase)`
  border: 1px solid #1E90FF;
  border-radius: 4px;
  width: 80px;
  color: #1E90FF;
  
  &:hover {
    background: #1E90FF;
    color: white;
  }

  &:active {
    background: #4682B4;
  }
`;

export const ButtonCancel = styled(ButtonBase)`
  color: #1E80DF;
`;
