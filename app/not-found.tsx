import Link from "next/link";
import { NotFoundPage } from "nextra-theme-docs";

export default function NotFound() {
    return (
        <NotFoundPage content={null}>
            <h1 className="text-2xl font-bold mb-2">A keresett oldal nem található!</h1>
            <Link href="/" className="underline">Vissza a főoldalra</Link>
        </NotFoundPage>
    )
}