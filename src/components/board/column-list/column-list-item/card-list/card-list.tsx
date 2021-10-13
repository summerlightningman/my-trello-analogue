import {FC} from 'react';

import {CardListProps} from "../../../../../types/card";

import './card-list.css';
import CardListItem from "../card-list-item/card-list-item";

const CardList: FC<CardListProps> = ({cardList}) => {
    return (
        <ul className="card-list">
            {cardList.map(card => <CardListItem card={card} key={card.id}/>)}
        </ul>
    );
};

export default CardList;