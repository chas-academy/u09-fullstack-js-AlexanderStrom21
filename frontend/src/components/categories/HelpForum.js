const HelpForum = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="flex flex-col w-3/4 ">{HelpForumLayout()}</div>
      </section>
    </>
  );
  function HelpForumLayout() {
    return (
      <>
        <div className="bg-cyan-900 m-1 p-4 text-white rounded-lg">
          <div>
            <h1>Help forum</h1>
          </div>
        </div>
      </>
    );
  }
};

export default HelpForum;
