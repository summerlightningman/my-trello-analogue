import {FC} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import styled from "styled-components";

import BoardList from "../Board/board-list/board-list";


import Board from "../Board/board/board";


const Main = styled.main`
  padding: 0 10%;
`;

const Header = styled.header`
  height: 40px;
  padding: 10px 10%;
  border-bottom: 1px solid #0002;
  font-size: 48px;
`;

const App: FC = () => {
    const {windowTitle} = useTypedSelector(state => state.board);

    return <>
        <Header>{windowTitle}</Header>
        <Main>
            <Router>
                <Route path="/" exact><BoardList/></Route>
                <Route path="/board/:id"><Board/></Route>
            </Router>
        </Main>
    </>;
}

export default App;
