import './reset.css'
import  Input  from './components/input/input.tsx'
import  Wave  from './components/wave.tsx'
import  Card  from './components/card/card.tsx'
import  Header  from './components/header/header.tsx'

export default function App() {
  

  return(
    <>
        <header className="header + {'hover' === true ? stroke : ''}">
          <Header />
        </header>
        
        <section className='search-bar'>
          <div className="container">

            <Input />

            <Card />

          </div>        
        </section>        
    
        <footer>        
          <Wave />
        </footer>
    </>
  )

}
