export default function About() {
  return (
    <section className="min-h-screen bg-[#1abc9c] py-10 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-white text-center w-full px-4 max-w-6xl">
        <h2 className="uppercase text-4xl font-extrabold tracking-wider mb-6">
          about component
        </h2>
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-1 bg-white mx-4"></div>
          <i className="fa-solid fa-star text-xl"></i>
          <div className="w-16 h-1 bg-white mx-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-left px-4 text-white">
          <div className="md:w-1/2 md:pl-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
