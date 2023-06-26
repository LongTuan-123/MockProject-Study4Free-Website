const Footer = () => {
  return (
    <div className="bg-[#273044] py-[2rem]">
      <div className="w-[80%] px-2 sm:px-0 hx-auto mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] text-[#fff]">
        <div className="">
          <div className="text-[1.25rem] font-bold uppercase">About</div>
          <p>
            <span className="text-[#2966e4]"> Study4Free</span> is Education
            WordPress theme featured by Learning Management System (LMS) for
            online education. Developed by{' '}
            <span className="text-[#2966e4]">
              LongDT29,MinhDV9,LuanTV9,HuanNH6
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at
            egestas magna.
          </p>
          <button className="border-2 px-[1rem] py-[0.5rem] my-[0.5rem]">
            Learning now
          </button>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.25rem] font-bold uppercase">
            Popolar examinations
          </div>
          <div className="flex items-center gap-[2rem]">
            <img
              className="w-[3rem] h-[3rem]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            Cambridge 15
          </div>
          <div className="flex items-center gap-[2rem]">
            <img
              className="w-[3rem] h-[3rem]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            Cambridge 16
          </div>
          <div className="flex items-center gap-[2rem]">
            <img
              className="w-[3rem] h-[3rem]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            Cambridge 14
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-[1.25rem] font-bold uppercase ">Pages</div>
          <a
            href="#slide-introduction"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Introduction
          </a>
          <a
            href="#ielts-levels"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            English level
          </a>

          <a
            href="#team-achievements"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Our achievement
          </a>
          <a
            href="#our-teams"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            About us
          </a>
          <a
            href="#payment"
            className="border-b-2 border-b-[#525969] py-[0.5rem] hover:text-[#d17643]"
          >
            Become VIP member
          </a>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[1.25rem] font-bold uppercase">Contacts</div>
          <p>FPT Duy Tan Software, Ha Noi, Viet Nam</p>
          <p>Tel:0973818134</p>
          <p>Fax: +1 234 567 890</p>
          <p>study4free@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
