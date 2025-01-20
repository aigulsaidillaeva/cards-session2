const List = (props) => {
  return <div className="list">{props.dog}</div>;
};
// componenta react
export const PageHeader = () => {
  return (
    <header className="header">
      <List dog="buldok" />
      <List dog="ofcharka" />
      <List dog="chi hua hua" />
      <List dog="haski" />
    </header>
  );
};
