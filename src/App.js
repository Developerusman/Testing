import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Index from './Componet/Index/Index';
import InnerPage from './Componet/Inner-page/inner-page';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/Inner-page" exact component={InnerPage}/>
        </Switch>
       </BrowserRouter>

    </div>
  );
}

export default App;
