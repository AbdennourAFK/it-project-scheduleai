import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "SchedulAI - Foutloze planning met AI",
  description:
    "SchedulAI combineert slimme AI-triage met foutloze synchronisatie. Geef je klanten 24/7 boekingsmogelijkheden zonder dubbele afspraken."
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="nl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
