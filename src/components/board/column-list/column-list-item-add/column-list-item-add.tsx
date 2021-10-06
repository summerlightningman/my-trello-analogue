import {FC, MouseEventHandler} from 'react';

import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import {InterfaceActionTypes} from "../../../../store/types/interface";

import './column-list-item-add.css';

const ColumnListItemAdd: FC = () => {
    const {isAddingColumn} = useTypedSelector(state => state.interface);
    const dispatch = useDispatch();

    const switchIsAddingColumn: MouseEventHandler<HTMLButtonElement> = () =>
        dispatch({type: InterfaceActionTypes.SET_IS_ADDING_COLUMN, payload: !isAddingColumn});


    const button = <button onClick={switchIsAddingColumn}>Add column</button>;

    const input = <input/>;

    return (
        <div className="column-list-item column-list-item-add">
            {isAddingColumn ? input : button}
        </div>
    );
};

export default ColumnListItemAdd;