import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler, useContext} from 'react';

import {useDispatch} from "react-redux";

import {Card, CardListItemAddProps, CardName} from "../../../types/card";
import ColumnContext from "../../Column/column-context";
import {BoardActionTypes} from "../../../store/types/board";
import CardListItemSlot from "../card-list-item-slot/card-list-item-slot";

import './card-list-item-add.css';

const CardListItemAdd: FC<CardListItemAddProps> = ({cardCount}) => {
    const column = useContext(ColumnContext);

    const dispatch = useDispatch();


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

    return (
        <li
            className="card-list-item"
        >
            <div className="card-list-item-add">
                {column.isAddingCard ? input : button}
            </div>
            <CardListItemSlot belowCardId={-1}/>
        </li>
    );
};

export default CardListItemAdd;