import "./styles.css";

export const dynamic = "force-static";

export const metadata = {
  title: "PK LIGHTS | Wholesale Lighting Catalogue",
  description: "Wholesale electronic lighting, pixel products, stage lights and accessories with parcel service across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
