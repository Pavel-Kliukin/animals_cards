import Card from '../UI/Card.js'
import Search from '../UI/Search.js'
import './Subtype.css';


const Subtype = (props) => {
  const searchFilter = props.data.filter(creature => {
    return creature.name.includes(props.searchInput)
  })

  return (
    <div className='subtypes'>
      <div className='subtypesHeader'>
        <h1>{props.type}</h1>
        <Search searchHandler={props.searchHandler} />
      </div>
      <div className='subtypesOutput'>
        {searchFilter.map(item => <Card // we replaces props.data.map() with searchFilter.map()
          key={item.name}
          name={item.name}
          likes={item.likes}
          removeCard={() => props.removeHandler(item.name, props.type)} //we use arrow function to pass item.name up to App.js (we binding the data)
          // if don't need to pass the name of clciked card we can use just this:
          // removeCard={() => props.removeHandler(item.name)}
          addLikes={() => props.LikesHandler(item.name, '+', props.type)}
          removeLikes={() => props.LikesHandler(item.name, '-', props.type)} />)
        }
      </div>
    </div >
  );
};

export default Subtype