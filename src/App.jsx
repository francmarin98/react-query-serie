import './App.css'
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {HomePage, PlacesPage, RQPlacesPage} from "./pages";
import {Toaster} from "react-hot-toast";


function App() {

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/places-page">
                                Traditional Places Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rq-places-page">
                                RQ Places Page
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/places-page">
                        <PlacesPage/>
                    </Route>
                    <Route path="/rq-places-page">
                        <RQPlacesPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
            />
        </BrowserRouter>
    )
}

export default App
