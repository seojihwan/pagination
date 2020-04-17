import React from "react";
const Posts = ({ posts }) => {
	return (
		<ul className="list-group mb-4">
			{posts.map((post, id) => (
				<li key={id} className="list-group-item">
					{post.title}
				</li>
			))}
		</ul>
	);
};

export default Posts;
