import { Button } from './styles';

export default function CustomButton({text, ...props}) {
  return (
    <Button {...props}>
      {text}
    </Button>
  );
}