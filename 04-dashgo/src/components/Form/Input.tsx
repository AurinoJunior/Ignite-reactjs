import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <ChakraInput
        name={name}
        focusBorderColor="pink.500"
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
