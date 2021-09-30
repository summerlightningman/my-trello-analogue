import {FC} from 'react';

import {Column, ColumnListProps} from "../../../types/column";
import ColumnListItemAdd from "./column-list-item-add/column-list-item-add";

import './column-list.css';
import ColumnListItem from "./column-list-item/column-list-item";

const ColumnList: FC<ColumnListProps> = ({items}) => {
    return (
        <div className="column-list">
            <ColumnListItemAdd/>
            {
                items.map(
                    ({id, name}: Column) => <ColumnListItem name={name} key={id}/>
                )
            }
        </div>
    );
};

export default ColumnList;