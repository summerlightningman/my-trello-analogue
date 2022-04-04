import {FC, useContext} from 'react';
import {useDrop} from "react-dnd";

import {MainActionTypes} from "../../../store/types/main-reducer";
import ColumnContext from "../../Column/column-context";
import draggableTypes from "../../../types/draggable-types";
import {Card, CardDropSlotProps} from "../../../types/card";

import {useAppDispatch} from "../../../hooks/redux";
import CardDndSlotContainer from "../../styled/card-dnd-slot-container";
import CardDndLabel from "../../styled/card-dnd-label";


const CardDndSlot: FC<CardDropSlotProps> = ({aboveCardId}) => {
    const dispatch = useAppDispatch();

    const column = useContext(ColumnContext);
    const handleCardDrop = (card: Card) =>
        dispatch({type: MainActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [column.id, card, aboveCardId]});

    const [{isOver}, cardDropRef] = useDrop(() => ({
        accept: draggableTypes.CARD,
        drop: handleCardDrop,
        collect: monitor => ({isOver: monitor.isOver()})
    }));

    return (
        <CardDndSlotContainer ref={cardDropRef} isOver={isOver}>
            {isOver && <CardDndLabel>Release mouse button to put this card here</CardDndLabel>}
        </CardDndSlotContainer>
    );
};

export default CardDndSlot;