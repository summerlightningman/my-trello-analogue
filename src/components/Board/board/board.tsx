import React, {FC, MouseEventHandler, useMemo} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import ColumnList from "../../Column/column-list/column-list";

import {useTypedSelector} from "../../../hooks/useTypedSelector";


import {Board as BoardClass} from "../../../types/board";
import {BoardActionTypes} from "../../../store/types/board";

import './board.css';

export const BoardContext = React.createContext<BoardClass>(new BoardClass(-1, ''));

const Board: FC = () => {
    const history = useHistory();
    const back: MouseEventHandler = () => history.push('/');

    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const [, , boardId] = history.location.pathname.split('/');

    const board = useMemo(() => {
        const [brd] = boardList.filter((board: BoardClass) => board.id === +boardId);
        const windowTitle = brd ? `Board: ${brd.name}` : '404: Board not found!';
        dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: windowTitle});
        return brd
    }, [boardId, boardList, dispatch]);

    if (!board)
        return <div className="board">
            <button className="buttons-panel__btn" onClick={back}>Back</button>
        </div>

    return (
        <div className="board">
            <button className="buttons-panel__btn" onClick={back}>Back</button>
            <BoardContext.Provider value={board}>
                <ColumnList/>
            </BoardContext.Provider>
        </div>
    );
};

export default Board;