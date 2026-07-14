import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Counter from './Component/counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Provider store={store}>
    <div className="d-flex min-vh-100 flex-column">
      <Header/>
      <main className="flex-grow-1 row">
        <div className="col-12">
          <Counter />
        </div>
        </main>
   <Footer/>
    </div>
  </Provider> 
  </StrictMode>,
)
