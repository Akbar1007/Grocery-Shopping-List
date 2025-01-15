import Filter from './Filter'
import Heading from './Heading'
import ShoppingAddForm from './ShoppingAddForm'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='card'>
					<Heading />
					<ShoppingAddForm />
					<ShoppingList />
					<Filter />
				</div>
				<img src='/public/earth.svg' alt='earth' />
			</div>
		</div>
	)
}

export default App
