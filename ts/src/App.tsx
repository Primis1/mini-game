import './reset.css'
import  Input  from './components/input/input.tsx'
import  Wave  from './components/wave/wave.tsx'
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

            <Card />

          </div>        
        </section>        
    
        <footer>        
          <Wave />
        </footer>
    </>
  )

}
