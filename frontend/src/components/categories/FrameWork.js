const FrameWork = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="flex flex-col w-3/4 ">{FrameWorkLayout()}</div>
      </section>
    </>
  );
  function FrameWorkLayout() {
    return (
      <>
        <div className="bg-primary m-1 p-4 text-text rounded-lg">
          <h1>Frame Works Extra</h1>
        </div>
      </>
    );
  }
};

export default FrameWork;
