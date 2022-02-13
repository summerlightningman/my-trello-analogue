import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import ColumnListItem from "../components/Column/column-list-item/column-list-item";
import {Column} from "../types/column";
import {store} from "../store";

import {Provider} from "react-redux";
import React from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

jest.mock('../hooks/redux', () => ({
    useAppSelector: () => []
}));
jest.mock('react-dnd', () => ({
    useDrop: () => [{isOver: false}, null],
}));

let container: HTMLDivElement;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
        render(<Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <ColumnListItem column={column}/>
            </DndProvider>
        </Provider>, container);
    });
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove();
});

const column = new Column(-1, -1, 'Test column');

it('ColumnListItem has name from props', () => {
    const columnNameElement = container.querySelector('span');
    expect(columnNameElement?.textContent).toBe(column.name);
});

describe('ColumnListItem creating-card works correctly', () => {
    it('Has button Add card', () => {
        const cardButtonAdd = container.querySelector('button');
        expect(cardButtonAdd?.name).toBe('Add card');
    });
});
