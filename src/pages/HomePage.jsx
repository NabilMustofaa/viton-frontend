import React from "react";
import { getOutfits } from "../utils/outfits";
import OutfitsGrid from "../components/OutfitsGrid";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfits: getOutfits()
    };
  }

  render() {
    return (
      <div className="container">
        <OutfitsGrid outfits={this.state.outfits} />
      </div>
    );
  }
}

export default HomePage;
