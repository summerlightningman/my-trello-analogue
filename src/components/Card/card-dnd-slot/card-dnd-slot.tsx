import {FC, useContext} from 'react';
import {useDrop} from "react-dnd";

import {BoardActionTypes} from "../../../store/types/board";
import ColumnContext from "../../Column/column-context";
import draggableTypes from "../../../types/draggable-types";
import {Card, CardDropSlotProps} from "../../../types/card";
import {CardDndLabel, CardDndSlotComponent} from "../card";
import {useAppDispatch} from "../../../hooks/redux";


const CardDndSlot: FC<CardDropSlotProps> = ({aboveCardId}) => {
    const dispatch = useAppDispatch();

    const column = useContext(ColumnContext);
    const handleCardDrop = (card: Card) =>
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [column.id, card, aboveCardId]});

    const [{isOver}, cardDropRef] = useDrop(() => ({
        accept: draggableTypes.CARD,
        drop: handleCardDrop,
        collect: monitor => ({isOver: monitor.isOver()})
    }));

    return (
        <CardDndSlotComponent ref={cardDropRef} isOver={isOver}>
            {isOver && <CardDndLabel>Release mouse button to put this card here</CardDndLabel>}
        </CardDndSlotComponent>
    );
};

export default CardDndSlot;