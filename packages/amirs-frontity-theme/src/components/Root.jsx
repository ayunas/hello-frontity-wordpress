import React from 'react';
import {connect} from 'frontity';
import Link from '@frontity/components/link';
import NavBar from './NavBar';


function Root(props) {

    const {state} = props;

    return (
        <>
          {/* You can edit your package in:
          <pre>packages/amirs-frontity-theme/src/index.js</pre> */}
          <NavBar/>
          <h1>Amir's Frontity Theme</h1>
          <p>Current URL : {state.router.link}</p>
          
        </>
      );
}

export default connect(Root); //HoC to provide state to the component