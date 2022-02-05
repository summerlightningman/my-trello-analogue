import {FC, MouseEventHandler} from 'react';

import {useHistory} from "react-router-dom";
import styled from "styled-components";

import {BoardListItemProps} from "../../../types/board";
import {BoardCard, BoardCardLabel} from "../board-card";


const BoardListItemCard = styled(BoardCard)`
  background: #00BFFF;

  &:hover {
    background: #1E90FF;
  }

  &:active {
    background: #4682B4;
  }
`

const BoardListItem: FC<BoardListItemProps> = ({id, name}) => {
    const history = useHistory();

    const goToBoard: MouseEventHandler<HTMLLIElement> = () => {
        history.push(`/board/${id}`);
    }

    return (
        <BoardListItemCard onClick={goToBoard}>
            <BoardCardLabel>{name}</BoardCardLabel>
        </BoardListItemCard>
    );
};

export default BoardListItem;