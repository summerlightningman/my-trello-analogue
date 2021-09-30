import {FC} from "react";

import BoardList from "../board-list/board-list";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Board from "../board/board";

import './App.css';


const App: FC = () => {
    return <>
        <h1 className="header">My Trello Analogue</h1>
        <main className="content">
            <Router>
                <Route path="/" exact><BoardList/></Route>
                <Route path="/board/:id"><Board/></Route>
            </Router>
        </main>
    </>;
}

export default App;
