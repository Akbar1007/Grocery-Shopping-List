import { Component } from 'react'
import Filter from './Filter'
import Heading from './Heading'
import ShoppingAddForm from './ShoppingAddForm'
import ShoppingList from './ShoppingList'
import { arr } from '/src/constants/index'
// push the changes
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: arr,
		}
	}
	render() {
		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Heading />
						<ShoppingAddForm />
						<ShoppingList data={arr} />
						<Filter />
					</div>
					<img src='/public/earth.svg' alt='earth' />
				</div>
			</div>
		)
	}
}

export default App
