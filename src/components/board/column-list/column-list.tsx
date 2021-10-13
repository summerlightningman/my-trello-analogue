import {FC} from 'react';

import {ColumnListProps} from "../../../types/column";
import ColumnListItemAdd from "./column-list-item-add/column-list-item-add";
import ColumnListItem from "./column-list-item/column-list-item";

import './column-list.css';

const ColumnList: FC<ColumnListProps> = ({board}) => {

    return (
        <div className="column-list">
            <ColumnListItemAdd board={board}/>
            {board.columnList.map(column => <ColumnListItem column={column} key={column.id}/>)}
        </div>
    );
};

export default ColumnList;