import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durvesh Jadhav — Engineer & Builder",
  description: "The personal portfolio of Durvesh Jadhav — engineering, software, intelligent systems and experiments.",
  metadataBase: new URL("https://durveshjadhav.devs.surf"),
  openGraph: { title: "Durvesh Jadhav", description: "Engineering ideas into reality.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
