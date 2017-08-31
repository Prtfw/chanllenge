import React from "react";
import InputWithSuggest from "./inputWithSuggest";
import { wrapper, btn, sectionWithFlexGrow } from "../styles/styleSheet";

import glamorous from "glamorous";

const Wrapper = glamorous.div(wrapper);

const Btn = glamorous.button(btn);

const Section1 = glamorous.section(sectionWithFlexGrow("30%"));
const Section2 = glamorous.section(sectionWithFlexGrow("40%"));

class AssignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmitClick = evt => {
    // evt.preventDefault();  we actually want a refresh in this case.
    fetch("http://localhost:3008/assign", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    this.forceUpdate();
  };

  handleChange = newValue => {
    this.setState(newValue);
  };

  render() {
    const employees =
      this.props.employees &&
      this.props.employees.map(({ guid, first, last }) => ({
        id: guid,
        label: `${last}, ${first}`,
      }));

    return (
      <div style={{ padding: 20 }}>
        <form onSubmit={this.handleSubmitClick}>
          <Wrapper>
            <Section1>
              <label>for: </label>
              <InputWithSuggest items={employees} handleChange={this.handleChange} field="from" />
            </Section1>
            <Section1>
              <label>from: </label>
              <InputWithSuggest items={employees} handleChange={this.handleChange} field="for" />
            </Section1>

            <Section2>
              <Btn type="submit"> Request Reveiw</Btn>
            </Section2>
          </Wrapper>
        </form>
      </div>
    );
  }
}

export default AssignForm;
