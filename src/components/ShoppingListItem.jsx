const ShoppingListItem = ({ item }) => {
	return (
		<div key={item.id} className='list-item'>
			<div className='item-info'>
				<span>{item.size}</span>
				<p>{item.title}</p>
			</div>
			<div className='item-actions'>
				<span className='check'>&#10003;</span>
				<span className='times'>&times;</span>
			</div>
		</div>
	)
}

export default ShoppingListItem
