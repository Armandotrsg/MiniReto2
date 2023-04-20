import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

import { MovieCard } from './components/MovieCard';
import prueba from './assets/prueba.jpg'

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: "lorem ipsum",
    image: prueba,
    rate: 5
  },
  {
    id: 2,
    title: 'The Godfather',
    description: "lorem ipsum",
    image: 'https://picsum.photos/id/237/200/300',
    rating: 4
  },
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: "lorem ipsum",
    image: 'https://picsum.photos/id/237/200/300',
    rating: 5
  },
  {
    id: 2,
    title: 'The Godfather',
    description: "lorem ipsum",
    image: 'https://picsum.photos/id/237/200/300',
    rating: 4
  },
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: "lorem ipsum",
    image: 'https://picsum.photos/id/237/200/300',
    rating: 5
  },
  {
    id: 2,
    title: 'The Godfather',
    description: "lorem ipsum",
    posterUrl: 'https://picsum.photos/id/237/200/300',
    rating: 4
  },
]

function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-middle gap-5 mt-5">
          {movies.map(movie => <MovieCard {...movie} />)}
        </div>
      </div>
    </div>
  )
}

export default App;
