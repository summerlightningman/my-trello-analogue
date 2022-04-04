import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks/redux";

import ColumnListItemAdd from "../column-list-item-add/column-list-item-add";
import ColumnListItem from "../column-list-item/column-list-item";
import {Column, ColumnListProps} from "../../../types/column";
import ColumnListContainer from "../../styled/column-list-container";


const ColumnList: FC<ColumnListProps> = ({board}) => {
    const columnList = useAppSelector(state => state.main.columnList)
        .filter(col => col.boardId === board.id);
    const sortFunc = (left: Column, right: Column) => left.id < right.id ? -1 : left.id > right.id ? 1 : 0;

    return (
        <ColumnListContainer>
            <ColumnListItemAdd board={board}/>
            {columnList.sort(sortFunc).map(column => <ColumnListItem column={column} key={column.id}/>)}
        </ColumnListContainer>
    );
};

export default ColumnList;