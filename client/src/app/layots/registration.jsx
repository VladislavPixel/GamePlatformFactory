import React from "react"

// Components
import RegistrationPage from "../components/pages/registrationPage"
import CountriesLoaderGlobal from "../components/HOC/countriesLoaderGlobal"

const Registration = () => {
	return (
		<CountriesLoaderGlobal>
			<RegistrationPage />
		</CountriesLoaderGlobal>
	)
}

export default Registration
