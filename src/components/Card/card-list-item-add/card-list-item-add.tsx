import {FC, FormEventHandler, MouseEventHandler, useContext} from 'react';
import styled from "styled-components";


import {Card, CardListItemAddProps, CardName} from "../../../types/card";
import ColumnContext from "../../Column/column-context";
import {BoardActionTypes} from "../../../store/types/board";
import {ButtonAdd, ButtonCancel, ButtonsPanel, ButtonSwitch} from "../../buttons";
import {CardComponent} from "../card";
import {AddInput} from "../../add-input";
import AddForm from "../../add-form";
import {useAppDispatch} from "../../../hooks/redux";


const CardAddButtonSwitch = styled(ButtonSwitch)`
  color: #0000FF;
`;

const CardListItemAdd: FC<CardListItemAddProps> = ({cardCount}) => {
    const column = useContext(ColumnContext);

    const dispatch = useAppDispatch();


    const switchIsAddingCard = (value: boolean) => dispatch({
        type: BoardActionTypes.SWITCH_IS_ADDING_CARD,
        payload: [column.id, value]
    });

    const setNewCardName = (value: CardName) => dispatch({
        type: BoardActionTypes.SET_NEW_CARD_NAME,
        payload: [column.id, value]
    });

    const addCard = () => {
        const card = new Card(column.id, cardCount, column.newCardName);
        dispatch({type: BoardActionTypes.ADD_CARD, payload: card});
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => switchIsAddingCard(!column.isAddingCard)

    const handleInput: FormEventHandler<HTMLInputElement> = e => setNewCardName(e.currentTarget.value);

    const button = <CardAddButtonSwitch onClick={handleClick}>Add card</CardAddButtonSwitch>
    const input = <AddForm>
        <AddInput onInput={handleInput} onEnterPress={addCard} value={column.newCardName}/>
        <ButtonsPanel>
            <ButtonAdd disabled={!column.newCardName} onClick={addCard}>Add</ButtonAdd>
            <ButtonCancel onClick={handleClick}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    return (
        <CardComponent color="#7FFFD4">
            {column.isAddingCard ? input : button}
        </CardComponent>
    );
};

export default CardListItemAdd;