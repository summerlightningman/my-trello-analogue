import {FC} from 'react';

import {ColumnListItemProps} from "../../../../types/column";

import './column-list-item.css';

const ColumnListItem: FC<ColumnListItemProps> = ({name}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default ColumnListItem;