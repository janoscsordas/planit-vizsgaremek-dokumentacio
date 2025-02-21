import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-32">
        <span className="text-[#44ca85]">{"Planitapp" + " "}</span>
        Dokumentáció
      </h1>
      <p className="text-lg md:text-xl text-center mt-8 text-gray-400">
        A Planitapp alkalmazás teljeskörű dokumentációja.
      </p>
      <p className="text-center mt-2 max-w-md text-gray-500 mx-auto">
        Ez a leírás tartalmazza a webalkalmazás működését, funkcióit és a
        fejlesztési információkat.
      </p>
      <div className="relative flex justify-center mb-32 mt-48">
        <div className="-z-[2] absolute -top-16 border border-[#44ca85] h-12 w-50"></div>
        <Link className="absolute -top-16" href={"/docs"} aria-label="Belépés">
          <button className="flex items-center h-12 w-50 text-center text-lg p-6 px-10 uppercase transition transform translate-x-[4px] translate-y-[4px] hover:translate-x-0 hover:translate-y-0 bg-[#44ca85] hover:bg-[#44ca85] rounded-none select-none font-medium cursor-pointer text-gray-900">
            Megtekintés
          </button>
        </Link>
      </div>
    </div>
  )
}
