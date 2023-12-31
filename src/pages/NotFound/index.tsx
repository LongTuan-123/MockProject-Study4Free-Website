import { NavLink } from "react-router-dom";

interface INotFound {
  title: string;
  subTitle: string;
  descript: string;
}

function NotFoundPage(props: INotFound) {
  return (
    <section className="flex flex-col h-screen w-full relative py-[3rem]">
      <div className="flex flex-col h-full justify-center items-center" >
        <div className="text-center">
          <div className="min-h-[400px] bg-center bg-no-repeat" style={{
            backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)"
          }}>
            <h2 className="text-8xl text-sky-400">{props.title}</h2>
          </div>
          <div className="">
            <h2 className="text-6xl mb-5">
              {props.subTitle}
            </h2>
            <p>{props.descript}</p>
            <NavLink to="/" className="btn text-white bg-sky-400 border-none  py-3 px-5 my-5 hover:text-black">Go to Home</NavLink>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NotFoundPage;
