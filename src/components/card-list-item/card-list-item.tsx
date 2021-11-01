import {DragEventHandler, FC, useContext, useState} from 'react';

import {Card, CardListItemProps} from "../../types/card";
import {useDispatch} from "react-redux";
import {BoardContext} from "../board/board";

import './card-list-item.css';
import {BoardActionTypes} from "../../store/types/board";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CardListItem: FC<CardListItemProps> = ({card}) => {
    const dispatch = useDispatch();

    const board = useContext(BoardContext);

    const [isDragOver, setIsDragOver] = useState(false);
    const height = isDragOver ? '120px' : '70px';
    const expandCardMessage = 'Release to move card here';
    const [expandCard, collapseCard] = [() => setIsDragOver(true), () => setIsDragOver(false)];
    const {cardList} = useTypedSelector(state => state.board);

    const handleDragStart = (card: Card): DragEventHandler<HTMLLIElement> => e => {
        collapseCard();
        dispatch({type: BoardActionTypes.SET_DRAGGED_CARD, payload: [board, card]});
        console.log(cardList);
    };

    const handleDrop = (card: Card): DragEventHandler<HTMLLIElement> => e => {
        console.log(e.type);
        e.preventDefault();
        collapseCard();
        dispatch({type: BoardActionTypes.SET_DRAGGED_CARD, payload: [board, null]});
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [card.columnId, board.draggedCard]});
    }

    const handleDragEnd: DragEventHandler<HTMLLIElement> = e => {
        console.log(e.type);

        collapseCard()
    }

    const handleDragEnter: DragEventHandler<HTMLLIElement> = e => {
        console.log(e.type);
        e.preventDefault();
        expandCard()
    };

    const handleDragOver: DragEventHandler<HTMLLIElement> = e => {
        console.log(e.type);
        e.preventDefault();
    }

    const handleDragLeave: DragEventHandler<HTMLDivElement> = e => {
        console.log(e.type);
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
            {isDragOver && <div className="card-list-item__expand">
                <span className="card-list-item__expand-text">{expandCardMessage}</span>
            </div>}
        </li>
    );
};

export default CardListItem;