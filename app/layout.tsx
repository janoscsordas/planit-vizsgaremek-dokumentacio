import { Footer, LastUpdated, Layout, Navbar } from "nextra-theme-docs"
import { Banner, Head, Search } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "./globals.css"
import "nextra-theme-docs/style.css"
import Image from "next/image"

export const metadata = {
  title: "Planitapp Dokumentáció",
  description: "Planitapp alkalmazás teljeskörű dokumentációja.",
}

const banner = (
  <Banner storageKey="some-key">
    Megérkezett a Planitapp dokumentációja. 🎉
  </Banner>
)
const navbar = (
  <Navbar
    logo={
      <Image
        src="/images/full-logo.png"
        alt="Planitapp logo"
        width={150}
        height={68}
      ></Image>
    }
    projectLink="https://github.com/janoscsordas/planit-vizsgaremek-fullstack"
  />
)
const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Planitapp. Minden jog fenntartva.
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 130,
        }}
      ></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/janoscsordas/planit-vizsgaremek-dokumentacio"
          editLink={null}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
          feedback={{ content: "Kérdése van? Küldjön visszajelzést." }}
          lastUpdated={
            <LastUpdated locale="hu">Utoljára frissítve: </LastUpdated>
          }
          search={
            <Search
              placeholder="Keresés..."
              loading="Betöltés..."
              emptyResult="Nem található a keresett kifejezés."
              errorText="Hiba történt a search index betöltése közben"
            />
          }
          themeSwitch={{ dark: "Sötét", light: "Világos", system: "Rendszer" }}
          toc={{ title: "Tartalomjegyzék:", backToTop: "Vissza a tetejére" }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
