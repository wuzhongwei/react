import React,{PureComponent} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/Header';

import { Provider} from 'react-redux';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
class App extends PureComponent {
    render(){
     
        return (
            <BrowserRouter>
                <Provider store={store}>
                	
									<BrowserRouter>
										<div>
										<Header />
											<Route path="/" exact component={Home}></Route>
											<Route path="/detail/:id" exact component={Detail}></Route>
											<Route path="/login" exact component={Login}></Route>
											<Route path="/write" exact component={Write}></Route>
										</div>
									</BrowserRouter>
                </Provider>
            </BrowserRouter>
        )
    }
}

export default App;
