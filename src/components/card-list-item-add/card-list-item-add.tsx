import {DragEventHandler, FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler, useContext} from 'react';

import {useDispatch} from "react-redux";
import {Card, CardListItemAddProps, CardName} from "../../types/card";

import {BoardActionTypes} from "../../store/types/board";

import './card-list-item-add.css';
import {ColumnContext} from "../column-list-item/column-list-item";
import {useCardMove} from "../../hooks/useCardMove";
import {BoardContext} from "../board/board";

const CardListItemAdd: FC<CardListItemAddProps> = ({cardCount}) => {
    const column = useContext(ColumnContext);
    const board = useContext(BoardContext);

    const dispatch = useDispatch();
    const {expandCard, collapseCard, dragStyle, getDragMessage} = useCardMove();

    const switchIsAddingCard = (value: boolean) => dispatch({
        type: BoardActionTypes.SWITCH_IS_ADDING_CARD,
        payload: [column, value]
    });

    const setNewCardName = (value: CardName) => dispatch({
        type: BoardActionTypes.SET_NEW_CARD_NAME,
        payload: [column, value]
    });
    const addCard = () => {
        const card = new Card(column.id, cardCount, column.newCardName);
        dispatch({type: BoardActionTypes.ADD_CARD, payload: card});
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => switchIsAddingCard(!column.isAddingCard)

    const handleInput: FormEventHandler<HTMLInputElement> = e => setNewCardName(e.currentTarget.value);
    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => e.key === 'Enter' && addCard();

    const button = <button className="card-list-item-add__btn" onClick={handleClick}>Add card</button>;
    const input = <>
        <input
            className="card-list-item-add__input"
            type="text"
            value={column.newCardName}
            onInput={handleInput}
            onKeyPress={handleKeyPress}
        />
        <div className="card-list-item-add__btns buttons-panel">
            <button className="buttons-panel__btn" disabled={!column.newCardName} onClick={addCard}>Add</button>
            <button className="buttons-panel__btn" onClick={handleClick}>Cancel</button>
        </div>
    </>;

    const handleDragEnd: DragEventHandler<HTMLLIElement> = () => collapseCard();

    const handleDragEnter: DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        expandCard();
    };

    const handleDragOver: DragEventHandler<HTMLLIElement> = e => e.preventDefault();

    const handleDragLeave: DragEventHandler<HTMLLIElement> = () => collapseCard();

    const handleDrop: DragEventHandler<HTMLLIElement> = e => {
        e.preventDefault();
        collapseCard();
        dispatch({type: BoardActionTypes.SET_DRAGGED_CARD, payload: [board, null]});
        dispatch({type: BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN, payload: [column.id, board.draggedCard]});
    }

    return (
        <li
            className="card-list-item"
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragEnter}
            style={dragStyle}
        >
            <div className="card-list-item-add">
                {column.isAddingCard ? input : button}
            </div>
            {getDragMessage()}
        </li>
    );
};

export default CardListItemAdd;