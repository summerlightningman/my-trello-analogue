import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import BoardListItem from "../board-list-item/board-list-item";
import BoardListItemAdd from "../board-list-item-add/board-list-item-add";
import {GuiActionTypes} from "../../../store/types/gui-reducer";
import BoardListContainer from "../../styled/board-list-container";


const BoardList: FC = () => {
    const {boardList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch({type: GuiActionTypes.SET_WINDOW_TITLE, payload: 'My Trello Analogue'})
        },
        []);

    return (
        <BoardListContainer>
            <BoardListItemAdd key={-1}/>
            {
                boardList.map(
                    board => <BoardListItem {...board} key={board.id}/>
                )
            }
        </BoardListContainer>
    );
};

export default BoardList;