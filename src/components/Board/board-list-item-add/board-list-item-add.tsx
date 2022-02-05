import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';
import styled from "styled-components";

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../../store/types/board";
import {Board} from "../../../types/board";

import {BoardCard, BoardCardLabel} from "../board-card";
import {ButtonsPanel, ButtonAdd, ButtonCancel} from "../../buttons";

const BoardItemAdd = styled(BoardCard)`
  background: #00FF7F;

  &:hover {
    background: #3CB371;
  }
`;

const BoardItemAddLabel = styled(BoardCardLabel)`
  color: #1E90FF;
`;

const BoardItemAddButton = styled.button`
  border: none;
  background: transparent;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover ${BoardItemAddLabel} {
    color: white;
  }
`;

const BoardItemAddForm = styled.form`
  width: 100%;
  height: 100%;

  background: #00FF7F;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardAddInput = styled.input`
  width: 80%;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1E90FF;
  padding: 0 0 5px 6px;
  font-size: 20px;
  
`;


const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingBoard: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: !isAddingBoard});


    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addBoard();

    const addBoard = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: false});
    }

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => e.key === 'Enter' && addBoard();

    const handleInputClick: MouseEventHandler<HTMLInputElement> = e => e.stopPropagation();

    const input = <BoardItemAddForm onClick={switchIsAddingBoard}>
        <BoardAddInput
            type="text"
            value={newBoardName}
            onInput={handleInput}
            onKeyPress={handleKeyPress}
            onClick={handleInputClick}
            autoFocus
        />
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!newBoardName}>Add</ButtonAdd>
            <ButtonCancel onClick={switchIsAddingBoard}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </BoardItemAddForm>;

    const button = <BoardItemAddButton onClick={switchIsAddingBoard}>
        <BoardItemAddLabel>Add card</BoardItemAddLabel>
    </BoardItemAddButton>;

    return (
        <BoardItemAdd>
            {isAddingBoard ? input : button}
        </BoardItemAdd>
    );
};

export default BoardListItemAdd;