import {FC} from 'react';

import {ColumnListItemProps} from "../../../../types/column";

import './column-list-item.css';

const ColumnListItem: FC<ColumnListItemProps> = ({name}) => {
    return (
        <div className="column-list-item">
            <span className="column-list-item__name">{name}</span>
        </div>
    );
};

export default ColumnListItem;