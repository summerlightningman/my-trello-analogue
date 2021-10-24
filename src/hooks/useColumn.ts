import {Column} from "../types/column";
import {BoardActionTypes} from "../store/types/board";
import {Dispatch} from "redux";
import {Card, CardName} from "../types/card";

export const useColumn = (column: Column, dispatch: Dispatch) => {
    const switchIsAddingCard = (value: boolean) => dispatch({
        type: BoardActionTypes.SWITCH_IS_ADDING_CARD,
        payload: [column, value]
    });
    const setNewCardName = (value: CardName) => dispatch({
        type: BoardActionTypes.SET_NEW_CARD_NAME,
        payload: [column, value]
    });
    const addCard = () => {
        const card = new Card(column.id, column.cardList.length, column.newCardName);

        dispatch({type: BoardActionTypes.ADD_CARD, payload: [column, card]});
    };
    return {switchIsAddingCard, setNewCardName, addCard}
}