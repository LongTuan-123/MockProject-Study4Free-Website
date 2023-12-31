import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { SignUpInputs } from '../../../interfaces/Auth';
import { signUpSchema } from '../../../schemas/account';
import { useRegisterMutation } from '../../../services/authApi';
import { setUser } from '../../../store/slices/authSlice';
import { NOTIFICATION_TYPE, notify } from '../../../utils/notify';
import IUser from '../../../interfaces/User';

type SignUpProps = {
  handleChange: (newValue: number) => void;
};

const SignUp: React.FC<SignUpProps> = ({ handleChange }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ resolver: yupResolver(signUpSchema) });

  const [registerUser, { data: registerData, isSuccess: isRegisterSuccess }] =
    useRegisterMutation();
  const handleSignup: SubmitHandler<SignUpInputs> = async (data) => {
    const username = data.username;
    const password = data.password;
    const email = data.email;
    const gender = '';
    await registerUser({ username, password, email, gender });
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      notify(NOTIFICATION_TYPE.SUCCESS, 'Register success');

      dispatch(
        setUser({
          name: registerData?.username,
          token: registerData?.tokens?.accessToken,
          userInfo: {} as IUser,
        })
      );
      handleChange(0);
    }
  }, [isRegisterSuccess]);
  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="px-16 py-12  border-2 rounded-xl w-full shadow-lg bg-white shadow-sky-300"
    >
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-black font-semibold uppercase">
                  Username
                </p>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className={`input input-bordered focus:outline-none w-full ${
                    errors.username?.message
                      ? 'border-red-400'
                      : 'border-sky-400'
                  }`}
                  {...register('username')}
                />
              </label>
            </div>
            {errors.username?.message && (
              <p className="mt-2 text-lg italic text-red-400">
                {errors.username?.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-black font-semibold uppercase">
                  E-mail
                </p>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter your E-mail"
                  className={`input input-bordered focus:outline-none w-full ${
                    errors.email?.message ? 'border-red-400' : 'border-sky-400'
                  }`}
                  {...register('email')}
                />
              </label>
            </div>
            {errors.email?.message && (
              <p className="mt-2 text-lg italic text-red-400">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 transition-all">
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-black font-semibold uppercase">
                  Password
                </p>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  placeholder="Enter password"
                  className={`input input-bordered focus:outline-none w-full ${
                    errors.password?.message
                      ? 'border-red-400'
                      : 'border-sky-400'
                  }`}
                  {...register('password')}
                />
              </label>
            </div>
            {errors.password?.message && (
              <p className="mt-2 text-lg italic text-red-400">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-black font-semibold uppercase">
                  Password Again{' '}
                </p>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className={`input input-bordered focus:outline-none w-full ${
                    errors.repassword?.message
                      ? 'border-red-400'
                      : 'border-sky-400'
                  }`}
                  {...register('repassword')}
                />
              </label>
            </div>
            {errors.repassword?.message && (
              <p className="mt-2 text-lg italic text-red-400">
                {errors.repassword?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="px-8  transition-colors text-white font-semibold bg-blue-400 hover:bg-blue-500 rounded-md hover:shadow-md py-2 text-lg w-full"
      >
        Register
      </button>
    </form>
  );
};

export default SignUp;
