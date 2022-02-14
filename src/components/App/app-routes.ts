import BoardList from "../Board/board-list/board-list";
import Board from "../Board/board/board";
import {RouteProps} from "react-router-dom";


const appRoutes: RouteProps[] = [
    {path: '/', exact: true, component: BoardList},
    {path: '/board/:id', component: Board}
];

export default appRoutes