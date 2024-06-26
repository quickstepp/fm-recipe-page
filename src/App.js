import "./App.css";
import Image from "./components/Image";
import Introduction from "./components/Introduction";
import Preparation from "./components/Preparation";
import Ingredients from "./components/Ingredients";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="recipe-container">
					<Image />
					<Introduction />
					<Preparation />
					<Ingredients />
				</div>
			</header>
		</div>
	);
}

export default App;
