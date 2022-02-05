import {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import styled from "styled-components";

import BoardListItem from "../board-list-item/board-list-item";
import BoardListItemAdd from "../board-list-item-add/board-list-item-add";
import {BoardActionTypes} from "../../../store/types/board";


const BoardListComponent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  padding: 0;
`;



const BoardList: FC = () => {
    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: 'My Trello Analogue'})
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