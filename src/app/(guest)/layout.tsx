import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </>
  );
}
