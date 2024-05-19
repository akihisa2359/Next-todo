import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "./destyle.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ preload: false });

export const metadata = {
  title: "TODO",
  description: "todo application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        {children}
      </body>
    </html>
  );
}
