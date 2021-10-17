import {FC, FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';

import './card-list-item-add.css';
import {useDispatch} from "react-redux";
import {CardListItemAddProps} from "../../types/card";
import {useColumn} from "../../hooks/useColumn";

// TODO RELEASE NEW CARD FUNCTIONAL
const CardListItemAdd: FC<CardListItemAddProps> = ({board, column}) => {
    const {switchIsAddingCard, setNewCardName, addCard} = useColumn(board, column, useDispatch());

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
    </>

    return (
        <li className="card-list-item card-list-item-add">
            {column.isAddingCard ? input : button}
        </li>
    );
};

export default CardListItemAdd;