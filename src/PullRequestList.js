import React from "react";
import PullRequestElement from "./PullRequestElement.js";

class PullRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pullrequest: props.pullrequests
    };
  }

  render() {
    return (
      <div>
        <h4>PullRequestList</h4>
        {this.state.pullrequest.map((request, i) => {
          return (
            <PullRequestElement
              url={request.url}
              requrl={request.pullurl}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}
export default PullRequestList;
