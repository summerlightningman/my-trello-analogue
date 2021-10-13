import {FC, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import BoardListItem from "./board-list-item/board-list-item";
import BoardListItemAdd from "./board-list-item-add/board-list-item-add";

import {Board} from "../../types/board";
import {BoardActionTypes} from "../../store/types/board";

import './board-list.css';

const BoardList: FC = () => {
    const {boardList} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch({type: BoardActionTypes.SET_WINDOW_TITLE, payload: 'My Trello Analogue'})
        },
        [dispatch]);

    return (
        <ul className="board-list">
            <BoardListItemAdd key={-1}/>
            {
                boardList.map(
                    ({id, name}: Board) =>
                        <li className="board-list-item__wrapper" key={id}>
                            <Link to={'/board/' + id} className="nolink">
                                <BoardListItem name={name}/>
                            </Link>
                        </li>
                )
            }
        </ul>
    );
};

export default BoardList;