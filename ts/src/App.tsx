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
        
          <div className="container">

            <Input />

          </div>        

        <footer>        
          <Wave />
        </footer>
    </>
  )

}
