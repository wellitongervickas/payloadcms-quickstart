export const DefaultLayout = ({
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
};

export default DefaultLayout;
