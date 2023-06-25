import { useCallback, useEffect, useId, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sections, {
  SectionType,
} from '../../../../components/admin/Exams/Sections';
import { ExamSection, Skills, skills } from '../../../../interfaces/Exam';
import { useGetExamByIdQuery } from '../../../../store/queries/exams';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';

function EditExam() {
  const { id } = useParams();
  const { data: exam, isLoading, isError } = useGetExamByIdQuery(id || '');
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !exam) {
    return <p>Error</p>;
  }

  const sections = Object.keys(exam.sections)
    .filter((key) => {
      return exam.sections[key as keyof ExamSection]?.id;
    })
    .map((key) => ({
      name: (key[0].toUpperCase() + key.slice(1)) as SectionType,
      id: exam.sections[key as keyof ExamSection]?.id as string,
    }));
  return (
    <div>
      <div className="flex gap-6 mb-4 items-center">
        <Link to="/admin/exams" className="text-blue-800 text-3xl">
          <ArrowLeft />
        </Link>
        <h1 className="text-3xl ">{exam.title}</h1>
      </div>
      <Sections sections={sections} />
    </div>
  );
}

export default EditExam;
