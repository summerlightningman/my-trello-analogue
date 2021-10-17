import {FC} from 'react';

import {ColumnListItemProps} from "../../types/column";

import './column-list-item.css';
import CardList from "../card-list/card-list";

const ColumnListItem: FC<ColumnListItemProps> = ({board,column}) => {
    return (
        <li className="column-list-item">
            <span className="column-list-item__name">{column.name}</span>
            <CardList column={column} board={board}/>
        </li>
    );
};

export default ColumnListItem;