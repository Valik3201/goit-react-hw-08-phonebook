import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { Input, Button } from '@nextui-org/react';
import { UserRoundIcon, EyeIcon, EyeOffIcon, KeyRoundIcon } from 'lucide-react';

const Login = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mb-6">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-6"
      >
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          startContent={
            <UserRoundIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          startContent={
            <KeyRoundIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        <Button type="submit" color="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;