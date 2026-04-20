'use client';

import { useAuth } from '@/components/auth-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { LayoutDashboard, BarChart, Users, Download, DollarSign } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock data
const STATS = [
    { label: 'Total Users', value: '1,234', icon: Users, change: '+12%' },
    { label: 'Total Downloads', value: '54,321', icon: Download, change: '+25%' },
    { label: 'Revenue', value: '$12,345', icon: DollarSign, change: '+15%' },
    { label: 'Active Sessions', value: '567', icon: BarChart, change: '+5%' },
];
import { BlogManager } from '@/components/admin/blog-manager';
import { SettingsManager } from '@/components/admin/settings-manager';

export default function AdminClient() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'dashboard';
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/auth?callbackUrl=/admin');
            } else {
                const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
                if (user.email === adminEmail) {
                    setIsAdmin(true);
                } else {
                    router.push('/');
                }
            }
        }
    }, [user, loading, router]);

    if (loading || !isAdmin) {
        return <div className="min-h-screen flex items-center justify-center"><Skeleton className="h-12 w-12 rounded-full" /></div>;
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black tracking-tight capitalize">{activeTab}</h1>
                    <p className="text-muted-foreground text-sm">Kelola aset dan pengaturan TikDrop Anda.</p>
                </div>
                <div className="text-xs text-muted-foreground font-mono bg-card border px-4 py-2 rounded-xl shadow-sm">
                    {user?.email}
                </div>
            </div>

            {activeTab === 'dashboard' && (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {STATS.map((stat, i) => (
                            <Card key={i} className="border-primary/5 bg-card/40 backdrop-blur-md hover:border-primary/20 transition-all shadow-xl shadow-black/5">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </CardTitle>
                                    <stat.icon className="h-4 w-4 text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-black">{stat.value}</div>
                                    <p className="text-[10px] font-bold text-emerald-500 mt-1">
                                        {stat.change} <span className="text-muted-foreground font-normal">vs last month</span>
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="border-primary/5 bg-card/40 backdrop-blur-md shadow-xl shadow-black/5">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                <div className="p-4 bg-muted rounded-full">
                                    <LayoutDashboard className="w-8 h-8 text-muted-foreground/40" />
                                </div>
                                <p className="text-muted-foreground max-w-[200px] text-sm">Belum ada aktivitas baru untuk ditampilkan hari ini.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === 'blog' && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    <BlogManager />
                </div>
            )}

            {activeTab === 'settings' && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    <SettingsManager />
                </div>
            )}

            {/* Placeholder for other tabs */}
            {(activeTab === 'users' || activeTab === 'analytics') && (
                <Card className="border-dashed border-2 flex items-center justify-center py-40">
                    <div className="text-center space-y-2">
                        <p className="font-bold text-xl">Coming Soon</p>
                        <p className="text-muted-foreground">Fitur {activeTab} sedang dalam pengembangan.</p>
                    </div>
                </Card>
            )}
        </div>
    );
}
