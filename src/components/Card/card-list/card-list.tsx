import {FC, useContext} from 'react';
import {useAppSelector} from "../../../hooks/redux";

import CardListItem from "../card-list-item/card-list-item";
import CardListItemAdd from "../card-list-item-add/card-list-item-add";
import ColumnContext from "../../Column/column-context";
import CardDndSlot from "../card-dnd-slot/card-dnd-slot";
import CardListContainer from "../../styled/card-list-container";


const CardList: FC = () => {
    const column = useContext(ColumnContext);

    const cardList = useAppSelector(state => state.main.cardList)
        .filter(card => card.columnId === column.id);

    return (
        <CardListContainer>
            <CardListItemAdd key={-2} cardCount={cardList.length}/>
            <CardDndSlot key={-1} aboveCardId={-1}/>
            {cardList.map(card => <CardListItem card={card} key={`${card.columnId}/${card.id}/${card.name}`}/>)}
        </CardListContainer>
    );
};

export default CardList;