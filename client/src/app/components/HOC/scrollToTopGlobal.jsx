import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

const ScrollToTopGlobal = ({ children }) => {
	const location = useLocation()
	if (location.state?.from) window.scrollTo(0, 0)
	return children
}

ScrollToTopGlobal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
}

export default ScrollToTopGlobal