import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <img src={logo} alt="dummy logo" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;