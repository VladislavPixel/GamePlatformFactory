import React from "react"
import { Routes, Route } from "react-router-dom"

// Components
import GamesMiddleLoaderGlobal from "./components/HOC/gamesMiddleLoaderGlobal"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import Home from "./layots/home"
import AboutUs from "./layots/aboutUs"
import Store from "./layots/store"
import NotFound from "./layots/notFound"
import Authorization from "./layots/authorization"
import Registration from "./layots/registration"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<GamesMiddleLoaderGlobal>
					<Routes>
						<Route path="/aboutUs" element={<AboutUs />} />
						<Route path="/store" element={<Store />} />
						<Route path="/signUp" element={<Registration />} />
						<Route path="/signIn" element={<Authorization />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</GamesMiddleLoaderGlobal>
			</main>
			<Footer />
		</div>
	)
}

export default App
