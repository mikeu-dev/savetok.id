import { useLanguage } from '@/hooks/use-language';
import AdSense from './adsense';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t bg-white/40 dark:bg-black/20 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <AdSense adSlot="5555555555" className="w-full text-center mb-4" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SaveTok.id. All rights reserved.</p>
          <p>{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
