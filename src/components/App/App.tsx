import {FC} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

import appRoutes from "./app-routes";

import Main from "../styled/main";
import Header from "../styled/header";


const App: FC = () => {
    const {windowTitle} = useAppSelector(state => state.gui);

    return <>
        <Header>{windowTitle}</Header>
        <Main>
            <Router>
                {
                    appRoutes.map(routeProps =>
                        <Route {...routeProps}/>)
                }
            </Router>
        </Main>
    </>;
}

export default App;
