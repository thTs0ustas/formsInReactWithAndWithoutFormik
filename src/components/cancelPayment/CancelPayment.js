import { selectors, useProvider } from "../../model";

const CancelPayment = () => {
  const { url, theme } = selectors;
  const [state] = useProvider([url, theme]);
  console.log(state);
  return <div>{state.BASE_URL}</div>;
};

export { CancelPayment };
