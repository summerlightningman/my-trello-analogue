import {FC, FormEventHandler, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../../store/types/board";
import {Board} from "../../../types/board";

import {GuiActionType} from "../../../store/types/gui";

import './board-list-item-add.css';

const BoardListItemAdd: FC = () => {
    const [newBoardName, boardList] = useTypedSelector(({board}) =>
        [board.newBoardName, board.boardList]);
    const {isAddingBoard} = useTypedSelector(state => state.gui);

    const dispatch = useDispatch();

    const switchState: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: GuiActionType.SWITCH_IS_ADDING_BOARD});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const addBoard: MouseEventHandler<HTMLButtonElement> = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: GuiActionType.SWITCH_IS_ADDING_BOARD, payload: false});
    };

    const button = <button onClick={switchState} className="board-list-item-add__btn">Add board</button>;
    const input = <>
        <input type="text" value={newBoardName} onInput={handleInput} className="board-list-item-add__input"/>
        <div className="buttons-panel">
            <button onClick={addBoard} disabled={!newBoardName} className="buttons-panel__btn">Add</button>
            <button onClick={switchState} className="buttons-panel__btn">Cancel</button>
        </div>
    </>;

    return (
        <div className="board-list-item board-list-item-add">
            {isAddingBoard ? input : button}
        </div>
    );
};

export default BoardListItemAdd;