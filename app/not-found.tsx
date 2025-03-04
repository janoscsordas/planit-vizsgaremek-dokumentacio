import Link from "next/link"
import { NotFoundPage } from "nextra-theme-docs"

export default function NotFound() {
  return (
    <NotFoundPage
      content={null}
      className="flex flex-col items-center justify-center w-full min-h-screen gap-8"
    >
      <div className="relative flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center text-[#44ca85]">404</h1>
        <h2 className="mt-2 text-2xl font-semibold">Nincs találat!</h2>
        <p className="max-w-md mt-4 text-base text-center">
          A keresett oldal nem található. Ellenőrízd a megadott címet, vagy térj
          vissza a főoldalra.
        </p>
      </div>

      <Link
        href="/"
        className="px-6 py-3 text-sm font-semibold text-black text-center rounded-md shadow-sm bg-[#44ca85]"
        aria-label="Vissza a főoldalra"
      >
        <span className="relative z-10">Vissza a főoldalra</span>
        <div className="absolute inset-0 transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0" />
      </Link>
    </NotFoundPage>
  )
}
