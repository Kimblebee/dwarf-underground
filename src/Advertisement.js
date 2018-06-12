import React, { Component } from 'react'
import GoldAd from './GoldAd';
import HobbitAd from './HobbitAd';
import MountainAd from './MountainAd';
import OrcAd from './OrcAd';

class Advertisement extends Component {
  render() {
    return (
<div className="small-12 columns other-articles">
<h2>From around the Realm</h2>

         <OrcAd />
        <MountainAd />
        <GoldAd />
        <HobbitAd />
        </div>

    )
}
}
export default Advertisement
