// import ListItemOne from './ListItemOne'
// import ListItemTwo from './ListItemTwo'
import ShoppingListItem from './ShoppingListItem'

const ShoppingList = ({ data }) => {
	return (
		<div className='shopping-list'>
			{data.map(item => (
				<ShoppingListItem item={item} key={item.id} />
			))}

			{/* <ListItemOne />
			<ListItemTwo /> */}
		</div>
	)
}

export default ShoppingList
