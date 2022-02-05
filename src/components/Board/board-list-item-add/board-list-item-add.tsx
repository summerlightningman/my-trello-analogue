import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';
import styled from "styled-components";

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../../store/types/board";
import {Board} from "../../../types/board";

import {BoardCard, BoardCardLabel} from "../board-card";


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

const BoardItemAddForm = styled(BoardCard)`
  width: 100%;
  height: 100%;

  background: transparent;
`;


const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingBoard: MouseEventHandler<HTMLButtonElement | HTMLLIElement> = () =>
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

    const button = <BoardItemAddButton onClick={switchIsAddingBoard}>
        <BoardItemAddLabel>Add card</BoardItemAddLabel>
    </BoardItemAddButton>;

    const input = <BoardItemAddForm onClick={switchIsAddingBoard}>
        <input
            type="text"
            value={newBoardName}
            onInput={handleInput}
            onKeyPress={handleKeyPress}
            className="board-list-item-add__input"
        />
        <div className="buttons-panel">
            <button onClick={handleAddClick} disabled={!newBoardName} className="buttons-panel__btn">Add</button>
            <button onClick={switchIsAddingBoard} className="buttons-panel__btn">Cancel</button>
        </div>
    </BoardItemAddForm>;

    return (
        <BoardItemAdd>
            {isAddingBoard ? input : button}
        </BoardItemAdd>
    );
};

export default BoardListItemAdd;