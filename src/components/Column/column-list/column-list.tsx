import React, {FC, useContext} from 'react';
import ColumnListItemAdd from "../column-list-item-add/column-list-item-add";
import ColumnListItem from "../column-list-item/column-list-item";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {BoardContext} from "../../Board/board/board";

import './column-list.css';

const ColumnList: FC = () => {
    const board = useContext(BoardContext);

    const columnList = useTypedSelector(state => state.board.columnList)
        .filter(col => col.boardId === board.id);

    return (
        <ul className="column-list">
            <ColumnListItemAdd/>
            {columnList.map(column => <ColumnListItem column={column} key={column.id}/>)}
        </ul>
    );
};

export default ColumnList;