import {FC} from "react";

import BoardList from "../board-list/board-list";

import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Board from "../board/board";

const App: FC = () => {
    return <>
        <h1 className="header">My Trello Analogue</h1>
        <main className="content">
            <Router>
                <Route path="/" exact><BoardList/></Route>
                <Route path="/board/1"><Board/></Route>
            </Router>
        </main>
    </>;
}

export default App;
