import { history } from "helpers/GeneralHelpers";
import { Router } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
    return <Router history={history}>
        <Routes />
    </Router>
}

export default App;