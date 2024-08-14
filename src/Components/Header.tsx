import React from "react";
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Task Manager</h1>
        </header>
    );
};

export default Header;