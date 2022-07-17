import React from "react"

// Components
import AboutUsOpportunitiesRow from "./aboutUsOpportunitiesRow"
// Auxiliary
import aboutUsOpportunities from "../../configAuxiliary/aboutUsOpportunities.json"

const AboutUsOpportunities = () => {
	return (
		<div className="about-us-block__opportunities opportunities-about-us">
			<div className="opportunities-about-us__container _container">
				{aboutUsOpportunities.map((element, index) => <AboutUsOpportunitiesRow key={index} {...element} indexElement={index + 1} />)}
			</div>
		</div>
	)
}

export default AboutUsOpportunities
