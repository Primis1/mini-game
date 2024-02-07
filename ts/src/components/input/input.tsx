import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './input.scss'


export default function Input() {

    const [resp, setResp] = useState([])
    
    useEffect ( () => {
        fetch('')
        .then(resp = setResp(resp))
    },[])

    return(
        <form>
            <input type="text" placeholder='Type something'/>
            <button className='btn_2' title='' type='submit' onChange={(event)=> console.log(event)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}