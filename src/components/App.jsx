import { Component } from 'react'
import { arr } from '../constants/index.js'
import Filter from './Filter'
import Heading from './Heading'
import ShoppingAddForm from './ShoppingAddForm'
import ShoppingList from './ShoppingList'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: arr,
		}
	}
	onDelete = id => {
		const newArr = this.state.data.filter(item => item.id !== id)
		console.log(newArr)
		this.setState({ data: newArr })
	}
	onToggleActive = id => {
		const newArr = this.state.data.map(item => {
			if (item.id === id) {
				return { ...item, active: !item.active }
			}

			return item
		})
		this.setState({
			data: newArr,
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className='app'>
				<div className='wrapper'>
					<div className='card'>
						<Heading />
						<ShoppingAddForm />
						<ShoppingList
							data={data}
							onDelete={this.onDelete}
							onToggleActive={this.onToggleActive}
						/>
						<Filter />
					</div>
					<img src='/public/earth.svg' alt='earth' />
				</div>
			</div>
		)
	}
}

export default App
