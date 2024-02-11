import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Card from '../card/card.tsx';
import './input.scss'


export default function Input() {

    const [resp, setResp] = useState([]);
    
    

 const search = async (q: string) => {
    const res = await fetch('http://www.omdbapi.com/?' + new URLSearchParams({ s: q }) + '&apikey=b4530e47');
    const data = await res.json();
    setResp(data.Search);
}


    return(
        <section className='search-bar'>

            <form>
                <input type="text" placeholder='Type something' onChange={(e) => search(e.target.value)}/>
                <button className='btn_2' title='' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
 
            <div className="line__wrapper">
                { resp && resp.map((movie) => (
                    <Card key={movie.imdbID} name={movie.Title} genre={movie.Type} year={movie.Year}/>
                ))}
            </div>

        </section>
    )
}