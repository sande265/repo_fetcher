import { Route, Switch } from "react-router-dom"
import { Home, User } from "../components"
import DefaultLayout from "../Layout/DefaultLayout"

const Routes = (props) => {
    return <Switch>
        <DefaultLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id" component={User} />
        </DefaultLayout>
    </Switch>
}

export default Routes