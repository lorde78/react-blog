import "./App.css";
import FormCreateUser from "./components/FormCreateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import CreatePost from "./components/CreatePost";
import FormLoginUser from "./components/FormLoginUser";
import PostList from "./components/PostList";

function App() {

	return (
		<div className="App">
			<FormCreateUser></FormCreateUser>
			<FormLoginUser></FormLoginUser>
			<CreatePost></CreatePost>
			<PostList></PostList>
		</div>
	);
}

export default App;
