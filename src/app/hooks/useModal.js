import { useState } from "react";

export default function useModal() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return {
    visible,
    show,
    hide,
  };
}
