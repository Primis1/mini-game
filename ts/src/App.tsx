import './reset.css'
import  Input  from './components/input/input.tsx'
import  Wave  from './components/wave.tsx'
import  Card  from './components/card/card.tsx'
import  Header  from './components/header/header.tsx'

export default function App() {
  

  return(
    <>
        <header>
          <Header />
        </header>
        
        <section className='search-bar'>
          <div className="container">

            <Input />

            <Card 
              name={}
              province={}
              site={}
            />

          </div>        
        </section>        
    
        <footer>        
          <Wave />
        </footer>
    </>
  )

}
