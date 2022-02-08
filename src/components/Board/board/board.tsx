import React, {FC, MouseEventHandler, useEffect} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import ColumnList from "../../Column/column-list/column-list";
import {Board as BoardClass} from "../../../types/board";
import {BoardActionTypes} from "../../../store/types/board";
import {ButtonBack} from "../../buttons";

const Board: FC = () => {
    const history = useHistory();
    const back: MouseEventHandler = () => history.push('/');

    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const [, , boardId] = history.location.pathname.split('/');

    const boardInfo = boardList.find((board: BoardClass) => board.id === +boardId)
        || new BoardClass(-1, '404: Board not found!');

    useEffect(() => {
        dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: boardInfo.name});
    }, [boardInfo.name, dispatch]);

    if (!boardInfo)
        return <ButtonBack onClick={back}>Back</ButtonBack>

    return (
        <>
            <ButtonBack onClick={back}>Back</ButtonBack>
            <DndProvider backend={HTML5Backend}>
                <ColumnList board={boardInfo}/>
            </DndProvider>
        </>
    );
};

export default Board;