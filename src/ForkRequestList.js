import React from "react";

class ForkRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forkrequest: props.forkrequests
    };
  }
  componentDidMount() {
    console.log("Fork Request", this.state.forkrequest);
  }

  render() {
    return (
      <div>
        {/* {this.state.requests.map()} */}
        <h4>ForkRequestList</h4>
        {this.state.forkrequest.map((request, i) => {
          return (
            <div key={i}>
              <p>
                Url: <a href={request.url}>{request.name}</a> Forked From:{" "}
                {request.source}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ForkRequestList;
