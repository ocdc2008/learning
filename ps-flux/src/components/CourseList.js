import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
	//This function needs to be sent an array of courses through props, and it returns a table
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Author ID</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{props.courses.map((course) => {
						//.map is an Array base method that iterates over the array
						return (
							//Would usually use the primary key from the database
							<tr key={course.id}>
								<td>{course.title}</td>
								<td>{course.authorId}</td>
								<td>{course.category}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

//This component expects an array to be inserted through props
//Control the scheme of the array inserted using PropTypes
//This only validates in the Development environment
CourseList.propTypes = {
	courses: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			authorId: PropTypes.number.isRequired,
			category: PropTypes.string.isRequired,
		})
	).isRequired,
};
CourseList.defaultProps = {
	courses: [],
};

export default CourseList;
