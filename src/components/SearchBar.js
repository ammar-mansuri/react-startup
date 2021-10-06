import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  state = { searchedText: "" };

  handleFormSubmit=(event)=>{
    event.preventDefault();

    this.props.onUserSubmit(this.state.searchedText);
    //console.log('Form Submit Try');
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search.. </label>
            <input
              type="text"
              placeholder="Search.."
              value={this.state.searchedText}
              onChange={(e) => this.setState({ searchedText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}


export default SearchBar;
