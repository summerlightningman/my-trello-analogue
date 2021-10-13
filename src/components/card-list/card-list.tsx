import {FC} from 'react';

import {CardListProps} from "../../types/card";

import CardListItem from "../card-list-item/card-list-item";
import CardListItemAdd from "../card-list-item-add/card-list-item-add";

import './card-list.css';

const CardList: FC<CardListProps> = ({cardList}) => {
    return (
        <ul className="card-list">
            <CardListItemAdd key={-1}/>
            {cardList.map(card => <CardListItem card={card} key={card.id}/>)}
        </ul>
    );
};

export default CardList;