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
        <div className="board-list">
            <BoardListItemAdd/>
            {
                boardList.map(
                    ({id, name}: Board) =>
                        <div className="board-list-item__wrapper">
                            <Link to={'/board/' + id} key={id} className="nolink">
                                <BoardListItem name={name}/>
                            </Link>
                        </div>
                )
            }
        </div>
    );
};

export default BoardList;