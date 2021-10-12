import {FC, FormEventHandler, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import {BoardActionTypes} from "../../../../store/types/board";
import {Column, ColumnListItemAddProps} from "../../../../types/column";

import './column-list-item-add.css';

const ColumnListItemAdd: FC<ColumnListItemAddProps> = ({board}) => {
    const {isAddingColumn, newColumnName} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingColumn: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN, payload: !isAddingColumn});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_COLUMN_NAME, payload: e.currentTarget.value});

    const addColumn: MouseEventHandler<HTMLButtonElement> = () => {
        const column: Column = new Column(board.columnList.length, newColumnName);
        dispatch({type: BoardActionTypes.ADD_COLUMN, payload: [board.id, column]});
        dispatch({type: BoardActionTypes.SET_NEW_COLUMN_NAME, payload: ''});
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN, payload: false});
    };

    const button = <button onClick={switchIsAddingColumn}>Add column</button>;

    const input = <>
        <input type="text" onInput={handleInput} value={newColumnName}/>
        <div className="buttons-panel">
            <button className="buttons-panel__btn" onClick={addColumn} disabled={!newColumnName}>Add</button>
            <button className="buttons-panel__btn" onClick={switchIsAddingColumn}>Cancel</button>
        </div>
    </>;

    return (
        <div className="column-list-item column-list-item-add">
            {isAddingColumn ? input : button}
        </div>
    );
};

export default ColumnListItemAdd;