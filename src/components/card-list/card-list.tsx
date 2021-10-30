import {FC} from 'react';

import {CardListProps} from "../../types/card";

import CardListItem from "../card-list-item/card-list-item";
import CardListItemAdd from "../card-list-item-add/card-list-item-add";

import './card-list.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CardList: FC<CardListProps> = ({column}) => {
    const cardList = useTypedSelector(state => state.board.cardList)
        .filter(card => card.columnId === column.id);

    return (
        <ul className="card-list">
            <CardListItemAdd key={-1} column={column}/>
            {cardList.map(card => <CardListItem card={card} key={card.id}/>)}
        </ul>
    );
};

export default CardList;