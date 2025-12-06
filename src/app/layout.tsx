import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "Portfolio",
  description: "Ragul Prasath Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <AOSWrapper>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
        </AOSWrapper>
      </body>
    </html>
  );
}
