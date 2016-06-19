import React from "react"

class TweetBox extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	text: '',
	    	photoAdded: false
	    };
	 }

	handleChange(event){
		this.setState({ text: event.target.value });
	}

	togglePhoto(){
		this.setState({ photoAdded: !this.state.photoAdded });
	}
	remainingCharacters(){
		if (this.state.photoAdded) {
			return 140 - 23 - this.state.text.length;
	  	} else {
			return 140 - this.state.text.length;
	  	}
	}
	overflowAlert(){
		if (this.remainingCharacters() < 0) {
				let beforeOverflowText;
				let overflowText;
				if (this.state.photoAdded) {
				  beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
				  overflowText = this.state.text.substring(140 - 23);
				} else {
				  beforeOverflowText = this.state.text.substring(140 - 10, 140);
				  overflowText = this.state.text.substring(140);
				}
    return (
	      <div className="alert alert-warning">
	        <strong>Oops! Too Long:</strong>
	        &nbsp;...{beforeOverflowText}
      		<strong className="bg-danger">{overflowText}</strong>
	      </div>
	    );
	  } else {
	    return "";
	  }
	}

	render(){
		return (
	      <div className="well clearfix">
	        { this.overflowAlert() }
	        <textarea className="form-control" onChange={this.handleChange.bind(this)}></textarea>
	        <br/>
	        <span>{ this.remainingCharacters() }</span>
	        <button className="btn btn-primary pull-right" disabled={this.remainingCharacters() === 140}>Tweet</button>
	        <button className="btn btn-default pull-right" onClick={this.togglePhoto.bind(this)}>
	        	{this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
	        </button>
	      </div>
	    );
	}

}

export default TweetBox;