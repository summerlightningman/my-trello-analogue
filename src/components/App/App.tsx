import {FC} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import styled from "styled-components";

import appRoutes from "./app-routes";


const Main = styled.main`
  padding: 0 10%;
`;

const Header = styled.header`
  height: 40px;
  padding: 10px 10%;
  border-bottom: 1px solid #0002;
  font-size: 48px;
  margin-bottom: 40px;
`;

const App: FC = () => {
    const {windowTitle} = useAppSelector(state => state.gui);

    return <>
        <Header>{windowTitle}</Header>
        <Main>
            <Router>
                {appRoutes.map(routeProps =>
                    <Route {...routeProps}/>)}
            </Router>
        </Main>
    </>;
}

export default App;
