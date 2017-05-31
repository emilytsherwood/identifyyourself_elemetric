//This Module sets up the React Router
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//We Include all the components we will need for the router
import { Main } from '../app/components/Main';
import { LandingPage } from '..app/components/children/LandingPage';
import { InputQuestion } from '../app/components/children/InputQuestion';
import { MultiQuestion} from '../app/components/children/MultiQuestion';
import { PicQuestion } from '../app/components/children/PicQuestion';
import { DisplayAnswers } from '../app/components/children/DisplayAnswers';

const router = (
<Router history={hashHistory}>
    <Route path='/' component={Main}>
        {/*<Route path='/profile' component={UserProfile} />
        <Route path='/projects/new' component={Form} />*/}
        <IndexRoute component={LandingPage} />
    </Route>
</Router>
);

export { router };

