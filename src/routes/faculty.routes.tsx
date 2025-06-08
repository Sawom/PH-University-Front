import FacultyDashboard from "../pages/Faculty/FacultyDashboard";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'My Courses',
    path: 'courses',
    element: <MyCourses />,
  },
  {
    path: 'courses/:registerSemesterId/:courseId',
    element: <MyStudents />,
  },
];