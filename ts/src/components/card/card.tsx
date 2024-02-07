import './card.scss'

export default function Card(props: { name: string | undefined, province: string | undefined, site: string | undefined } ){
    <div className="inner__wrapper">
        <div className="line__inner">v
            <div className="line">
                <h2>{props.name}</h2>
                <div>  
                  <p>{props.province}</p>
                  <p> - </p>
                  <a href={props.site}>Web-Site</a>
                </div>
            </div>
        </div>
    </div>
}