import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState} from 'react';
import './input.scss'


export default function Input() {

    const [resp, setResp] = useState([])
    
 useEffect ( () => {
        fetch('http://www.omdbapi.com/?t=${}')
        .then(resp = setResp(resp))
        .catch(error => console.error('Error:', error));

    },[])

    return(
        <form>
            <input type="text" placeholder='Type something' onChange={(event)=> console.log(event)}/>
            <button className='btn_2' title='' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}