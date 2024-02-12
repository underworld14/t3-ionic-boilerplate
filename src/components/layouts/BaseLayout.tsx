import { IonPage, IonContent } from '@ionic/react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <IonPage>
      <IonContent>
        <main className="relative flex min-h-screen w-screen">
          <div className="mx-auto h-full w-full max-w-lg">{children}</div>
        </main>
      </IonContent>
    </IonPage>
  );
}
