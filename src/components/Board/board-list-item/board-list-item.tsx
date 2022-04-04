import {FC, MouseEventHandler} from 'react';

import {useHistory} from "react-router-dom";

import {BoardListItemProps} from "../../../types/board";
import BoardCard from "../../styled/board-card";
import BoardCardLabel from "../../styled/board-card-label";


const BoardListItem: FC<BoardListItemProps> = ({id, name}) => {
    const history = useHistory();

    const goToBoard: MouseEventHandler<HTMLLIElement> = () => {
        history.push(`/board/${id}`);
    }

    return (
        <BoardCard onClick={goToBoard}>
            <BoardCardLabel>{name}</BoardCardLabel>
        </BoardCard>
    );
};

export default BoardListItem;