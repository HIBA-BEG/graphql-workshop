import { CreateMovie } from './components/CreateMovie'
import { MovieList } from './components/MovieList'
// import './App.css'

function App() {

  return (
    <>
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Movie Management</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
        <CreateMovie />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Movie List</h2>
        <MovieList />
      </div>
    </div>
    </>
  )
}

export default App
