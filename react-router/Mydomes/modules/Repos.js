import React from 'react';
import {
	Link
} from 'react-router';
//navlink
import NavLink from './NavLink'

export default class Repos extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h2>第二个组件</h2>	
				<ul>
					<li><NavLink to="/repos/reactjs/react-router">第一跳内容</NavLink></li>
					<li><NavLink to="/repos/facebook/react">第二跳内容</NavLink></li>
					{this.props.children}
				</ul>	
			</div>
		)
	}
}