import { useToasts } from "react-toast-notifications";

export const useToast = () => {
  const { addToast } = useToasts();

  const displayToast = (content, appearance) => {
    addToast(content, {
      appearance: appearance,
      autoDismiss: true,
    });
  };

  return displayToast;
};
