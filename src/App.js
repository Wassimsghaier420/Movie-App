import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import Cover0 from './trainspotting.jpg';
import Cover2 from './shawshank.jpg';
import Cover3 from './historyx.jpg';
import StarRatingComponent from 'react-star-rating-component';


const tablist = [
  { id: 'movie1', rating: '2', CardImg: {Cover0}, title: 'Trainspotting' }, 
  { id: 'movie2', rating: '3', CardImg: {Cover2}, title: 'Shawshank Redemption ' },
   { id: 'movie3', rating: '5', CardImg: {Cover3}, title: 'American History X' }
  ]


class App  extends Component {
  constructor(props){ 
  super(props); 
  this.state={ 
    movies:tablist,
    titleFilter:'',
    minRating: 2
   
  }
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({minRating: nextValue});
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className='row name-rating'>
         <Movies 
         onChange={(newtitleFilter)=>this.setState({titleFilter:newtitleFilter})} 
         value={this.state.titleFilter}/>
         <StarRatingComponent 
                    name="rate1" 
                    starCount={5} 
                    value={this.state.minRating}
                    onStarClick={this.onStarClick.bind(this)}/>
      
         </div> 
          
      </div>
    </div>)}
}

export default App;
