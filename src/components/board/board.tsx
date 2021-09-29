import {FC, MouseEventHandler} from 'react';

import {useHistory} from "react-router-dom";

import './board.css';

const Board: FC = () => {
    const history = useHistory();

    const back: MouseEventHandler  = () => {
        history.goBack();
    }

    return (
        <div className="board">
            <button className="buttons-panel__btn" onClick={back}>Назад</button>
        </div>
    );
};

export default Board;