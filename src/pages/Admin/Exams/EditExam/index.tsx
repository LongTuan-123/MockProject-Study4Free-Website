import { lazy, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import { SectionType } from '../../../../components/admin/Exams/Sections';
import { ExamSection } from '../../../../interfaces/Exam';
import { useGetExamByIdQuery } from '../../../../store/queries/exams';
import { useAppDispatch } from '../../../../hooks/redux';
import { updateExamEditInfo } from '../../../../store/slices/examSlice';
import IExamSection from '../../../../interfaces/ExamSection';

const Sections = lazy(
  () => import('../../../../components/admin/Exams/Sections')
);

function EditExam() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data: exam, isLoading, isError } = useGetExamByIdQuery(id || '');

  useEffect(() => {
    if (exam?.id) {
      dispatch(
        updateExamEditInfo({
          examId: exam.id,
        })
      );
    }
  }, [exam]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !exam) {
    return <p>Error</p>;
  }

  const sections = Object.keys(exam.sections)
    .filter((key) => {
      return (exam.sections[key as keyof ExamSection] as IExamSection)?.id;
    })
    .map((key) => ({
      name: (key[0].toUpperCase() + key.slice(1)) as SectionType,
      id: (exam.sections[key as keyof ExamSection] as IExamSection)
        ?.id as string,
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
