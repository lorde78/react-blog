import { useEffect, useState } from "react";
import useForm from "../hook/useForm";
import Article from "./Article";

export default function PostList() {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5555/getpost.php", {
			method: "GET",
			mode: "cors",
		})
			.then((resp) => resp.json())
			.then((respJSON) => setPostList(respJSON))
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<>
			{postList
				? postList.map((post, e) => {
						return (
							<Article
								postTitle={post.title}
								postContent={post.content}
								userName={post.username}
								key={e}
							/>
						);
				  })
				: ""}
		</>
	);
}
