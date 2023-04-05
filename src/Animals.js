import Card from './Card.js'
import Search from './Search.js'
import './Animals.css';


const Animals = (props) => {
  const searchFilter = props.data.filter(animal => {
    return animal.name.includes(props.searchInput)
  })

  return (
    <div className='animals'>
      <Search searchHandler={props.searchHandler} />
      {searchFilter.map(item => <Card // we replaces props.data.map() with searchFilter.map()
        key={item.name}
        name={item.name}
        likes={item.likes}
        removeCard={() => props.removeHandler(item.name)} //we use arrow function to pass item.name up to App.js (we binding the data)
        // if don't need to pass the name of clciked card we can use just this:
        // removeCard={() => props.removeHandler(item.name)}
        addLikes={() => props.LikesHandler(item.name, '+')}
        removeLikes={() => props.LikesHandler(item.name, '-')} />)}
    </div >
  );
};

export default Animals