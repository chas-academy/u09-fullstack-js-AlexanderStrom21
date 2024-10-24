const Documentation = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex w-full mx-2">{DocumentationLayout()}</div>
      </section>
    </>
  );
  function DocumentationLayout() {
    return (
      <>
        <div className="bg-primary m-1 p-4 text-text rounded-lg text-center w-full">
          <h1>Documentation Extra</h1>
        </div>
      </>
    );
  }
};

export default Documentation;
