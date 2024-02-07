import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './input.scss'


export default function Input() {
    
    return(
        <form>
            <input type="text" placeholder='Type something'/>
            <button className='btn_2' title='' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}