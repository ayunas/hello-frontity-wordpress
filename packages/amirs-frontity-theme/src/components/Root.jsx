import React, {useEffect, useState} from 'react';
import {connect} from 'frontity';
import NavBar from './NavBar';
import Switch from "@frontity/components/switch";
import List from './List';
import Post from './Post';
import Page from './Page';
import '../styles.css';


function Root(props) {
    const {state} = props;
    const data = state.source.get(state.router.link);
    console.log(data);
    return (
        <>
          {/* You can edit your package in:
          <pre>packages/amirs-frontity-theme/src/index.js</pre> */}
          <NavBar/>
          <h1>Amir's Frontity Theme</h1>
          <p>Current URL : {state.router.link}</p>
          <main>
                <Switch>
                  <List when={data.isArchive} />
                  {/* <div when={data.isArchive}>This is a list</div> */}
                  {/* <div when={data.isPost}>This is a post</div>
                  <div when={data.isPage}>This is a page</div> */}
                  <Post when={data.isPostType} />
                  <Page when={data.isPage} />
                </Switch>
          </main>
        </>
      );
}

export default connect(Root); //HoC to provide state to the component