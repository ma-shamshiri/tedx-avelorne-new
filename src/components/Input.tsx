import { InputHTMLAttributes } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  ResponsiveValue,
} from "@chakra-ui/react";

// Define Omit as a utility type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface InputProps extends Omit<ChakraInputProps, "size"> {
  name: string;
  placeHolder: string;
  error?: string;
  size?: ResponsiveValue<string>;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeHolder,
  error,
  ...rest
}) => {
  return (
    <>
      <ChakraInput
        name={name}
        type={type}
        id={name}
        placeholder={placeHolder}
        {...rest}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
