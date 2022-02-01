import {FC} from 'react';

import {BoardListItemProps} from "../../../types/board";

import './board-list-item.css';

const BoardListItem: FC<BoardListItemProps> = ({name}) => {
    return (
        <div className="board-list-item board-list-item_card">
            {name}
        </div>
    );
};

export default BoardListItem;