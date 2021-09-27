import {FC, FormEventHandler, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {Board, BoardActionTypes} from "../../../types/board";

import './board-list-item-add.css';

const BoardListItemAdd: FC = () => {
    const {isAddingBoard, newBoardName} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchState: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_ADDING_STATE});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const button = <button onClick={switchState} className="board-list-item-add__btn">Добавить</button>;

    const addBoard: MouseEventHandler<HTMLButtonElement> = () => {
        const board: Board = {name: newBoardName};
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: BoardActionTypes.SWITCH_ADDING_STATE, payload: false});
    };

    const input = <>
        <input type="text" value={newBoardName} onInput={handleInput} className="board-list-item-add__input"/>
        <div className="buttons-panel">
            <button onClick={addBoard} disabled={!newBoardName} className="buttons-panel__btn">Добавить</button>
            <button onClick={switchState} className="buttons-panel__btn">Отмена</button>
        </div>
    </>;

    return (
        <div className="board-list-item board-list-item-add">
            {isAddingBoard ? input : button}
        </div>
    );
};

export default BoardListItemAdd;