const Videos = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="flex flex-col w-3/4 ">{VideosLayout()}</div>
      </section>
    </>
  );
  function VideosLayout() {
    return (
      <>
        <div className="bg-secondary m-1 p-4 text-text rounded-lg">
          <h1>Videos Extra</h1>
        </div>
      </>
    );
  }
};

export default Videos;
