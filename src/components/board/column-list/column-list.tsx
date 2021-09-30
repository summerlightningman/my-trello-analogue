import {FC} from 'react';

import {ColumnListProps} from "../../../types/column";
import ColumnListItemAdd from "./column-list-item-add/column-list-item-add";

import './column-list.css';

const ColumnList: FC<ColumnListProps> = ({items}) => {
    return (
        <div className="column-list">
            <ColumnListItemAdd/>
            {items.map(column => column.name)}
        </div>
    );
};

export default ColumnList;