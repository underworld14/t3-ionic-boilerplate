import { twMerge } from 'tailwind-merge';
import { IonPage, IonContent } from '@ionic/react';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BaseLayout({ children, className }: BaseLayoutProps) {
  return (
    <IonPage>
      <IonContent>
        <main className="relative flex min-h-screen w-screen">
          <div className={twMerge('mx-auto h-full w-full max-w-lg', className)}>{children}</div>
        </main>
      </IonContent>
    </IonPage>
  );
}
