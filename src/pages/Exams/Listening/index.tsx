import { useState } from 'react';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import NavigationTest from '../commonComponent/navigationTest';

const Listening = () => {
  const [index, setIndex] = useState<number>(0);
  const [partId, setPartId] = useState<string>('');
  const { data, isSuccess, error, isLoading } = useGetPartByIdQuery({
    section: 'Listening',
    partId: partId,
  });
  console.log(data?.questions[0].audio);

  const handleTask = (task: string) => {
    setPartId(task);
  };

  const handleIndex = (index: number) => {
    setIndex(index);
  };
  return (
    <>
      <div className="bg-[#f8f9fa]">
        <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
          <p className="font-bold text-[1.5rem]">LISTENING TEST EXAM</p>
          <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
            Quit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 w-[90%] mx-auto py-[2rem] gap-[1rem] border-b-2 ">
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12  bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
            <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa] h-[40rem] overflow-y-auto">
              <p className="tex-[1rem] font-bold uppercase my-[1rem]">
                {data?.title}
              </p>
              <audio
                className="my-[2rem]"
                controls
                src={data?.questions[0].audio as string}
              ></audio>
              <p className="text-[red] font-bold italic">
                Note : You should spend about 20 minutes on this task. Write
                about the following topic:
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.questions[0].title || '',
                }}
              />
            </div>
            <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem] h-[40rem] overflow-y-auto">
              <div className="font-bold my-[1.5rem]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.questions[0].title || '',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 ">
            <NavigationTest
              handleTask={handleTask}
              handleIndex={handleIndex}
              defaultPartId={partId}
              myAnswer={''}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Listening;
