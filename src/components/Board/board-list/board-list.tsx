import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import styled from "styled-components";

import BoardListItem from "../board-list-item/board-list-item";
import BoardListItemAdd from "../board-list-item-add/board-list-item-add";
import {MainActionTypes} from "../../../store/types/main-reducer";


const BoardListComponent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  padding: 0;
`;



const BoardList: FC = () => {
    const {boardList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch({type: MainActionTypes.SET_WINDOW_TITLE, payload: 'My Trello Analogue'})
        },
        [dispatch]);

    return (
        <BoardListComponent>
            <BoardListItemAdd key={-1}/>
            {
                boardList.map(
                    board => <BoardListItem {...board} key={board.id}/>
                )
            }
        </BoardListComponent>
    );
};

export default BoardList;