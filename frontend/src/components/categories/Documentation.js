const Documentation = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="flex flex-col w-3/4 ">{DocumentationLayout()}</div>
      </section>
    </>
  );
  function DocumentationLayout() {
    return (
      <>
        <div className="bg-cyan-900 m-1 p-4 text-white rounded-lg">
          <h1>Documentation Extra</h1>
        </div>
      </>
    );
  }
};

export default Documentation;
