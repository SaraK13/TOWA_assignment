import styles from "./Footer.module.css";
import logo from "../assets/logo.svg"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Col 1 */}
                <div className={styles.column}>
                    <img src={logo} alt="dummy logo" />
                </div>
                
                {/* Col 2 */}
                <div className={styles.column}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                {/* Col 3 */}
                <div className={styles.column}>
                    <p>Sara Konno</p>
                    <p>Mariahilfer Str. 90, 1070 Wien</p>
                    <p>+43-660-1234-567</p>
                    <p>abc@test.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;