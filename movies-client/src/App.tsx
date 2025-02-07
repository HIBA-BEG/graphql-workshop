import { CreateMovie } from './components/CreateMovie'
import { MovieList } from './components/MovieList'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <h1>Movie Management</h1>
      <div className="mb-8">
        {/* <h2>Add New Movie</h2> */}
        <CreateMovie />
      </div>
      <div>
        <h2 className="title-movies">Movies List</h2>
        <MovieList />
      </div>
    </div>
  </>
  )
}

export default App
