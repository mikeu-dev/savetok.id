import { Header } from "@/components/header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <div className="grow container mx-auto px-4 py-8">
        {children}
      </div>
      {/* Admin biasanya tidak butuh footer publik yang panjang */}
      <footer className="py-6 border-t bg-card/50 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} TikDrop Admin Panel
      </footer>
    </div>
  );
}
