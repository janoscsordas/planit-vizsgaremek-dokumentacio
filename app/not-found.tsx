import Link from "next/link"
import { NotFoundPage } from "nextra-theme-docs"

export default function NotFound() {
  return (
    <NotFoundPage
      content={null}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-4">
        A keresett oldal nem található!
      </h1>
      <Link href="/" className="underline">
        Vissza a főoldalra
      </Link>
    </NotFoundPage>
  )
}
