import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import ChooseService from './components/pages/chooseService/ChooseService';

    const ToriRouter = () => {
    return (
        <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route  path="/chooseService"><ChooseService /></Route>
                    
                </Switch>
            </div>
        </Router>
    </div>
    )
}

export default ToriRouter;
