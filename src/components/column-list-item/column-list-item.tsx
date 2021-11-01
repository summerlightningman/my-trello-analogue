import React, {FC} from 'react';

import {Column, ColumnListItemProps} from "../../types/column";

import './column-list-item.css';
import CardList from "../card-list/card-list";

export const ColumnContext = React.createContext<Column>(new Column(-1, -1, ''));

const ColumnListItem: FC<ColumnListItemProps> = ({column}) => {
    return (
        <li className="column-list-item">
            <span className="column-list-item__name">{column.name}</span>
            <ColumnContext.Provider value={column}>
                <CardList/>
            </ColumnContext.Provider>
        </li>
    );
};

export default ColumnListItem;