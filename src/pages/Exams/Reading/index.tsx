import { useParams } from 'react-router-dom';
import LoadingAnimate from '../../../components/common/LoadingAnimate';
import ReadingPart from '../../../components/exam/ReadingPart';
import { useGetPartIdsBySectionIdQuery } from '../../../store/queries/exams';
import NavigationTest from '../commonComponent/navigationTest';

const Reading = () => {
  const { sectionId = '', partId: partIdParam } = useParams();
  const {
    data: sectionData,
    isLoading,
    isError,
  } = useGetPartIdsBySectionIdQuery({
    section: 'Reading',
    sectionId,
  });

  if (isLoading) {
    return <LoadingAnimate />;
  }

  if (isError || !sectionData) {
    return <p>Error</p>;
  }

  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]">READING TEST EXAM</p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="flex w-[90%] mx-auto py-[2rem] gap-4 border-b-2 ">
        {/* <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12  bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
          <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa] h-[40rem] overflow-y-auto">
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.title}
            </p>
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.description}
            </p>
            <p className="text-[red] font-bold italic">
              Note : You should spend about 20 minutes on this task. Write about
              the following topic:
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.questions[0].description || '',
              }}
            />
          </div>
          <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem] max-h-[40rem] overflow-y-auto">
            <div className="font-bold my-[1.5rem]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.questions[0].title || '',
                }}
              />
            </div>
            <div className="flex flex-col gap-[1rem] p-[1rem]">
              {data?.questions[0].answers.map((item, index: number) => {
                return (
                  <div className="flex gap-[1rem]" key={index}>
                    <label
                      className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                      htmlFor={`${index + 1}-${index}`}
                    >
                      {index + 1}
                    </label>
                    <input
                      className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                      key={index}
                      type="text"
                      value={
                        answersArr?.questions
                          .find((question) => question?.id === partId)
                          ?.answers.find((answer) => answer?.id === item.id)
                          ?.value || ''
                      }
                      onChange={(e) => handleGetValue(e, item)}
                      name={`${index + 1}-${index}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className="flex-1">{partIdParam && <ReadingPart />}</div>
        {sectionData && (
          <NavigationTest
          // handleTask={handleTask}
          // handleIndex={handleIndex}
          // defaultPartId={partId}
          />
        )}
      </div>
    </div>
  );
};
export default Reading;
