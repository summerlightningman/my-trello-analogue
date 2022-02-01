import {FC} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import BoardList from "../Board/board-list/board-list";


import Board from "../Board/board/board";

import './App.css';
import '../../styles/buttons-panel.css';

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
