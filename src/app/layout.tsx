import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Hospital App",
  description: "A modern hospital management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <header className="p-4 bg-primary text-white">Hospital App</header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
