import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi"; //Calls our mockAPI and it returns a list of courses
import CourseList from "./CourseList";

function CoursesPage() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		//This is the refresh statement that goes and does things when the CoursesPage function is called
		//Call the API to get the raw data, and set the state item called courses equal to the array
		getCourses().then((_courses) => setCourses(_courses));
	}, []); //List of values that the userEffect function should only pay attention to - Blank to only run once

	return (
		<>
			<h2>Courses</h2>
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
