import React from "react";


class DemoBox extends React.Component {

	render(){
		const {tags} = this.props;		
		return (
			<div>
				<div className={`grid-item grid-item-${this.props.color}`}>						
					<div className="item-title">{this.props.children}</div>
					
					<div className={`description grid-description-${this.props.color}`}>
						<div className="item-detail">{this.props.description}</div>									
						<div className="item-tags">
							{tags.map((tag,index) => (
								<div key={index} className="tag">{tag}</div>
							))}	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DemoBox;