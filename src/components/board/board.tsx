import {FC, MouseEventHandler, useEffect} from 'react';
import ColumnList from "./column-list/column-list";

import {useHistory} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Board as BoardClass} from "../../types/board";

import './board.css';
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../store/types/board";

const Board: FC = () => {
    const history = useHistory();

    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const [, , boardId] = history.location.pathname.split('/');
    const [board] = boardList.filter((board: BoardClass) => board.id === +boardId);

    useEffect(() => {
            dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: `Board: ${board.name}`})
        },
        [board.name, dispatch]);

    const back: MouseEventHandler = () => {
        history.goBack();
    }

    return (
        <div className="board">
            <div>
                <button className="buttons-panel__btn" onClick={back}>Back</button>
            </div>
            <ColumnList items={board.columnList}/>
        </div>
    );
};

export default Board;