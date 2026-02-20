import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "../data";
import { getCourseById } from "../data";

export async function loader({ params }: { params: any }) {
  const course = getCourseById(Number(params.id));
  if (!course) throw new Error("Course not found");
  return { course };
}

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route ID parameter: {id}</p>
    </div>
  );
}

export default CourseDetail;
