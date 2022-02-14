import {FC, FormEventHandler, MouseEventHandler, useContext} from 'react';
import styled from "styled-components";


import {Card, CardListItemAddProps, CardName} from "../../../types/card";
import ColumnContext from "../../Column/column-context";
import {MainActionTypes} from "../../../store/types/board";
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
        type: MainActionTypes.SWITCH_IS_ADDING_CARD,
        payload: [column.id, value]
    });

    const setNewCardName = (value: CardName) => dispatch({
        type: MainActionTypes.SET_NEW_CARD_NAME,
        payload: [column.id, value]
    });

    const addCard = () => {
        const card = new Card(column.id, cardCount, column.newCardName);
        dispatch({type: MainActionTypes.ADD_CARD, payload: card});
        switchIsAddingCard(false);
        setNewCardName('');
    };

    const handleAddEvent: MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        addCard();
    };

    const toggleAddingMode: MouseEventHandler<HTMLButtonElement> = () => switchIsAddingCard(!column.isAddingCard)

    const handleInput: FormEventHandler<HTMLInputElement> = e => setNewCardName(e.currentTarget.value);

    const button = <CardAddButtonSwitch onClick={toggleAddingMode}>Add card</CardAddButtonSwitch>
    const input = <AddForm>
        <AddInput onInput={handleInput} onEnterPress={addCard} value={column.newCardName}/>
        <ButtonsPanel>
            <ButtonAdd disabled={!column.newCardName} onClick={handleAddEvent}>Add</ButtonAdd>
            <ButtonCancel onClick={toggleAddingMode}>Cancel</ButtonCancel>
        </ButtonsPanel>
    </AddForm>;

    return (
        <CardComponent color="#7FFFD4">
            {column.isAddingCard ? input : button}
        </CardComponent>
    );
};

export default CardListItemAdd;