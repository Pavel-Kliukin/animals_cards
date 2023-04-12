import Card from '../UI/Card.js'
import Search from '../UI/Search.js'
import './Birds.css';


const Birds = (props) => {
  const searchFilter = props.data.filter(bird => {
    return bird.name.includes(props.searchInput)
  })

  return (
    <div className='birds'>
      <div className='birdsHeader'>
        <h1>Birds</h1>
        <Search searchHandler={props.searchHandler} />
      </div>
      <div className='birdsOutput'>
        {searchFilter.map(item => <Card // we replaces props.data.map() with searchFilter.map()
          key={item.name}
          name={item.name}
          likes={item.likes}
          removeCard={() => props.removeHandlerB(item.name)} //we use arrow function to pass item.name up to App.js (we binding the data)
          // if don't need to pass the name of clciked card we can use just this:
          // removeCard={() => props.removeHandler(item.name)}
          addLikes={() => props.LikesHandlerB(item.name, '+')}
          removeLikes={() => props.LikesHandlerB(item.name, '-')} />)
        }
      </div>
    </div >
  );
};

export default Birds