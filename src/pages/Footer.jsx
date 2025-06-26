export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2c3e50] text-white text-center py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold mb-4">LOCATION</h3>
              <p className="text-lg">2215 John Daniel Drive</p>
              <p className="text-lg">Clark, MO 65243</p>
            </div>
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold mb-4">AROUND THE WEB</h3>
              <div className="flex justify-center gap-4">
                {[
                  { href: "https://www.facebook.com", icon: "fa-facebook" },
                  { href: "https://www.twitter.com", icon: "fa-twitter" },
                  { href: "https://www.linkedin.com", icon: "fa-linkedin-in" },
                ].map(({ href, icon }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white  rounded-full p-1 hover:text-[#1abc9c] hover:border-[#1abc9c] transition-colors duration-300"
                  >
                    <i className={`fa-brands ${icon} text-xl`} />
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold mb-4">ABOUT FREELANCER</h3>
              <p className="text-lg">
                Freelance is a free to use, licensed Bootstrap theme created by Route.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a252f] text-white py-6">
        <p className="text-center text-sm tracking-wide">
          Copyright © Your Website 2021
        </p>
      </div>
    </footer>
  );
}
