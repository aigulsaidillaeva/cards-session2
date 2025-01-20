export const Section = (props) => {
  return (
    <section className="game">
      <h1>{props.header}</h1>
      <p>{props.des}</p>
    </section>
  );
};
