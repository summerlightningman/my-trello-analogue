import React, {FC} from 'react';

import {ColumnListItemProps} from "../../../types/column";

import CardList from "../../Card/card-list/card-list";
import ColumnContext from "../column-context";
import styled from "styled-components";

const Column = styled.li`
  width: 280px;
  border: 1px solid #0003;
  border-radius: 10px;
  margin-right: 10px;
  background: #0aa40020;
`;

const ColumnListItem: FC<ColumnListItemProps> = ({column}) => {
    return (
        <Column>
            <span className="column-list-item__name">{column.name}</span>
            <ColumnContext.Provider value={column}>
                <CardList/>
            </ColumnContext.Provider>
        </Column>
    );
};

export default ColumnListItem;