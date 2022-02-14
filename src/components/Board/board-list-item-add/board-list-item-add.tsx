import {FC, FormEventHandler, MouseEventHandler} from 'react';

import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {MainActionTypes} from "../../../store/types/board";
import {Board} from "../../../types/board";
import {BoardCard, BoardCardLabel, BoardCardProps} from "../board-card";
import {ButtonAdd, ButtonSwitch, ButtonCancel, ButtonsPanel} from "../../buttons";
import {AddInput} from "../../add-input";
import AddForm from "../../add-form";

const BoardItemAddLabel = styled(BoardCardLabel)`
  color: #1E90FF;
`;


const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    const switchIsAddingBoard: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        dispatch({type: MainActionTypes.SWITCH_IS_ADDING_BOARD, payload: !isAddingBoard});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: MainActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addBoard();

    const addBoard = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: MainActionTypes.ADD_BOARD, payload: board});
        dispatch({type: MainActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: MainActionTypes.SWITCH_IS_ADDING_BOARD, payload: false});
    };

    const input = <AddForm color="#00FF7F" onClick={switchIsAddingBoard}>
        <AddInput value={newBoardName} onInput={handleInput} onEnterPress={addBoard}/>
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!newBoardName}>Add</ButtonAdd>
            <ButtonCancel onClick={switchIsAddingBoard}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    const button = <ButtonSwitch onClick={switchIsAddingBoard}>
        <BoardItemAddLabel>Add board</BoardItemAddLabel>
    </ButtonSwitch>;

    const boardColors: BoardCardProps = {
        background: '#00FF7F',
        hoverBackground: '#3CB371'
    };

    return (
        <BoardCard {...boardColors}>
            {isAddingBoard ? input : button}
        </BoardCard>
    );
};

export default BoardListItemAdd;