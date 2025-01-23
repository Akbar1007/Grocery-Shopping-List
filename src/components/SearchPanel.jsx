import { Component } from 'react'
class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
		}
	}
	change = e => {
		const value = e.target.value
		this.setState({ search: value })
		this.props.updateSearch(value)
	}

	render() {
		const { search } = this.state
		return (
			<input
				type='text'
				className='search'
				placeholder='Search...'
				value={search}
				onChange={this.change}
			/>
		)
	}
}

export default SearchPanel
