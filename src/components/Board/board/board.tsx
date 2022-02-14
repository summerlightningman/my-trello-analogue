import React, {FC, MouseEventHandler, useEffect} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useHistory} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import ColumnList from "../../Column/column-list/column-list";
import {Board as BoardClass} from "../../../types/board";
import {MainActionTypes} from "../../../store/types/board";
import {ButtonBack} from "../../buttons";

const Board: FC = () => {
    const history = useHistory();
    const back: MouseEventHandler = () => history.push('/');

    const {boardList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    const [, , boardId] = history.location.pathname.split('/');

    const boardInfo = boardList.find((board: BoardClass) => board.id === +boardId)
        || new BoardClass(-1, '404: Board not found!');

    useEffect(() => {
        dispatch({type: MainActionTypes.SET_WINDOW_TITLE, payload: boardInfo.name});
    }, [boardInfo.name, dispatch]);

    if (!boardInfo)
        return <ButtonBack onClick={back}>Back</ButtonBack>

    return (
        <>
            <ButtonBack onClick={back} data-testid="button-back">Back</ButtonBack>
            <DndProvider backend={HTML5Backend}>
                <ColumnList board={boardInfo}/>
            </DndProvider>
        </>
    );
};

export default Board;