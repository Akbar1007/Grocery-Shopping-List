const Information = () => {
	const styleInformation = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	}

	const styleSpan = {
		width: 50,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 25,
		color: 'black',
		padding: 5,
		borderRadius: 100,
	}

	return (
		<div style={styleInformation} className='information'>
			<h1>Shopping List</h1>
			<span style={styleSpan}>2</span>
		</div>
	)
}

export default Information
