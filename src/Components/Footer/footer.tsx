import React from 'react';

import styles from "./footer.module.css"
const Footer = () =>{
    return(
    <footer className={styles.footer}>
        <div className={styles.txt}>
            <p> By Leonardo Fernandes Soares</p>
        </div>
        <div className={styles.icons}>
            <a href="https://www.github.com/leofss"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/leonardo-fernandes-soares/"><i className="bi bi-linkedin"></i></a>
        </div>
    </footer>
    )
}

export default Footer  