import {FC, useContext} from 'react';
import styled from "styled-components";

import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CardListItem from "../card-list-item/card-list-item";
import CardListItemAdd from "../card-list-item-add/card-list-item-add";
import ColumnContext from "../../Column/column-context";

const CardListComponent = styled.ul`
  width: 90%;
  padding-bottom: 15px;
`;


const CardList: FC = () => {
    const column = useContext(ColumnContext);

    const cardList = useTypedSelector(state => state.board.cardList)
        .filter(card => card.columnId === column.id);

    return (
        <CardListComponent>
            <CardListItemAdd key={-1} cardCount={cardList.length}/>
            {cardList.map(card => <CardListItem card={card} key={card.id}/>)}
        </CardListComponent>
    );
};

export default CardList;