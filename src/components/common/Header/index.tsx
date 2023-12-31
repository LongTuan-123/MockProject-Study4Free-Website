import { lazy, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '../../../assets/icons/MenuIcon';
import LogoIcon from '../../../assets/images/logo.png';
import { useAppSelector } from '../../../hooks/redux';
import { selectAuth } from '../../../store/slices/authSlice';

const Tools = lazy(() => import('../Tools'));
// const Chat = lazy(() => import('../Chat'));

const Header = () => {
  const [isOpenNavBar, setOpenNavBar] = useState<boolean>(false);
  const { name } = useAppSelector(selectAuth);

  const [intersection, setIntersection] = useState<boolean>(false);
  const toggleNavBar = () => {
    setOpenNavBar(!isOpenNavBar);
  };

  const closeNavBar = () => {
    setOpenNavBar(false);
  };

  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (!inView) {
      // Intersection occurred, perform your desired action here
      setIntersection(true);
    } else setIntersection(false);
  }, [inView]);


  const navLinkItems = [
    { to: '/', name: 'Home' }, { to: 'exams', name: 'Examinations' },
    { to: 'vocabularies', name: 'Vocabulary' }, { to: 'grammar', name: 'Grammar' }
  ]
  return (
    <>
      <nav
        className="bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700  z-40 mx-auto shadow-lg"
        ref={ref}
      >
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4 w-full relative z-20">
          <NavLink to={'/'} className="flex items-center">
            <img
              src={LogoIcon}
              className="w-[10rem] mr-3"
              alt="Flowbite Logo"
            />
          </NavLink>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={toggleNavBar}
          >
            <MenuIcon width={'16px'} height={'16px'} fill={'currentColor'} />
          </button>
          <div
            className={`${isOpenNavBar ? 'block' : 'hidden'
              } w-full md:block md:w-auto max-md:absolute top-[80px] left-0 bg-white transition-all z-10`}
            id="navbar-dropdown"
          >
            <ul
              className="flex flex-col mt-0 uppercase font-semibold text-[#000] p-4 md:p-0 border text-[1rem]  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              onClick={closeNavBar}
            >
              {navLinkItems.map(({ name, to }, index) => (
                <li key={index}>
                  <NavLink
                    to={to}
                    style={{
                      display: 'block',
                      padding: '8px 0.75rem',
                    }}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'pending'
                        : isActive
                          ? 'bg-sky-600 font-bold text-white md:bg-transparent md:text-blue-600 md:p-0'
                          : 'text-black hover:bg-sky-300 hover:text-white md:hover:bg-transparent md:hover:rounded-none  md:hover:text-sky-400'
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-10 block md:hidden">
                <div className="w-fit">
                  {name ? (
                    <NavLink
                      to={'users'}
                      style={{
                        display: 'flex',
                        padding: '8px 1.75rem',
                        borderRadius: '10px',
                      }}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? 'pending'
                          : isActive
                            ? 'bg-sky-400 text-white font-bold shadow-xl text-xl'
                            : 'bg-gray-400 hover:bg-gray-500 text-white shadow-xl text-lg font-semibold'
                      }
                    >
                      {name}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={'login'}
                      style={{
                        display: 'flex',
                        padding: '8px 1.75rem',
                        borderRadius: '10px',
                      }}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? 'pending'
                          : isActive
                            ? 'bg-sky-400 text-white font-bold shadow-xl text-xl'
                            : 'bg-gray-400 hover:bg-gray-500 text-white shadow-xl text-lg font-semibold'
                      }
                    >
                      Login
                    </NavLink>
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:block hidden">
            {name ? (
              <NavLink
                to={'users'}
                style={{
                  display: 'flex',
                  padding: '8px 1.75rem',
                  borderRadius: '10px',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                      ? 'bg-sky-400 text-white font-bold shadow-xl text-xl'
                      : 'bg-gray-400 hover:bg-gray-500 text-white shadow-xl text-lg font-semibold'
                }
              >
                {name}
              </NavLink>
            ) : (
              <NavLink
                to={'login'}
                style={{
                  display: 'flex',
                  padding: '8px 1.75rem',
                  borderRadius: '10px',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                      ? 'bg-sky-400 text-white font-bold shadow-xl text-xl'
                      : 'bg-gray-400 hover:bg-gray-500 text-white shadow-xl text-lg font-semibold'
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <Tools intersection={intersection} />
      {/* <Chat /> */}
    </>
  );
};

export default Header;
