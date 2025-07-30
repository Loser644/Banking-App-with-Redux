import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import MyApp from './component/myApp'
import { Provider } from 'react-redux'
import myStore from './lib/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <MyApp/>
    </BrowserRouter>
    </Provider>
    {/* <ToastContainer
                      position="bottom-right"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable={true}
                      pauseOnHover
                      theme="dark"
                      toastClassName="custom-toast"
                    /> */}
  </StrictMode>,
)
