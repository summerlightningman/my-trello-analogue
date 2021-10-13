import React from 'react';

import './card-list-item-add.css';
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BoardActionTypes} from "../../../../../store/types/board";

const CardListItemAdd = () => {
    const {isAddingCard, newCardName} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingCard = () =>
        dispatch({action: BoardActionTypes.SWITCH_IS_ADDING_CARD, payload: !isAddingCard});

    const button = <button onClick={switchIsAddingCard}>Add card</button>;
    const input = <>
        <input type="text"/>
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