// import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html className='main-background'>
      <header>
        <h1>Header</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
      <main >
        <h1>Main</h1>
      </main>

      <section>
        <h2>Section</h2>
      </section>

      <article>
        <h3>Article</h3>
      </article>

      <aside>

        <h4>Aside</h4>
      </aside>
      <canvas>
        <h5>Canvas</h5>
      </canvas>
      <footer>
        <h6>Footer</h6>
      </footer>
      </html>
    </>

  )


}

export default App
