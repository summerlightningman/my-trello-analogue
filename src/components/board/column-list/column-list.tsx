import {FC} from 'react';

import './column-list.css';
import {ColumnListProps} from "../../../types/column";

const ColumnList: FC<ColumnListProps> = (items) => {
    return (
        <div className="column-list">
            ColumnList works!
        </div>
    );
};

export default ColumnList;