import React from "react";

class SearchBar extends React.Component {
  state = { searchedText: "" };

  render() {
    const onSearchSubmit = (event) => {
      event.preventDefault();
      this.props.submitSearch(this.state.searchedText);
    };

    return (
      <div className="serach-bar ui segment">
        <form onSubmit={onSearchSubmit} className="ui form">
          <div className="field">
            <label> Search Bar</label>
            <input
              type="text"
              placeholder="Enter ..."
              value={this.state.searchedText}
              onChange={e => this.setState({ searchedText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
