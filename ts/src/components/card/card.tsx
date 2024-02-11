import './card.scss'

export default function Card(props: { name: string, genre: string, year: string} ){
    
     return(
        <div className="line__inner">
            <div className="line">


                <h2>{props.name}</h2>

                <div>  
                  <p>{props.genre}</p>
                  <p>{props.year}</p>
                </div>
            </div>
        </div>
    )
}