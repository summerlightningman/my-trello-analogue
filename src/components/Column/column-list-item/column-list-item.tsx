import React, {FC} from 'react';

import {ColumnListItemProps} from "../../../types/column";

import CardList from "../../Card/card-list/card-list";
import ColumnContext from "../column-context";
import {ColumnComponent, ColumnLabel} from "../column";


const ColumnListItem: FC<ColumnListItemProps> = ({column}) => {
    return (
        <ColumnComponent>
            <ColumnLabel>{column.name}</ColumnLabel>
            <ColumnContext.Provider value={column}>
                <CardList/>
            </ColumnContext.Provider>
        </ColumnComponent>
    );
};

export default ColumnListItem;