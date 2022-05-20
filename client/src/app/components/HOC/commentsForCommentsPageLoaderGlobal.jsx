import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// Components
import withLoading from "./withLoading"
// Auxiliary
import { getStatusGlobalLoaderForCommentsPage, fetchDataCommentsForCommentsPage } from "../../store/commentsForCommentsPage"

const CommentsForCommentsPageLoaderGlobal = ({ children, configRequest, groupRequest }) => {
   // AUXILIARY
   const { idGame } = useParams()
   // REDUX
   const dispatch = useDispatch()
   const statusLoaderGlobal = useSelector(getStatusGlobalLoaderForCommentsPage())
   useEffect(() => {
      if (statusLoaderGlobal) {
         dispatch(fetchDataCommentsForCommentsPage(configRequest, "first", groupRequest, idGame))
         return
      }
   }, [])
   const ChildrenWithLoading = withLoading(children, statusLoaderGlobal)
   return <ChildrenWithLoading />
}

CommentsForCommentsPageLoaderGlobal.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
   ]).isRequired,
   configRequest: PropTypes.object.isRequired,
   groupRequest: PropTypes.number.isRequired
}

export default CommentsForCommentsPageLoaderGlobal
