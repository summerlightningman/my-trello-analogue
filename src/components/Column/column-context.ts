import React from "react";
import {Column} from "../../types/column";


const ColumnContext = React.createContext<Column>(new Column(-1, -1, ''));

export default ColumnContext;