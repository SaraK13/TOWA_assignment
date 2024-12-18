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
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        const fetchFilms = async() => {
            try {
                const response = await fetch("https://ghibliapi.vercel.app/films");
                const data = await response.json();
                setFilms(data);
                setFilteredFilms(data); // ensuring filteredFilms have same films at initial rendering
                setIsLoading(false); // Data fetched, stop loading
            } catch (error){
                console.error("Error fetching films: ", error);
                setIsLoading(false);
            }
        };

        fetchFilms();
    }, []);

    //filtering hook
    useEffect(() => {
        const trimmedSearchTerm = searchTerm.trim(); // ignoring leading space
        if(searchTerm.length >= 3){ //triggering as soon as 3 letters including space
            const filtered = films.filter((film) =>
                film.title.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
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

            {isLoading ? (<p className={styles.loading}>Loading movies...</p>) : (
                <div className={styles.grid}>
                    {filteredFilms.map((film) => (
                        <a href={film.url} key={film.id} className={styles.card}>
                            <img src={film.image} alt="item.title" />
                            <h3>{ film.title }</h3>
                            <p>{ film.description }</p>
                        </a>
                    ))}
                </div>)
            }
        </div>
    )
}

export default Home;