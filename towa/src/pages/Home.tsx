import chihiro from "../assets/chihiro.jpg";
import haku from "../assets/haku.jpg";
import kaonashi from "../assets/kaonashi.jpg";
import yubaba from "../assets/yubaba.jpg";
import styles from "./Home.module.css";

const Home = () => {
    const data = [
        {
            id: 1,
            image: chihiro,
            title: "Chihiro",
            text: "Chihiro Ogino is the protagonist of Spirited Away.",
            url: "https://example.com/card1"
        },
        {
            id: 2,
            image: haku,
            title: "Haku",
            text: "Haku is Yubaba's apprentice and second-in-command at the Bathhouse.",
            url: "https://example.com/card2"
        },
        {
            id: 3,
            image: kaonashi,
            title: "No-Face",
            text: "No-Face is a lonely spirit who follows Chihiro.",
            url: "https://example.com/card3"
        },
        {
            id: 4,
            image: yubaba,
            title: "Yubaba",
            text: "Yubaba is a witch who rules “Aburaya” with her powerful magic and power.",
            url: "https://example.com/card4"
        },
    ]
    return(
        <div className={styles.home}>
            <div className={styles.grid}>
                {data.map((item) => (
                    <a href={item.url} key={item.id} className={styles.card}>
                        <img src={item.image} alt="item.title" />
                        <h3>{ item.title }</h3>
                        <p>{ item.text }</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Home;