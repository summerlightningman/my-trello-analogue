import React, {FC} from 'react';
import ColumnListItemAdd from "../column-list-item-add/column-list-item-add";
import ColumnListItem from "../column-list-item/column-list-item";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ColumnListProps} from "../../../types/column";

const ColumnList: FC<ColumnListProps> = ({board}) => {

    const columnList = useTypedSelector(state => state.board.columnList)
        .filter(col => col.boardId === board.id);

    return (
        <ul className="column-list">
            <ColumnListItemAdd board={board}/>
            {columnList.map(column => <ColumnListItem column={column} key={column.id}/>)}
        </ul>
    );
};

export default ColumnList;