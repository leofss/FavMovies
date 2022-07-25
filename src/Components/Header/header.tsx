import React from 'react';

//Styles 
import styles from "./header.module.css"

const Header = () => {
    return(
        <header>
            <nav className={styles.nav}>
                <h1> My Favorite Movies API </h1>
                <h2> Developed with React + Node + TS</h2>
            </nav>
       </header>
    )
}

export default Header  