import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Counter from './Component/counter'
import Destination from './Component/DestinationList'
import DestinationFact from './Component/DestinationFact'
import ResetApp from './Component/ResetApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Provider store={store}>
    <div className="d-flex min-vh-100 flex-column">
      <Header/>
      <main className="flex-grow-1 row">
        <div className="col-12">
          <ResetApp/>
          <Counter />
           <div className="p-3 m-3 border text-center">
          <h4 className="text-success pb-4">
            Destination List
          </h4>
          <Destination/>
          <DestinationFact/>
        </div>
        </div>
        </main>
   <Footer/>
    </div>
  </Provider> 
  </StrictMode>,
)
