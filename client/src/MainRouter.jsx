import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home/Home';
import ServiceType from './components/pages/serviceType/ServiceType';
import ChooseService from './components/pages/chooseService/ChooseService';
import DatePicker from './components/pages/DatePage/DateAndTime'
    const MainRouter = () => {
    return (
        <div>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/ServiceType/:serviceName"><ServiceType /></Route>
                    <Route  path="/chooseService"><ChooseService /></Route>
                    <Route  path="/DatePicker"><DatePicker /></Route>
                    
                </Switch>
            </div>
        </Router>
    </div>
    )
}

export default MainRouter;
