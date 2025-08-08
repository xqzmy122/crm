import { Provider } from 'react-redux'
import { store } from './redux/store'
import Routing from './routes/Routes'
import './App.css'


function App() {

  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
}

export default App
