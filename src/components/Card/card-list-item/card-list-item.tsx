import {FC} from 'react';
import {useDrag} from "react-dnd";

import {CardListItemProps} from "../../../types/card";
import draggableTypes from "../../../types/draggable-types";
import {CardComponent, CardLabel} from "../card";
import CardDropSlot from "../card-list-item-slot/card-drop-slot";

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const [{isDragging}, cardDragRef] = useDrag(() => ({
        type: draggableTypes.CARD,
        item: card,
        collect: monitor => ({isDragging: monitor.isDragging()})
    }));

    return (
        <CardComponent
            ref={cardDragRef}
            isDragging={isDragging}
        >
            <CardLabel>{card.name}</CardLabel>
            <CardDropSlot belowCardId={card.id}/>
        </CardComponent>
    );
};

export default CardListItem;