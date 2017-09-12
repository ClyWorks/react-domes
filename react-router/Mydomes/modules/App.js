import React from 'react';
//引入link组件
import {
	Link,
	IndexLink
} from 'react-router';
//引入navlink组件
import NavLink from './NavLink'
//<li><IndexLink to="/" activeClassName="navtice" >首页</IndexLink></li>  也能实现点击变红效果

//<li><NavLink to="/">Home</NavLink></li>  测试时你会发现无论点击哪个导航链接，Home 链接始终处于激活状态 因为，当子路由处于激活状态时 父路由也会被激活，而/路径可以匹配任何子路由
//定义组件
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<h1>初始路由练习</h1> 
				< ul role = "nav" >
					<li><NavLink to="/" onlyActiveOnIndex={true} >首页</NavLink></li>
					<li><NavLink to="/about" >第一个</NavLink></li> 
					< li > <NavLink to="/repos" >第二个</NavLink> < /li> 
				< /ul >
				{this.props.children}
			</div>
		)
	}
}