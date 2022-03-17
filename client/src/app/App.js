import React from "react"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { Routes, Route } from "react-router-dom"
import Home from "./layots/home"
import AboutUs from "./layots/aboutUs"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutUs" element={<AboutUs />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
