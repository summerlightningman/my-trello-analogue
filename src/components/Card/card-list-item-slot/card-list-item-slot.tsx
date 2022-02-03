import {FC, useContext} from 'react';
import {useDrop} from "react-dnd";

import draggableTypes from "../../../types/draggable-types";
import {CardListItemSlotProps} from "../../../types/card";
import {ColumnContext} from "../../Column/column-list-item/column-list-item";

const CardListItemSlot: FC<CardListItemSlotProps> = ({belowCardId}) => {
    const [{isOver}, cardDropRef] = useDrop(() => ({
        accept: draggableTypes.CARD,
        drop: (card) => console.log(card),
        collect: monitor => ({isOver: monitor.isOver()})
    }));
    const column = useContext(ColumnContext);

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