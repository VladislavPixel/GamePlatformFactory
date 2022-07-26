import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"

// Auxiliary
import { getStatusLoaderUsersTop100Data, fetchDataUsersTop100 } from "../../store/usersTop100Data"
// Components
import withLoading from "./withLoading"

const UsersTop100DataLoaderGlobal = ({ children }) => {
	// REDUX
	const dispatch = useDispatch()
	const statusLoader = useSelector(getStatusLoaderUsersTop100Data())
	// HANDLERS
	useEffect(() => {
		if (statusLoader) dispatch(fetchDataUsersTop100())
	}, [statusLoader, dispatch])
	// AUXILIARY
	const ChildrenWithLoading = withLoading(children, statusLoader)
	return <ChildrenWithLoading />
}

UsersTop100DataLoaderGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default UsersTop100DataLoaderGlobal
