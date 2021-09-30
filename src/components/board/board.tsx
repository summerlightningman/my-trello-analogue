import {FC, MouseEventHandler} from 'react';
import ColumnList from "./column-list/column-list";

import {useHistory} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Board as BoardClass} from "../../types/board";

import './board.css';

const Board: FC = () => {
    const history = useHistory();

    const {boardList} = useTypedSelector(state => state.board);
    const [, , boardId] = history.location.pathname.split('/');
    const [board] = boardList.filter((board: BoardClass) => board.id === +boardId);


    const back: MouseEventHandler = () => {
        history.goBack();
    }

    return (
        <div className="board">
            <div>
                <h2>Board: {board.name}</h2>
                <button className="buttons-panel__btn" onClick={back}>Назад</button>
            </div>
            <ColumnList/>
        </div>
    );
};

export default Board;