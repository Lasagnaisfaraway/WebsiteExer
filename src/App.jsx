import { useState } from 'react'
import { Hero } from './Hero'
import { Navbar } from './Navbar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar/>
    <Hero/>
    <body className="bg-red-900">
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="https://cdn.rakyatku.com/imageresize/images/1551235793ukat.jpg&width=640&height=427" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </body>
    </>
  )
}

export default App
