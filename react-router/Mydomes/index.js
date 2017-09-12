import React from 'react';
import ReactDOM from 'react-dom';
// 导入 browserHistory 替代 hashHistory
import {
	Router,
	Route,
	browserHistory,
	IndexRoute
} from 'react-router'
import App from './modules/App';
//引入路由组件
import About from './modules/About';
import Repos from './modules/Repos';
//引入获取链接组件
import Repo from './modules/Repo'
//引入首页组件
import Home from './modules/Home'


ReactDOM.render(
	(
		<Router history={browserHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
	            //获取URLrouter
	            <Route path="/repos/:userName/:repoName" component={Repo}/>
	        </Route>
        </Route>
    </Router>
	),

	document.getElementById('app')
)