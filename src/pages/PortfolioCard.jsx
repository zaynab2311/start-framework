export default function PortfolioCard({ img, toggleModal }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[300px] h-[250px] rounded-xl overflow-hidden group cursor-pointer shadow-lg">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover rounded-xl"
        />
        <div
          onClick={() => toggleModal(img.src)}
          className="absolute inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
        >
          <i className="fa-solid fa-plus fa-3x text-white"></i>
        </div>
      </div>
    </div>
  );
}
