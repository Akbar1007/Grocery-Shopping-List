// import ListItemOne from './ListItemOne'
// import ListItemTwo from './ListItemTwo'
import ShoppingListItem from './ShoppingListItem'

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	const style = {
		marginTop: '120px',
		color: '#ffd700',
		display: 'flex',
		justifyContent: 'center',
	}
	return (
		<div className='shopping-list'>
			{data.length ? (
				data.map(item => (
					<ShoppingListItem
						item={item}
						key={item.id}
						onDeleteItem={() => onDelete(item.id)}
						onToggleActiveItem={() => onToggleActive(item.id)}
					/>
				))
			) : (
				<div className='content'>
					<h1 style={style}>No products yet.</h1>
				</div>
			)}
		</div>
	)
}

export default ShoppingList
