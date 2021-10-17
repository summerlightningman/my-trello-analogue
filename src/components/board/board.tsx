import {FC, MouseEventHandler, useEffect} from 'react';
import ColumnList from "../column-list/column-list";

import {useHistory} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Board as BoardClass} from "../../types/board";

import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../store/types/board";

import './board.css';

const Board: FC = () => {
    const history = useHistory();
    const back: MouseEventHandler = () => history.push('/');

    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const [, , boardId] = history.location.pathname.split('/');
    const [board] = boardList.filter((board: BoardClass) => board.id === +boardId);

    useEffect(() => {
        if (board)
            dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: `Board: ${board.name}`});
        else
            dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: '404: Board not found!'});
        },
        [board, dispatch]);


    return (
        <div className="board">
            <div>
                <button className="buttons-panel__btn" onClick={back}>Back</button>
            </div>
            {board && <ColumnList board={board}/>}
        </div>
    );
};

export default Board;