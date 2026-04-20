'use client';

import { usePathname } from "next/navigation";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Buat key berdasarkan segmen pertama URL untuk memaksa remount saat pindah group
  // Contoh: /admin -> 'admin', /blog -> 'blog', / -> 'root'
  const rootSegment = pathname.split('/')[1] || 'root';
  
  return (
    <div key={rootSegment} className="grow flex flex-col">
      {children}
    </div>
  );
}
