import styles from "./Home.module.css";
import { useEffect, useState } from "react";

interface Film {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
}


const Home = () => {
    const [ films, setFilms ] = useState<Film[]>([]);
    
    useEffect(() => {
        const fetchFilms = async() => {
            try {
                const response = await fetch("https://ghibliapi.vercel.app/films");
                const data = await response.json();
                setFilms(data);
            } catch (error){
                console.error("Error fetching films: ", error);
            }
        };

        fetchFilms();
    }, []);

    return(
        <div className={styles.home}>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search for a movie.." className={styles.searchBox}/>
            </div>

            <div className={styles.grid}>
                {films.map((film) => (
                    <a href={film.url} key={film.id} className={styles.card}>
                        <img src={film.image} alt="item.title" />
                        <h3>{ film.title }</h3>
                        <p>{ film.description }</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Home;