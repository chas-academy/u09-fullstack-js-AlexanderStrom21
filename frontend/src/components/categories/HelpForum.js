const HelpForum = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex w-full mx-2">{HelpForumLayout()}</div>
      </section>
    </>
  );
  function HelpForumLayout() {
    return (
      <>
        <div className="bg-primary m-1 p-4 text-text rounded-lg text-center w-full">
          <h1>Help forum</h1>
        </div>
      </>
    );
  }
};

export default HelpForum;
