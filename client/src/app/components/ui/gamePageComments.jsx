import React from "react"
import PropTypes from "prop-types"

// Components
import AddComment from "../common/addComment"
import CommentsForGame from "../common/commentsForGame"

const GamePageComments = ({ title }) => {
	return (
		<div className="game-block__comments comments-game-block">
			<div className="comments-game-block__container _container">
				<h2 className="comments-game-block__title">{title}</h2>
				<AddComment parentClass="comments-game-block" />
				<div className="comments-game-block__head-section-comments">
					<h3 className="comments-game-block__comments-title">Ваша реакция/эмоции очень важны для сообщества любителей игр платформы Factory.inc. Вы задаете тренды и формируете комьюнити конкретной игры.</h3>
					<p className="comments-game-block__text-section-comments">Перед прочтением комментариев помните, что большинство людей при решении вопроса "брать" или "не брать" игру отталкивается как раз от ваших отзывов о продукте. Поэтому охотно комментируйте игры и выставляйте реакции на обзоры других пользователей. Самую важную реакцию на комментарий, которую вы можете оставить - это "Согласен" или "Несогласен".</p>
				</div>
				<CommentsForGame />
			</div>
		</div>
	)
}

GamePageComments.propTypes = {
	title: PropTypes.string.isRequired
}

export default GamePageComments
