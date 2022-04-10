import React from "react"

// Components
import AboutUsHead from "../../ui/aboutUsHead"
import AboutUsOpportunities from "../../ui/aboutUsOpportunities"
import AboutUsActivity from "../../ui/aboutUsActivity"
import AboutUsValues from "../../ui/aboutUsValues"
import AboutUsGames from "../../ui/aboutUsGames"

const AboutUsPage = () => {
	return (
		<div className="block-content__about-us about-us-block">
			<AboutUsHead />
			<AboutUsOpportunities />
			<AboutUsValues />
			{/* <AboutUsActivity /> */}
			{/* <AboutUsGames /> */}
		</div>
	)
}

export default AboutUsPage
