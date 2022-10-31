import { Theme } from "@carbon/react";
import Header from "./Header";

const Page = () => {
  return <div style={{ height: "100vh", backgroundColor: "black" }}></div>;
};

export default function App() {
  return (
    <Theme theme="g100">
      <Header />
      <Page />
    </Theme>
  );
}
