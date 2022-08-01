import { useState ,Suspense} from 'react'
import RoutesConfig from "./routes"
import Loading from './components/Loading'
function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <RoutesConfig />
      </Suspense>
    </div>
  )
}

export default App
