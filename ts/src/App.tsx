import './reset.css'
import  Input  from './components/input.tsx'
import  Wave  from './components/wave.tsx'

export default function App() {
  

  return(
    <section className='search-bar'>
      <div className="container">

        <Input />

        <Card />

        <Wave  />
        
      </div>
    </section>
  )

}
