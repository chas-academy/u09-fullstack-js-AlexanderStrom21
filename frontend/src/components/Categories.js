import Test123 from "./test123";

const Catagories = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="flex flex-col m-5 w-3/4 ">
          <div className="bg-cyan-950 m-1 p-4 text-white rounded-lg">
            <h1>Videos Extra</h1>
          </div>

          <div className="bg-cyan-900 m-1 p-4 text-white rounded-lg">
            <h1>Documentation Extra</h1>
          </div>

          <div className="bg-cyan-950 m-1 p-4 text-white rounded-lg">
            {<Test123></Test123>}
            <div>
              <h1>Help forum</h1>
            </div>
          </div>

          <div className="bg-cyan-900 m-1 p-4 text-white rounded-lg">
            <h1>Frame Works Extra</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catagories;
