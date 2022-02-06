import {FC, useContext} from 'react';
import {useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import styled from "styled-components";

import {BoardActionTypes} from "../../../store/types/board";
import ColumnContext from "../../Column/column-context";
import draggableTypes from "../../../types/draggable-types";
import {Card, CardDropSlotProps} from "../../../types/card";

interface CardDropSlotComponentProps {
    isOver: boolean;
}

const CardDropSlotComponent = styled.div<CardDropSlotComponentProps>`
  width: 100%;
  height: calc(30%);
  border-radius: 10px;
  
  ${props => props.isOver && `
    box-shadow: 3px 5px 3px #0005;
  `}
`;

const CardDropSlot: FC<CardDropSlotProps> = ({belowCardId}) => {
    const dispatch = useDispatch();

    const column = useContext(ColumnContext);
    const handleCardDrop = (card: Card) =>
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [column.id, card, belowCardId]});

    const [{isOver}, cardDropRef] = useDrop(() => ({
        accept: draggableTypes.CARD,
        drop: handleCardDrop,
        collect: monitor => ({isOver: monitor.isOver()})
    }));

    return (
        <CardDropSlotComponent ref={cardDropRef} isOver={isOver}>

        </CardDropSlotComponent>
    );
};

export default CardDropSlot;