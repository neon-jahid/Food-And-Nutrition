import FoodsRoute from "../../../views/FoodsRoute.jsx";

export default function FoodsLayout({ children }) {
  return (
    <>
      <FoodsRoute />
      {children}
    </>
  );
}
