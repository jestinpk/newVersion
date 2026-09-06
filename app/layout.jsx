import "./styles.css";

export const dynamic = "force-static";

export const metadata = {
  title: "PK LIGHTS | Wholesale Lighting Catalogue",
  description: "Wholesale electronic lighting, pixel products, stage lights and accessories with parcel service across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
