import {FC} from "react";

import BoardList from "../board-list/board-list";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Board from "../board/board";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import './App.css';

const App: FC = () => {
    const {windowTitle} = useTypedSelector(state => state.board);

    return <>
        <h1 className="header">{windowTitle}</h1>
        <main className="content">
            <Router>
                <Route path="/" exact><BoardList/></Route>
                <Route path="/board/:id"><Board/></Route>
            </Router>
        </main>
    </>;
}

export default App;
