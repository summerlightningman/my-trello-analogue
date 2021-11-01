import {DragEventHandler, FC, useContext} from 'react';

import {Card, CardListItemProps} from "../../types/card";
import {useDispatch} from "react-redux";
import {BoardContext} from "../board/board";

import './card-list-item.css';
import {BoardActionTypes} from "../../store/types/board";
import {useCardMove} from "../../hooks/useCardMove";

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const dispatch = useDispatch();

    const board = useContext(BoardContext);

    const {expandCard, collapseCard, getDragMessage, dragStyle} = useCardMove();

    const handleDragStart = (card: Card): DragEventHandler<HTMLLIElement> => () => {
        collapseCard();
        dispatch({type: BoardActionTypes.SET_DRAGGED_CARD, payload: [board, card]});
    };

    const handleDrop = (card: Card): DragEventHandler<HTMLLIElement> => e => {
        e.preventDefault();
        collapseCard();
        dispatch({type: BoardActionTypes.SET_DRAGGED_CARD, payload: [board, null]});
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [card.columnId, board.draggedCard]});
    }

    const handleDragEnd: DragEventHandler<HTMLLIElement> = () => {
        collapseCard();
    }

    const handleDragEnter: DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        expandCard();
    };

    const handleDragOver: DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
    }

    const handleDragLeave: DragEventHandler<HTMLDivElement> = () => {
        collapseCard();
    };

    return (
        <li
            className="card-list-item"
            draggable={true}
            onDragStart={handleDragStart(card)} // Взять карточку
            onDrop={handleDrop(card)}
            onDragEnd={handleDragEnd} // Отпустить карточку
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            // Выход карточки из поля
            style={dragStyle}
        >
            <div
                className="card-list-item__content"
                onDragLeave={handleDragLeave}
            >
                {card.name}
            </div>
            {getDragMessage()}
        </li>
    );
};

export default CardListItem;