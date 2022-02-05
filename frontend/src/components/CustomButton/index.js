import { Button } from './styles';

export default function CustomButton({ text, ...rest }) {
  return (
    <Button {...rest} >
      {text}
    </Button>
  );
}