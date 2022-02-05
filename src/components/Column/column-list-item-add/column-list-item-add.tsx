import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';

import {useDispatch} from "react-redux";
import {AiOutlinePlus} from "react-icons/all";

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {BoardActionTypes} from "../../../store/types/board";
import {Column, ColumnListItemAddProps} from "../../../types/column";

import './column-list-item-add.css';

const ColumnListItemAdd: FC<ColumnListItemAddProps> = ({board}) => {

    const {columnList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const {newColumnName, isAddingColumn} = board;

    const switchIsAddingColumn: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN, payload: [board, !isAddingColumn]});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_COLUMN_NAME, payload: [board, e.currentTarget.value]});

    const addColumn = () => {
        const column: Column = new Column(board.id, columnList.length, board.newColumnName);
        dispatch({type: BoardActionTypes.ADD_COLUMN, payload: column});
    }

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addColumn();
    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => e.key === 'Enter' && addColumn();

    const button = <button onClick={switchIsAddingColumn} className="column-list-item-add__btn">
        <AiOutlinePlus color="#0098dd"/>
    </button>;

    const input = <>
        <input
            type="text"
            onInput={handleInput}
            onKeyPress={handleKeyPress}
            value={newColumnName}
            className="column-list-item-add__input"
        />
        <div className="buttons-panel column-list-item-add__btns">
            <button className="buttons-panel__btn" onClick={handleAddClick} disabled={!newColumnName}>Add</button>
            <button className="buttons-panel__btn" onClick={switchIsAddingColumn}>Cancel</button>
        </div>
    </>;

    return (
        <li className="column-list-item column-list-item-add">
            {isAddingColumn ? input : button}
        </li>
    );
};

export default ColumnListItemAdd;