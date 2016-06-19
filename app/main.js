import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, hashHistory} from "react-router";
import TodoList from "./demo/TodoList/index";
import RWDTest from "./demo/RWDTest/index";
import TextToButton from "./demo/TextToButton/index";
import TweetBox from "./demo/TweetBox/index";
import DemoBox from "./DemoBox";
require("../public/DemoBox.css");
require("../public/main.css");
require("../public/style.css");

const Contact = () => <div><h1>Contact</h1></div>;

const LinkTodoList = () => <Link to="/TodoList">TodoList</Link>;
const LinkRWDTest = () => <Link to="/RWDTest">RWDTest</Link>;
const LinkTextToButton = () => <Link to="/TextToButton">TextToButton</Link>;
const LinkTweetBox = () => <Link to="/TweetBox">TweetBox</Link>;
class Home extends React.Component {
	render(){
		return (
			<div>
				<div className="starter-template">
					<h1>React.js 相關練習</h1>
				</div>
				<div className="content-wrapper">
					<DemoBox 
						color="green"
						description="官方TodoList範例"
						tags={['Redux']}> 
						 <Link to="/TodoList">TodoList</Link>
					</DemoBox>
					<DemoBox 
						color="green"
						description="RWD網頁練習"
						tags={['RWD']}> 
						 <Link to="/RWDTest">RWDTest</Link>
					</DemoBox>
					<DemoBox 
						color="green"
						description="文字轉按鈕"
						tags={['Regex']}> 
						 <Link to="/TextToButton">TextToButton</Link>
					</DemoBox>
					<DemoBox 
						color="green"
						description="Ajax發送"
						tags={['Ajax']}> 
						 <Link to="/TweetBox">TweetBox</Link>
					</DemoBox>
				</div>
				
			</div>
		);
	}
}

class App extends React.Component {
	render(){
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Home}></Route>
				<Route path="/TodoList" component={TodoList}></Route>
				<Route path="/RWDTest" component={RWDTest}></Route>
				<Route path="/TextToButton" component={TextToButton}></Route>
				<Route path="/TweetBox" component={TweetBox}></Route>
			</Router>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
