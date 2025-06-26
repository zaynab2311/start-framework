import avater from "../../imgs/avataaars.svg";

export default function Home() {
  return (
    <section className="bg-[#1abc9c] min-h-screen py-10 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-white text-center">
      <img src={avater} alt="avatar" className="w-[250px] block mb-6" />
        <h2 className="uppercase text-4xl font-extrabold tracking-wider mb-4 ">
          Start Framework
        </h2>
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-1 bg-white mx-4"></div>
          <i className="fa-solid fa-star text-xl"></i>
          <div className="w-16 h-1 bg-white mx-4"></div>
        </div>
        <p className="text-lg">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
