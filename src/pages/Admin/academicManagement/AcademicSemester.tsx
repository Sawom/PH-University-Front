import { useGetAllSemestersQuery } from "../../../redux/Features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1> This is AcademicSemester component </h1>
    </div>
  );
};

export default AcademicSemester;
