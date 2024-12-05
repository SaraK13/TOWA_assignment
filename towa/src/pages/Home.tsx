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
    const [ films, setFilms ] = useState<Film[]>([]); // full list of films fetched from API
    const [ searchTerm, setSearchTerm ] = useState(""); // searching words
    const [ filteredFilms, setFilteredFilms ] = useState<Film[]>([]); // storing the filtered list of films based on searchTerm
    
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

    //filtering hook
    useEffect(() => {
        if(searchTerm.length >= 3){
            //triggering the filter
            const filtered = films.filter((film) =>
                film.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFilms(filtered);
        } else {
            setFilteredFilms(films); //less then 3 letters, display all films
        }
    }, [searchTerm, films]);

    return(
        <div className={styles.home}>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search for a movie.." className={styles.searchBox} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            <div className={styles.grid}>
                {filteredFilms.map((film) => (
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