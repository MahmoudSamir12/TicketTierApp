import GlobalRouter from './router/router'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <GlobalRouter />
    </div>
  )
}

export default App