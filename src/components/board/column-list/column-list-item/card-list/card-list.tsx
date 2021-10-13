import {FC} from 'react';

import {CardListProps} from "../../../../../types/card";

import './card-list.css';

const CardList: FC<CardListProps> = ({cardList}) => {
    return (
        <ul>
            {cardList.map(card => <li>{card}</li>)}
        </ul>
    );
};

export default CardList;