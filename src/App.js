import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./component/Posts";
import Pagination from "./component/Pagination";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPosts(data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const idxOfLast = currentPage * postsPerPage;
	const idxOfFirst = idxOfLast - postsPerPage;
	const currentPosts = posts.slice(idxOfFirst, idxOfLast);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="container mt-5">
			<h1 className="text-primary mb-3">My Blog</h1>
			{loading ? (
				<h2>loading...</h2>
			) : (
				<>
					<Posts posts={currentPosts} />
					<Pagination
						postsPerPage={postsPerPage}
						totalPosts={posts.length}
						paginate={paginate}
					/>
				</>
			)}
		</div>
	);
}

export default App;
