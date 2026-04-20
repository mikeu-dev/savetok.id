import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/db/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog TikDrop - Tips & Panduan TikTok Terbaru',
  description: 'Dapatkan berita terbaru, tips viral, dan panduan lengkap seputar TikTok hanya di Blog TikDrop.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-2">Belum ada artikel</h2>
        <p className="text-muted-foreground">Silakan kembali lagi nanti untuk tips TikTok terbaru.</p>
      </div>
    );
  }

  const [featured, ...others] = posts;

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-background via-background/50 to-background">
      <main className="grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16 text-center space-y-4">
            <div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase animate-pulse">
              Insight & Tutorial
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Blog <span className="text-primary">TikDrop</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Kumpulan strategi, rahasia viral, dan panduan teknis terbaik untuk mendominasi FYP TikTok tahun 2026.
            </p>
          </header>

          {/* Featured Post */}
          <div className="mb-20">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <Card className="overflow-hidden border-primary/10 bg-card/40 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/30">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    {featured.thumbnail ? (
                      <img 
                        src={featured.thumbnail} 
                        alt={featured.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                        <span className="text-primary font-bold text-6xl opacity-10">TikDrop</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {featured.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground/70 mb-6 font-mono">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {featured.author}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 line-clamp-3 font-light leading-relaxed">
                      {featured.description}
                    </p>
                    <div>
                      <span className="inline-flex items-center gap-2 text-primary font-bold group/btn">
                        Baca Artikel Lengkap 
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* Secondary Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
                <Card className="flex flex-col overflow-hidden border-primary/5 bg-card/30 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
                  <div className="relative aspect-video overflow-hidden">
                    {post.thumbnail ? (
                      <img 
                        src={post.thumbnail} 
                        alt={post.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-3xl opacity-10">TikDrop</span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      {post.tags?.[0] && (
                        <span className="px-2.5 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold rounded-md uppercase tracking-tighter">
                          {post.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                  <CardHeader className="p-6 grow">
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground/60 mb-3 font-mono">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span>{post.author}</span>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-4 line-clamp-2 font-light opacity-80 leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <span className="text-xs text-primary font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
