import {FC} from "react";
import './App.css';
import BoardList from "../board-list/board-list";

const App: FC = () => {
    return <>
        <h1 className="header">My Trello Analogue</h1>
        <main className="content">
            <BoardList/>
        </main>
    </>;
}

export default App;
