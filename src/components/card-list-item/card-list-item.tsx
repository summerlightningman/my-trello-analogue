import {FC} from 'react';

import './card-list-item.css';
import {CardListItemProps} from "../../types/card";

const CardListItem: FC<CardListItemProps> = ({card}) => {
    return (
        <li className="card-list-item">
            {card.name}
        </li>
    );
};

export default CardListItem;