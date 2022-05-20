import React from "react"
import PropTypes from "prop-types"

const ColumnPanelFilterForCommentsPage = ({ title, dataModal, onShow, indexColumn, targetColumn, columnKey, onUpdateFilter, selectedTimeFilter, selectedIndicatorFilter, selectedStatusFilter }) => {
   // AUXILIARY
   const isActive = targetColumn === indexColumn
   let comparedElement
   switch (columnKey) {
      case "timeFilter":
         comparedElement = selectedTimeFilter
      break
      case "indicatorFilter":
         comparedElement = selectedIndicatorFilter
      break
      case "statusFilter":
         comparedElement = selectedStatusFilter
      break
      default:
         comparedElement = {}
      break
   }
   return (
      <div className={`filters-panel-comments__column${isActive ? " active" : ""}`}>
         <button type="button" onClick={() => onShow(indexColumn)} className="filters-panel-comments__btn-filter">{title}</button>
         <ul className={`filters-panel-comments__list-modal${isActive ? " active" : ""}`}>
            {dataModal.map(element => {
               const { _id, title } = element
               return (
                  <li key={_id}>
                     <button onClick={() => onUpdateFilter({ columnKey, ...element })} className={`filters-panel-comments__btn-modal${comparedElement?._id === _id ? " active" : ""}`} type="button">{title}</button>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

ColumnPanelFilterForCommentsPage.propTypes = {
   title: PropTypes.string.isRequired,
   dataModal: PropTypes.array.isRequired,
   indexColumn: PropTypes.number.isRequired,
   targetColumn: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf([null])
	]),
   columnKey: PropTypes.string.isRequired,
   onUpdateFilter: PropTypes.func.isRequired,
   selectedTimeFilter: PropTypes.object.isRequired,
	selectedIndicatorFilter: PropTypes.object.isRequired,
	selectedStatusFilter: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.oneOf([null])
	])
}

export default ColumnPanelFilterForCommentsPage
