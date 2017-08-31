import React from "react";
import { withRouter } from "react-router-dom";

export const mapIdToEmployeeName = (id, employees) => {
  return employees && employees.filter(emp => emp.guid === id)[0];
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 5, comment: "" };
  }

  componentDidMount() {
    this.getEmployees();
    this.getReviews();
  }
  getReviews = () =>
    fetch("http://localhost:3008/reviews")
      .then(res => res.json())
      .then(data => this.setState({ reviews: data }));
  getEmployees = () =>
    fetch("http://localhost:3008/employees")
      .then(res => res.json())
      .then(data => this.setState({ employees: data }));

  handleSubmit = evt => {
    evt.preventDefault();
    fetch(`http://localhost:3008/submitReview/${this.props.match.params.id}`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state, id: this.props.match.params.id }),
    }).then(res => this.props.history.push("/"))
  };
  render() {
    return (
      <div>
        {this.props.match.params.for ? (
          <div>
            Review for{" "}
            {`${(mapIdToEmployeeName(this.props.match.params.for, this.state.employees) || {})
              .first}, ${(mapIdToEmployeeName(this.props.match.params.for, this.state.employees) ||
              {}).last}`}
          </div>
        ) : null}
        <form action="">
          <label> least awsome </label>
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            onChange={e => this.setState({ score: e.target.value })}
          />{" "}
          <label> most awsome, score: {this.state.score} </label>
          <textarea type="textarea" onChange={e => this.setState({ comment: e.target.value })}>
            why? your comments here.
          </textarea>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
