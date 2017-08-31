import React from "react";
import AssignForm from "./assignForm";
import Reviews from "../reviews/reviews";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getEmployees();
  }
  getEmployees = () =>
    fetch("http://localhost:3008/employees")
      .then(res => res.json())
      .then(data => this.setState({ employees: data }));

  render() {
    return (
      <div>
        <Reviews />
        <AssignForm employees={this.state.employees} />
      </div>
    );
  }
}

export default Dashboard;
