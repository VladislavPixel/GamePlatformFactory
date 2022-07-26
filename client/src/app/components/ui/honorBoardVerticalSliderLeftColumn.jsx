import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Auxiliary
import getDateInStringFormat from "../../utils/getDateInStringFormat"

const HonorBoardVerticalSliderLeftColumn = ({ _id, nickName, avatar, regDateOnPlatform, rank, hisReviews, hisComments, rankPoints }) => {
   // Auxiliary
   const { color, text, title } = rank
   return (
      <div className="slider-board-honor__column slider-board-honor__column_first column-first-slider-board">
         <span className="column-first-slider-board__element1"></span>
         <span className="column-first-slider-board__element2"></span>
         <div className="column-first-slider-board__head">
            <h3 className="column-first-slider-board__title">Информационная карточка</h3>
            <img title="Кубок*" className="column-first-slider-board__icon" src="/images/icons/cup.svg" alt="Иконка кубка в руке" />
         </div>
         <div className="column-first-slider-board__row">
            <div className="column-first-slider-board__column">
               <Link className="column-first-slider-board__container-avatar" to={`/profile/${_id}`} title={`Перейти на страницу пользователя --> ${nickName}`}>
                  <img alt={`Аватарка профиля ${nickName}`} className="column-first-slider-board__avatar" src={`/images/users/avatar/${avatar}`} />
               </Link>
               <Link className="column-first-slider-board__link-nick" to={`/profile/${_id}`} title={`Перейти на страницу пользователя --> ${nickName}`}>{nickName}</Link>
            </div>
            <div className="column-first-slider-board__column">
               <div className="column-first-slider-board__content">
                  <p className="column-first-slider-board__date-reg">Был замечен на платформе с <span>{getDateInStringFormat(regDateOnPlatform)}</span></p>
                  <Link className="column-first-slider-board__link-profile" to={`/profile/${_id}`} title={`Нажмите для перехода на страницу --> ${nickName}`}>Ссылка на profile пользователя</Link>
                  <p style={{ color }} className="column-first-slider-board__rank-title">{title}</p>
                  <p className="column-first-slider-board__lvl">{text}</p>
                  <div className="column-first-slider-board__statistics-block">
                     <h4 className="column-first-slider-board__title-statistics">Основная активность пользователя</h4>
                     <p className="column-first-slider-board__comments">Количество оставленных комментариев на платформе: <span>{hisComments.length}</span></p>
                     <p className="column-first-slider-board__reviews">Рецензии: <span>{hisReviews.length}</span></p>
                  </div>
               </div>
               <div className="column-first-slider-board__container-points">
                  <div title="Заработанные очки активности пользователя. Именно по ним формируется рейтинг." className="column-first-slider-board__points">Ресурсов: <span>{rankPoints}</span></div>
               </div>
            </div>
         </div>
      </div>
   )
}

HonorBoardVerticalSliderLeftColumn.propTypes = {
   _id: PropTypes.string.isRequired,
   nickName: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   regDateOnPlatform: PropTypes.number.isRequired,
   rank: PropTypes.object.isRequired,
   hisReviews: PropTypes.array.isRequired,
   hisComments: PropTypes.array.isRequired,
   rankPoints: PropTypes.number.isRequired
}

export default HonorBoardVerticalSliderLeftColumn
