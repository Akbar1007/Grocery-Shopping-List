import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { arr } from '../constants'
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

	onAdd = item => {
		const { title, number } = item
		const newData = { title, size: number, active: false, id: uuidv4() }
		const newArr = [...this.state.data, newData]
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
						<ShoppingAddForm onAdd={this.onAdd} />
						<ShoppingList
							data={data}
							onDelete={this.onDelete}
							onToggleActive={this.onToggleActive}
						/>
						<Filter />
					</div>
					<img src='earth.svg' alt='earth' />
				</div>
			</div>
		)
	}
}

export default App
