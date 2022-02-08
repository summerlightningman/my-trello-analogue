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

const CardDndSlotComponent = styled.div<CardDropSlotComponentProps>`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  margin: -5px 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props => props.isOver && `
    height: 70px;
    border: 2px dashed white;
    margin: 20px 0;
  `}
`;

const CardDndLabel = styled.span`
  text-align: center;
  color: white;
`;

const CardDndSlot: FC<CardDropSlotProps> = ({belowCardId}) => {
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
        <CardDndSlotComponent ref={cardDropRef} isOver={isOver}>
            {isOver && <CardDndLabel>Release mouse button to put this card here</CardDndLabel>}
        </CardDndSlotComponent>
    );
};

export default CardDndSlot;