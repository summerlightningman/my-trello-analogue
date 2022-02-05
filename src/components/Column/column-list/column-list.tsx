import React, {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import styled from "styled-components";

import ColumnListItemAdd from "../column-list-item-add/column-list-item-add";
import ColumnListItem from "../column-list-item/column-list-item";
import {ColumnListProps} from "../../../types/column";


const ColumnListComponent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;

const ColumnList: FC<ColumnListProps> = ({board}) => {
    const columnList = useTypedSelector(state => state.board.columnList)
        .filter(col => col.boardId === board.id);

    return (
        <ColumnListComponent>
            <ColumnListItemAdd board={board}/>
            {columnList.map(column => <ColumnListItem column={column} key={column.id}/>)}
        </ColumnListComponent>
    );
};

export default ColumnList;