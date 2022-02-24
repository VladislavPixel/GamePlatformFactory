import React from "react"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/pages/homePage"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
