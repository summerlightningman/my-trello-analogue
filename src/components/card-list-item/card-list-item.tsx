import {DragEventHandler, FC, useContext, useState} from 'react';

import {Card, CardListItemProps} from "../../types/card";
import {useDispatch} from "react-redux";
import {BoardContext} from "../board/board";

import './card-list-item.css';
import {BoardActionTypes} from "../../store/types/board";

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const dispatch = useDispatch();

    const board = useContext(BoardContext);

    const [isExpanded, setIsExpanded] = useState(false);
    const height = isExpanded ? '120px' : '70px';
    const expandCardMessage = 'Release to move card here';
    const [expandCard, collapseCard] = [() => setIsExpanded(true), () => setIsExpanded(false)];

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
        collapseCard()
    }

    const handleDragEnter: DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        expandCard()
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
            style={{height}}
        >
            <div
                className="card-list-item__content"
                onDragLeave={handleDragLeave}
            >
                {card.name}
            </div>
            {isExpanded && <div className="card-list-item__expand">
                <span className="card-list-item__expand-text">{expandCardMessage}</span>
            </div>}
        </li>
    );
};

export default CardListItem;