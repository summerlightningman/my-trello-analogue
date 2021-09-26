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

    const button = <button onClick={switchState}>Добавить</button>;

    const addBoard: MouseEventHandler<HTMLButtonElement> = () => {
        const board: Board = {name: newBoardName};
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
    };

    const input = <div>
        <input type="text" value={newBoardName} onInput={handleInput}/>
        <button onClick={addBoard} disabled={!newBoardName}>Добавить</button>
        <button onClick={switchState}>Отмена</button>
    </div>;

    return (
        <div className="board-list-item board-list-item-add">
            {isAddingBoard ? input : button}
        </div>
    );
};

export default BoardListItemAdd;