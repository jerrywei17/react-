import React from "react"
class UserGist extends React.Component{
  constructor(props) {
      super(props);
      this.state =  {
        username: '',
        lastGistUrl: ''
      };
   }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}> here</a>.
      </div>
    );
  }
};

var doAjax = React.createClass({

  render: function(){
    return (
      <UserGist source="https://api.github.com/users/octocat/gists" />
    );  
  }
});

export default doAjax;