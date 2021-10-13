import {FC} from 'react';

import {ColumnListItemProps} from "../../../../types/column";

import './column-list-item.css';
import CardList from "./card-list/card-list";

const ColumnListItem: FC<ColumnListItemProps> = ({column}) => {
    return (
        <div className="column-list-item">
            <span className="column-list-item__name">{column.name}</span>
            <CardList cardList={column.cardList}/>
        </div>
    );
};

export default ColumnListItem;