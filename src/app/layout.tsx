import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/UserSync";
import TanStackProviders from "@/components/providers/TanStackProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentwise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Available 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProviders>
      <ClerkProvider
        appearance={{
          variables: {
            /* Brand */
            colorPrimary: "#e07a3f",

            /* Surfaces */
            colorBackground: "#fafafa",
            colorInputBackground: "#ffffff",

            /* Text */
            colorText: "#0f172a",
            colorTextSecondary: "#6b7280",

            /* Borders & focus */
            colorRing: "#e07a3f",

            /* Radius & font (optional but recommended) */
            borderRadius: "0.75rem",
            fontFamily: "Geist, system-ui, sans-serif",
          },
        }}
      >
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark `}
          >
            <UserSync />
            {children}
            <ToastContainer
              position="top-right"
              toastStyle={{
                fontSize: "28",
                fontWeight: "bold",
              }}
            />
          </body>
        </html>
      </ClerkProvider>
    </TanStackProviders>
  );
}
