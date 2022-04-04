import React, {FC} from 'react';

import {ColumnListItemProps} from "../../../types/column";

import CardList from "../../Card/card-list/card-list";
import ColumnContext from "../column-context";
import ColumnLabel from "../../styled/column-label";
import ColumnContainer from "../../styled/column-container";


const ColumnListItem: FC<ColumnListItemProps> = ({column}) => {
    return (
        <ColumnContainer>
            <ColumnLabel>{column.name}</ColumnLabel>
            <ColumnContext.Provider value={column}>
                <CardList/>
            </ColumnContext.Provider>
        </ColumnContainer>
    );
};

export default ColumnListItem;