import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import styled from "styled-components";

import ColumnListItemAdd from "../column-list-item-add/column-list-item-add";
import ColumnListItem from "../column-list-item/column-list-item";
import {Column, ColumnListProps} from "../../../types/column";


const ColumnListComponent = styled.ul`
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  overflow-x: auto;
  height: 80vh;
`;

const ColumnList: FC<ColumnListProps> = ({board}) => {
    const columnList = useAppSelector(state => state.board.columnList)
        .filter(col => col.boardId === board.id);
    const sortFunc = (left: Column, right: Column) => left.id < right.id ? -1 : left.id > right.id ? 1 : 0;

    return (
        <ColumnListComponent>
            <ColumnListItemAdd board={board}/>
            {columnList.sort(sortFunc).map(column => <ColumnListItem column={column} key={column.id}/>)}
        </ColumnListComponent>
    );
};

export default ColumnList;