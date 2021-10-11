import {FC, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import {GuiActionType} from "../../../../store/types/gui";

import './column-list-item-add.css';

const ColumnListItemAdd: FC = () => {
    const {isAddingColumn} = useTypedSelector(state => state.board);
    const dispatch = useDispatch();

    const switchIsAddingColumn: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: GuiActionType.SWITCH_IS_ADDING_COLUMN, payload: !isAddingColumn});

    const button = <button onClick={switchIsAddingColumn}>Add column</button>;

    const input = <input/>;

    return (
        <div className="column-list-item column-list-item-add">
            {isAddingColumn ? input : button}
        </div>
    );
};

export default ColumnListItemAdd;