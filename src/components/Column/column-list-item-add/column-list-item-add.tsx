import {FC, FormEventHandler, MouseEventHandler} from 'react';

import {AiOutlinePlus} from "react-icons/all";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {MainActionTypes} from "../../../store/types/board";
import {Column, ColumnListItemAddProps, ColumnName} from "../../../types/column";
import {ButtonAdd, ButtonCancel, ButtonsPanel, ButtonSwitch} from "../../buttons";
import {AddInput} from "../../add-input";
import {ColumnComponent} from "../column";
import AddForm from "../../add-form";
import {useHistory} from "react-router-dom";
import {Board} from "../../../types/board";


const ColumnListItemAdd: FC<ColumnListItemAddProps> = () => {
    const {columnList, boardList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();
    const boardId = +useHistory().location.pathname.split('/')[2];
    const board = boardList.find((item: Board) => item.id === boardId);
    if (!board)
        return <></>

    const switchIsAddingColumn = (isAddingColumn: boolean) =>
        dispatch({type: MainActionTypes.SWITCH_IS_ADDING_COLUMN, payload: [board.id, isAddingColumn]});

    const toggleAddingMode: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        switchIsAddingColumn(!board.isAddingColumn);
    const setNewColumnName = (newColumnName: ColumnName) =>
        dispatch({type: MainActionTypes.SET_NEW_COLUMN_NAME, payload: [board.id, newColumnName]});

    const handleColumnNameInput: FormEventHandler<HTMLInputElement> = e =>
        setNewColumnName(e.currentTarget.value);

    const addColumn = () => {
        const column: Column = new Column(board.id, columnList.length, board.newColumnName);
        dispatch({type: MainActionTypes.ADD_COLUMN, payload: column});
        switchIsAddingColumn(false);
        setNewColumnName('')
    };

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addColumn();

    const button = <ButtonSwitch onClick={toggleAddingMode}>
        <AiOutlinePlus color="#0098dd" size="80px"/>
    </ButtonSwitch>;

    const input = <AddForm onClick={toggleAddingMode}>
        <AddInput onInput={handleColumnNameInput} onEnterPress={addColumn} value={board.newColumnName}/>
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!board.newColumnName}>Add</ButtonAdd>
            <ButtonCancel onClick={toggleAddingMode}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    return (
        <ColumnComponent color="#00FF7F" height="130px">
            {board.isAddingColumn ? input : button}
        </ColumnComponent>
    );
};

export default ColumnListItemAdd;