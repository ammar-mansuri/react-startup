import React from "react";
import SearchBar from "./SearchBar";
import SearchBarStyles from "../css/SearchBarStyles.css";
import unsplashed from "../api/unsplashed";
import ImageList from "./ImagelList";
class App extends React.Component {

  state = {searchedImages:[]};

  onSearchSubmit = async (inputText) => {
    
    // axios.get("https://api.unsplash.com/search/photos", header)
    // .then((response) => {
    //     console.log(response);
    // }).catch((error)=>{
    //     console.log(error)
    // });

    const response = await unsplashed.get("https://api.unsplash.com/search/photos", {
        params: { query: inputText }
    })
    console.log(response.data.results);
    this.setState({searchedImages:response.data.results});
  };

  render = () => {
    return (
      <div className="ui container searchHeader">
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        Found: {this.state.searchedImages.length} images
        <ImageList images={this.state.searchedImages}/>
      </div>
    );
  };
}

export default App;
