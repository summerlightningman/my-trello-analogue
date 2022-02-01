import {FC, useContext} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import CardListItem from "../card-list-item/card-list-item";
import CardListItemAdd from "../card-list-item-add/card-list-item-add";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {ColumnContext} from "../../Column/column-list-item/column-list-item";
import './card-list.css';

const CardList: FC = () => {
    const column = useContext(ColumnContext);

    const cardList = useTypedSelector(state => state.board.cardList)
        .filter(card => card.columnId === column.id);

    return (
        <ul className="card-list">
            <CardListItemAdd key={-1} cardCount={cardList.length}/>
            <DndProvider backend={HTML5Backend}>
                {cardList.map(card => <CardListItem card={card}  key={card.id}/>)}
            </DndProvider>
        </ul>
    );
};

export default CardList;