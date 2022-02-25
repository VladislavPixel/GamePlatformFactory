import React from "react"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import { Routes, Route } from "react-router-dom"
import Home from "./layots/home"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
