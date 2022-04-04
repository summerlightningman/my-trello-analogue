import {FC} from 'react';
import {useDrag} from "react-dnd";
import styled from "styled-components";

import {CardListItemProps} from "../../../types/card";
import draggableTypes from "../../../types/draggable-types";
import CardDndSlot from "../card-dnd-slot/card-dnd-slot";
import CardContainer from "../../styled/card-container";
import CardLabel from "../../styled/card-label";

interface CardItemContainerProps {
    isDragging: boolean
}

const CardItemContainer = styled.li<CardItemContainerProps>`
  display: ${props => props.isDragging ? 'none' : 'block'};
`;

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const [{isDragging}, cardDragRef] = useDrag(() => ({
        type: draggableTypes.CARD,
        item: card,
        collect: monitor => ({isDragging: monitor.isDragging()})
    }));

    return (
        <CardItemContainer isDragging={isDragging}>
            <CardContainer
                ref={cardDragRef}
                isDragging={isDragging}
            >
                <CardLabel>{card.name}</CardLabel>
            </CardContainer>
            <CardDndSlot aboveCardId={card.id}/>
        </CardItemContainer>
    );
};

export default CardListItem;