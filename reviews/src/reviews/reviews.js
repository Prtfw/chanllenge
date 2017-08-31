import React from "react";
import Review from "../review/review";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], employees: [] };
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
      .then(data => this.setState({ employees: data })).catch(e=>console.log('error rendering reviews: ', e));

  mapIdToEmployeeName = id => this.state.employees.filter(emp => emp.guid === id)[0];
  //this not entirely DRY, should refactor version in reviewForm.js to utils file and use import instad

  render() {
    return (
      <div style={{padding: 20}}>
        {this.state.reviews.map(review => (
          <Review
            key={review.id}
            fromEmployee={this.mapIdToEmployeeName(review.from)}
            forEmployee={this.mapIdToEmployeeName(review.for)}
            {...review}
          />
        ))}
      </div>
    );
  }
}
export default Reviews;
