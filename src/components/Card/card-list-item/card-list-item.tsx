import {FC} from 'react';
import {useDrag} from "react-dnd";

import {CardListItemProps} from "../../../types/card";

import draggableTypes from "../../../types/draggable-types";
import CardListItemSlot from "../card-list-item-slot/card-list-item-slot";

import './card-list-item.css';

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const [{isDragging}, cardDragRef] = useDrag(() => ({
        type: draggableTypes.CARD,
        item: card,
        collect: monitor => ({isDragging: monitor.isDragging()})
    }));

    return (
        <li
            className="card-list-item"
            ref={cardDragRef}
            style={{opacity: isDragging ? 0 : 1}}
        >
            <div
                className="card-list-item__content"
            >
                {card.name}
            </div>
            <CardListItemSlot belowCardId={card.id}/>
        </li>
    );
};

export default CardListItem;