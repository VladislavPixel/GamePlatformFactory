import React from "react"
import configAuxiliary from "../../configAuxiliary.json"
import { Link } from "react-router-dom"

const AboutUsOpportunities = () => {
	return (
		<div className="about-us-block__opportunities opportunities-about-us">
			<div className="opportunities-about-us__container _container">
				{configAuxiliary.aboutUsOpportunities.map((element, index) => {
					return (
						<div key={index} className="opportunities-about-us__row">
							<div className="opportunities-about-us__column">
								<div className="opportunities-about-us__info">
									<h2 className="opportunities-about-us__title">{element.title}</h2>
									<p className="opportunities-about-us__message">{element.text}</p>
									<Link className="opportunities-about-us__link" to="/">{element.link}</Link>
								</div>
							</div>
							<div className="opportunities-about-us__column">
								<div className="opportunities-about-us__poster-block">
									<img src={`./images/icons/${element.icon}`} alt={element.alt} />
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default AboutUsOpportunities
