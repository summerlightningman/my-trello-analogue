import {FC, FormEventHandler, MouseEventHandler} from 'react';

import {useDispatch} from "react-redux";
import {AiOutlinePlus} from "react-icons/all";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {BoardActionTypes} from "../../../store/types/board";
import {Column, ColumnListItemAddProps} from "../../../types/column";
import {ButtonAdd, ButtonCancel, ButtonsPanel, ButtonSwitch} from "../../buttons";
import {AddInput} from "../../add-input";
import {ColumnComponent} from "../column";
import AddForm from "../../add-form";


const ColumnListItemAdd: FC<ColumnListItemAddProps> = ({board}) => {
    const {columnList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const {newColumnName, isAddingColumn} = board;

    const switchIsAddingColumn: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN, payload: [board, !isAddingColumn]});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_COLUMN_NAME, payload: [board, e.currentTarget.value]});

    const addColumn = () => {
        const column: Column = new Column(board.id, columnList.length, board.newColumnName);
        dispatch({type: BoardActionTypes.ADD_COLUMN, payload: column});
    };

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addColumn();

    const button = <ButtonSwitch onClick={switchIsAddingColumn}>
        <AiOutlinePlus color="#0098dd" size="80px"/>
    </ButtonSwitch>;

    const input = <AddForm onClick={switchIsAddingColumn}>
        <AddInput onInput={handleInput} onEnterPress={addColumn} value={newColumnName}/>
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!newColumnName}>Add</ButtonAdd>
            <ButtonCancel onClick={switchIsAddingColumn}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    return (
        <ColumnComponent color="#00FF7F" height="130px">
            {isAddingColumn ? input : button}
        </ColumnComponent>
    );
};

export default ColumnListItemAdd;