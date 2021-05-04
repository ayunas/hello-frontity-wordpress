import React from 'react';
import Link from "@frontity/components/link";
import '../styles.css';



function NavBar() {

    return (
        <nav>
            <Link link="/">Home</Link>
            <Link link="/page/2">More posts</Link>
            <Link link="/about-us">About Us</Link>
        </nav>
    )




}

export default NavBar;