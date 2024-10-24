const FrameWork = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex w-full mx-2">{FrameWorkLayout()}</div>
      </section>
    </>
  );
  function FrameWorkLayout() {
    return (
      <>
        <div className="bg-secondary m-1 p-4 text-text rounded-lg text-center w-full">
          <h1>Frame Works Extra</h1>
        </div>
      </>
    );
  }
};

export default FrameWork;
