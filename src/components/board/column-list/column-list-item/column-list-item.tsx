import {FC} from 'react';

import {ColumnListItemProps} from "../../../../types/column";

import './column-list-item.css';
import CardList from "./card-list/card-list";

const ColumnListItem: FC<ColumnListItemProps> = ({name}) => {
    return (
        <div className="column-list-item">
            <span className="column-list-item__name">{name}</span>
            <CardList/>
        </div>
    );
};

export default ColumnListItem;