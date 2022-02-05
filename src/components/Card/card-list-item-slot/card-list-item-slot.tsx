import {FC, useContext} from 'react';
import {useDrop} from "react-dnd";
import {useDispatch} from "react-redux";

import {BoardActionTypes} from "../../../store/types/board";
import ColumnContext from "../../Column/column-context";
import draggableTypes from "../../../types/draggable-types";
import {Card, CardListItemSlotProps} from "../../../types/card";

const CardListItemSlot: FC<CardListItemSlotProps> = ({belowCardId}) => {
    const dispatch = useDispatch();

    const column = useContext(ColumnContext);
    const handleCardDrop = (card: Card) =>
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [column.id, card, belowCardId]});

    const [{isOver}, cardDropRef] = useDrop(() => ({
        accept: draggableTypes.CARD,
        drop: handleCardDrop,
        collect: monitor => ({isOver: monitor.isOver()})
    }));


    const dragOverStyle = {
        background: 'black',
        border: '1px solid black'
    };

    const elementStyle = {width: '100%', height: '10px'};

    return (
        <div ref={cardDropRef} style={isOver ? {...dragOverStyle, ...elementStyle} : elementStyle}>

        </div>
    );
};

export default CardListItemSlot;