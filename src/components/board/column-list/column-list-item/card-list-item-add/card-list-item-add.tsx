import React, {FormEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react';

import './card-list-item-add.css';
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../../../../store/types/board";

const CardListItemAdd = () => {
    const {isAddingCard, newCardName} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingCard: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: BoardActionTypes.SWITCH_IS_ADDING_CARD, payload: !isAddingCard});

    const addBoard = () => {
        // TODO: FINISH WRITE THIS
        dispatch({action: BoardActionTypes.SET_NEW_CARD_NAME, payload: ''});
        dispatch({action: BoardActionTypes.SWITCH_IS_ADDING_CARD, payload: false});
    }

    const handleInput: FormEventHandler<HTMLInputElement> = e =>
        dispatch({type: BoardActionTypes.SET_NEW_CARD_NAME, payload: e.currentTarget.value});
    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => e.key === 'Enter' && addBoard();

    const button = <button onClick={switchIsAddingCard}>Add card</button>;
    const input = <>
        <input type="text" value={newCardName} onInput={handleInput} onKeyPress={handleKeyPress}/>
        <div className="buttons-panel">
            <button className="buttons-panel__btn">Add</button>
            <button className="buttons-panel__btn" onClick={switchIsAddingCard}>Cancel</button>
        </div>
    </>

    return (
        <li className="card-list-item card-list-item-add">
            {isAddingCard ? input : button}
        </li>
    );
};

export default CardListItemAdd;