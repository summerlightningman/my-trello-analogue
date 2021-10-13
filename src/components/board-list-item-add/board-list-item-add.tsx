import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../store/types/board";
import {Board} from "../../types/board";

import './board-list-item-add.css';

const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingBoard: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: !isAddingBoard});

    const handleInput:  FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addBoard();

    const addBoard = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: false});
    }

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => e.key === 'Enter' && addBoard();

    const button = <button onClick={switchIsAddingBoard} className="board-list-item-add__btn">Add board</button>;
    const input = <>
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
    </>;

    return (
        <div className="board-list-item__wrapper">
            <div className="board-list-item board-list-item-add">
                {isAddingBoard ? input : button}
            </div>
        </div>
    );
};

export default BoardListItemAdd;