import React from "react";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className="page-item">
						<a
							href="!#"
							onClick={() => paginate(pageNumber)}
							className="page-link"
						>
							{pageNumber}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
