import React from "react"

class TextButton extends React.Component {
	handleClick(event){
		this.props.displayValue(event.target.value);
	}
	render(){
		const {index,data} = this.props;
		return (
			<div>
				<input type='button' className="btn btn-default" style={{marginTop:'3px'}} value={data} onClick={this.handleClick.bind(this)}/>	
				<br/>
			</div>

		)
	}
}

class DisplayDiv extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	value: ''
	    };
	 }
	displayValue(value){
		this.setState({value:value});
	}
	componentWillReceiveProps(){
		this.setState({value:''});
	}

	render(){
		
		const datas = this.props.datas;
		if(datas.length == 1){
			if(datas[0]==''){
				return (<div></div>)			 	
			}
			
		}
		const unDupDatas = datas.filter((data,i,arr) => arr.indexOf(data) === i);
		return (
			<div>
			{	
				unDupDatas.map((data,index,arr) =>  {
				var value = '';								
				unDupDatas.forEach((ele)=>{
					if(ele!=data){
						value = value + data+'-'+ele+' ';
					}					
				});
				if(value == ''){ value = data}

				return <TextButton key={index} data={value} displayValue={this.displayValue.bind(this)}/>} 
				)
			}
				<div><p style={{paddingLeft:'3%',fontSize:'15px'}}>{this.state.value}</p></div>
			</div>
		)
	}
}

class InputBox extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
	    	value: ''
	    };
	  }

	handleChange(event){
		let value = event.target.value
		this.setState({value: value});
		this.props.inputChange(value.trim().split(/\s+/g));  
	}
	
	render(){
		let input;
		return (
			<input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} />
			
		)
	}
}


class TextToButton extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	datas: []
	    };
	  }

	  inputChange(datas){
	  	this.setState({datas:datas});
	  }

	render(){
		return (			
			<div className="row">
				
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<h1>請輸入句子</h1>
					<InputBox inputChange={this.inputChange.bind(this)}/>					
					<DisplayDiv datas={this.state.datas}/>
				</div>
				<div className="col-md-4">					
					
				</div>
			</div>
		)
	}
}

export default TextToButton;