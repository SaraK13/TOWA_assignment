import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <img src={logo} alt="dummy logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;