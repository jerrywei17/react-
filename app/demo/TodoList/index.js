import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


class TodoList extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-4"></div>
  			<div className="col-md-4">
  				<h1>TodoList</h1>
					<Provider store={createStore(todoApp)}>			  	
				    <App />
				  </Provider>
  			</div>
  			<div className="col-md-4"></div>
			</div>
			  
		);
	}	
}

export default TodoList;
