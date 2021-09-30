import {FC} from 'react';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import BoardListItem from "./board-list-item/board-list-item";
import {Board} from "../../types/board";
import BoardListItemAdd from "./board-list-item-add/board-list-item-add";

import {Link} from "react-router-dom";

import './board-list.css';


const BoardList: FC = () => {
    const {boardList} = useTypedSelector(state => state.board);

    return (
        <div className="board-list">
            <BoardListItemAdd/>
            {boardList.map(({id, name}: Board) => <Link to={'/board/' + id} className="nolink"><BoardListItem name={name}/></Link>)}
        </div>
    );
};

export default BoardList;