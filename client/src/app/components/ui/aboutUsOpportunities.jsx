import React from "react"
import configAuxiliary from "../../configAuxiliary.json"
import AboutUsOpportunitiesRow from "./aboutUsOpportunitiesRow"

const AboutUsOpportunities = () => {
	return (
		<div className="about-us-block__opportunities opportunities-about-us">
			<div className="opportunities-about-us__container _container">
				{configAuxiliary.aboutUsOpportunities.map((element, index) => <AboutUsOpportunitiesRow key={index} {...element} indexElement={index + 1} />)}
			</div>
		</div>
	)
}

export default AboutUsOpportunities
