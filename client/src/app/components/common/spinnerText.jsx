import React from "react"
import PropTypes from "prop-types"

const SpinnerText = ({ classesParent }) => {
   return(
      <div className={`${classesParent}__spinner-text-wrap text-spinner`}>
         <p className="text-spinner__message">Ожидание загрузки...</p>
      </div>
   )
}

SpinnerText.propTypes = {
   classesParent: PropTypes.string.isRequired
}

export default SpinnerText
