import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState} from 'react';
import Card from '../card/card.tsx';
import './input.scss'


export default function Input() {

    const [resp, setResp] = useState([]);
    
    const search = async (q) => {
        fetch('')
        .then
    }

    return(
        <section className='search-bar'>

            <form>
                <input type="text" placeholder='Type something' onChange={(e) => search(e.target.value)}/>
                <button className='btn_2' title='' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>

            <Card />

        </section>
    )
}