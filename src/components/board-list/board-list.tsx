import {FC, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Board} from "../../types/board";
import BoardListItem from "./board-list-item/board-list-item";

import './board-list.css';

const BoardList: FC = () => {
    const {boardList} = useTypedSelector(state => state.board);

    const addBoard: MouseEventHandler = () => {

    };

    return (
        <div className="board-list">
            <button onClick={addBoard}>Добавить доску</button>
            {boardList.map(({name}: Board) => <BoardListItem name={name}/>)}
        </div>
    );
};

export default BoardList;