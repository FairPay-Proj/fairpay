"use client";

import Container from "@FairPay/components/Container";
import StyledComponentsRegistry from "@FairPay/lib/registry";
import "@FairPay/styles/global.css";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Container children={children} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
