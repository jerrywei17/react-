import React from "react"

class RWDTest extends React.Component {
	render(){
		return (
		<div>	
			<div className="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h4 className="modal-title" id="myModalLabel">Favorite App Page</h4>
			      </div>
			      <div className="modal-body">
			        <img className="img-responsive" src="./images/tree.jpg"></img>
			    
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img className="title-logo" src="./images/shooting-star.png" alt="logo"></img>
						</div>				
						<div className="col-md-6 text-right text-uppercase">
							<h1 className="text-thin title-super">Udacity Project</h1>
							<h4>Front-end</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<img className="img-responsive" src="./images/star.jpg" alt="Main image"></img>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<h2 className="text-muted">Feature Work</h2>
						</div>
					</div>
					<div className="row text-center">
						<div className="col-md-4">
							<img className="img-responsive" src="./images/tree.jpg" alt="some picture"></img>
							<h3 className="text-uppercase">Appify</h3>
							<p>test</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive" src="./images/tree.jpg" alt="some picture"></img>
							<h3 className="text-uppercase">Appify</h3>
							<p>test</p>
						</div>
						<div className="col-md-4">
							<img className="img-responsive" src="./images/tree.jpg" alt="some picture" data-toggle="modal" data-target="#project1"></img>
							<h3 className="text-uppercase">Appify</h3>
							<p>test</p>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	};
}

export default RWDTest;
	
