import React from "react";
import ReactAutocomplete from "react-autocomplete";

class InputWithSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <ReactAutocomplete
        items={this.props.items}
        shouldItemRender={(item, value) =>
          item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) => (
          <div key={item.id} style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
            {item.label}
          </div>
        )}
        value={this.state.value}
        onChange={e => {this.setState({ value: e.target.value })}}
        onSelect={item => {
          this.setState({ value: item });
          this.props.handleChange({ [this.props.field]: item });
        }}
      />
    );
  }
}

export default InputWithSuggest;
