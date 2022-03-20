import React from "react"
import AboutUsHead from "../../ui/aboutUsHead"
import AboutUsOpportunities from "../../ui/aboutUsOpportunities"
import AboutUsActivity from "../../ui/aboutUsActivity"
import AboutUsValues from "../../ui/aboutUsValues"

const AboutUsPage = () => {
	return (
		<div className="block-content__about-us about-us-block">
			<AboutUsHead />
			<AboutUsOpportunities />
			<AboutUsValues />
			<AboutUsActivity />
		</div>
	)
}

export default AboutUsPage
