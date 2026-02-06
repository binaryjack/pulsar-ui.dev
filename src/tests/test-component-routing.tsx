// Test file to check if component routing works in context provider pattern
const App = () => {
  return <div>Hello</div>;
};

const AppContextProvider = (props: any) => {
  return <div>{props.children}</div>;
};

const root = (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
