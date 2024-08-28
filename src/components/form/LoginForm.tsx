import React, { useContext, useEffect } from 'react';
import { CiUser } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';
import { AuthFieldElement, UserSignIn } from '../../types/User.type';
import Input from '../auth-element/Input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../thunks/authThunk';
import { AppDispatch } from '../../redux/store';
import { authSelector } from '../../redux/selector';
import { HttpStatus } from '../../enum/HttpStatus';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import { useCookies } from 'react-cookie';
import { Base64 } from 'js-base64';

const LoginForm = () => {
  // init
  const [cookies, setCookie, removeCookie] = useCookies(['user', 'token']);
  const authContext = useContext(AuthContext);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const fields: AuthFieldElement[] = [
    {
      type: 'text',
      field: 'email',
      name: 'Email',
      icon: <CiUser className={'group-focus-within:text-white text-[hsla(0,0%,100%,.1)]'} size={24} />,
    },
    {
      type: 'password',
      field: 'password',
      name: 'Password',
      icon: <CiLock size={24} className={'group-focus-within:text-white text-[hsla(0,0%,100%,.1)]'} />,
    },
  ];

  // React Hook Form
  const defaultFieldValue: UserSignIn = {
    email: '',
    password: '',
  };

  const { register, formState: { errors }, handleSubmit } = useForm<UserSignIn>({
    defaultValues: defaultFieldValue,
  });

  const onSubmit = (data: UserSignIn, e: any) => {
    let signingMessage = 'Signing In';
    e.preventDefault();
    authContext.setLoadingScreen({ message: signingMessage, isShow: true });
    setTimeout(() => {
      dispatch(signIn(data));
    }, 2000);
  };

  // Handle Response
  const response = useSelector(authSelector).signinResponse;

  useEffect(() => {
    let successNavPath = '/app/dashboard';
    if (!response) return;
    if (response.status) {
      let tokenBase64 = Base64.encode(response.data.tokenAccess);
      let userBase64 = Base64.encode(response.data.userLogin.email);
      // login thành công
      setCookie("token", tokenBase64, {maxAge: response.data.expires});
      setCookie("user", userBase64, {maxAge: response.data.expires});
      toast.success(response.message);
      setTimeout(() => {
        navigate(successNavPath);
      }, 1000);
      authContext.setLoadingScreen({ message: '', isShow: false });
      return;
    }
    console.log("in");
    authContext.setLoadingScreen({ message: '', isShow: false });
    toast.error(response.message);
    return;
  }, [response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
      {fields.map((field, index) => (
        <Input
          type={field.type}
          register={register}
          errors={errors}
          key={index}
          name={field.name}
          field={field.field}
          icon={field.icon}
        />
      ))}
      <button
        className={'h-[52px] mt-3 mb-2 bg-[#01aef8] text-white opacity-80 hover:opacity-100 transition-all duration-200 ease-in w-full rounded'}>Submit
      </button>
    </form>
  );
};

export default LoginForm;