export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Dr. Smith",
    description: "Introduction to React fundamentals.",
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    instructor: "Prof. Johnson",
    description: "Deep dive into TypeScript features.",
  },
  {
    id: 3,
    title: "Web Security",
    instructor: "Dr. Brown",
    description: "Understanding modern web security.",
  },
  {
    id: 4,
    title: "Data Visualization",
    instructor: "Prof. Davis",
    description: "Building dashboards and charts.",
  },
];

export function getCourseById(id: number) {
  return courses.find((c) => c.id === id);
}