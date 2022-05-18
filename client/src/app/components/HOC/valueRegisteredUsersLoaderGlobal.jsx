import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"

// Auxiliary
import { getStatusLoadingValueRegisteredUsers, fetchDataValueRegisteredUsers } from "../../store/users"
// Components
import withLoading from "./withLoading"

const ValueRegisteredUsersLoaderGlobal = ({ children }) => {
   // REDUX
   const dispatch = useDispatch()
   const statusLoaderRegisteredUsers = useSelector(getStatusLoadingValueRegisteredUsers())
   useEffect(() => {
      if (statusLoaderRegisteredUsers) dispatch(fetchDataValueRegisteredUsers())
   }, [])
   // AUXILIARY
   const ChildrenWithLoading = withLoading(children, statusLoaderRegisteredUsers)
   return <ChildrenWithLoading />
}

ValueRegisteredUsersLoaderGlobal.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}

export default ValueRegisteredUsersLoaderGlobal
