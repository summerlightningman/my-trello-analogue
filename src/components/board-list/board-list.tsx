import {FC, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Board} from "../../types/board";
import BoardListItem from "./board-list-item/board-list-item";

import './board-list.css';
import BoardListItemAdd from "./board-list-item-add/board-list-item-add";

const BoardList: FC = () => {
    const {boardList} = useTypedSelector(state => state.board);

    return (
        <div className="board-list">
            <BoardListItemAdd/>
            {boardList.map(({name}: Board) => <BoardListItem name={name}/>)}
        </div>
    );
};

export default BoardList;