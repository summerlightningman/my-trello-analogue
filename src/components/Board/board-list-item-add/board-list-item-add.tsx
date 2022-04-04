import {FC, FormEventHandler, MouseEventHandler} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {MainActionTypes} from "../../../store/types/main-reducer";
import {Board, BoardName} from "../../../types/board";
import { BoardCardProps} from "../../../types/board-card";
import {ButtonAdd, ButtonCancel, ButtonsPanel, ButtonSwitch} from "../../buttons";
import {AddInput} from "../../add-input";
import AddForm from "../../add-form";

import BoardItemAddLabel from "../../styled/board-item-add-label";
import BoardCard from "../../styled/board-card";


const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();
    const boardColors: BoardCardProps = {
        background: '#00FF7F',
        hoverBackground: '#3CB371'
    };

    const setIsAddingBoard = (isAddingBoard: boolean) =>
        dispatch({type: MainActionTypes.SWITCH_IS_ADDING_BOARD, payload: isAddingBoard})
    const setNewBoardName = (newBoardName: BoardName) =>
        dispatch({type: MainActionTypes.SET_NEW_BOARD_NAME, payload: newBoardName});

    const toggleAddingMode: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        setIsAddingBoard(!isAddingBoard);

    const handleBoardNameInput: FormEventHandler<HTMLInputElement> = e =>
        setNewBoardName(e.currentTarget.value)

    const addBoard = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: MainActionTypes.ADD_BOARD, payload: board});
        setIsAddingBoard(false);
        setNewBoardName('');
    };

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addBoard();

    const input = <AddForm color="#00FF7F" onClick={toggleAddingMode}>
        <AddInput value={newBoardName} onInput={handleBoardNameInput} onEnterPress={addBoard}/>
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!newBoardName}>Add</ButtonAdd>
            <ButtonCancel onClick={toggleAddingMode}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    const button = <ButtonSwitch onClick={toggleAddingMode}>
        <BoardItemAddLabel>Add board</BoardItemAddLabel>
    </ButtonSwitch>;

    return (
        <BoardCard {...boardColors}>
            {isAddingBoard ? input : button}
        </BoardCard>
    );
};

export default BoardListItemAdd;