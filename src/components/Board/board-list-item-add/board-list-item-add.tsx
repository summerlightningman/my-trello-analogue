import {FC, FormEventHandler, MouseEventHandler} from 'react';

import styled from "styled-components";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import {BoardActionTypes} from "../../../store/types/board";
import {Board} from "../../../types/board";
import {BoardCard, BoardCardLabel, BoardCardProps} from "../board-card";
import {ButtonAdd, ButtonCancel, ButtonsPanel} from "../../buttons";
import {AddInput} from "../../add-input";


const BoardItemAddLabel = styled(BoardCardLabel)`
  color: #1E90FF;
`;

const BoardItemAddButton = styled.button`
  border: none;
  background: transparent;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover ${BoardItemAddLabel} {
    color: white;
  }
`;

const BoardItemAddForm = styled.form`
  width: 100%;
  height: 100%;

  background: #00FF7F;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const BoardListItemAdd: FC = () => {
    const {newBoardName, boardList, isAddingBoard} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingBoard: MouseEventHandler<HTMLButtonElement | HTMLFormElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: !isAddingBoard});

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: e.currentTarget.value});

    const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => addBoard();

    const addBoard = () => {
        const board: Board = new Board(boardList.length, newBoardName);
        dispatch({type: BoardActionTypes.ADD_BOARD, payload: board});
        dispatch({type: BoardActionTypes.SET_NEW_BOARD_NAME, payload: ''});
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_BOARD, payload: false});
    };

    const input = <BoardItemAddForm onClick={switchIsAddingBoard}>
        <AddInput value={newBoardName} onInput={handleInput} onEnterPress={addBoard}/>
        <ButtonsPanel>
            <ButtonAdd onClick={handleAddClick} disabled={!newBoardName}>Add</ButtonAdd>
            <ButtonCancel onClick={switchIsAddingBoard}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </BoardItemAddForm>;

    const button = <BoardItemAddButton onClick={switchIsAddingBoard}>
        <BoardItemAddLabel>Add card</BoardItemAddLabel>
    </BoardItemAddButton>;

    const boardColors: BoardCardProps = {
        background: '#00FF7F',
        hoverBackground: '#3CB371'
    }

    return (
        <BoardCard {...boardColors}>
            {isAddingBoard ? input : button}
        </BoardCard>
    );
};

export default BoardListItemAdd;