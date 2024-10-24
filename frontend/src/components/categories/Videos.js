const Videos = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex w-full mx-2">{VideosLayout()}</div>
      </section>
    </>
  );
  function VideosLayout() {
    return (
      <>
        <div className="bg-secondary m-1 p-4 text-text rounded-lg text-center w-full">
          <h1>Videos Extra</h1>
        </div>
      </>
    );
  }
};

export default Videos;
