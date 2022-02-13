import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import {store} from "../store";
import Board from "../components/Board/board/board";
import {getByTestId} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";


let container = document.createElement('div');
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    window.location.pathname = '/';
    act(() => {
        render(<Provider store={store}>
            <MemoryRouter initialEntries={['/board/1']}>
                <Board/>
            </MemoryRouter>
        </Provider>, container);
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

jest.mock('react-icons/all', () => ({
    AiOutlinePlus: () => <></>
}));

describe('404 handling:', () => {
    it('Column section is empty', () => {
        const columnSection = container.querySelector('ul');
        expect(columnSection?.textContent).toBeFalsy();
    });

    it('Board has back button', () => {
        expect(getByTestId(container, 'button-back')).toBeTruthy();
    });
});

it('Back buttons returns to home', () => {
    const buttonBack = getByTestId(container, 'button-back');
    buttonBack.click();

    expect(window.location.pathname).toBe('/');
})