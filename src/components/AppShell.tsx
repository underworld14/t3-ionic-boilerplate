/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

import 'react-spring-bottom-sheet/dist/style.css';

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Preferences } from '@capacitor/preferences';

import { api } from '~/utils/api';
// import { PrivateRoute, AuthRoute } from './molecules';

// pages
import routes from './routes';

setupIonicReact({});

dayjs.locale('id');

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const storagePersister = createAsyncStoragePersister({
  storage: {
    getItem: async key => {
      const { value } = await Preferences.get({ key });
      return JSON.parse(value ?? 'null');
    },
    setItem: async (key, value) => {
      await Preferences.set({ key, value: JSON.stringify(value) });
    },
    removeItem: async key => {
      await Preferences.remove({ key });
    },
  },
  key: 'utarakan-cache',
});

const AppShell = () => {
  const queryClient = useQueryClient();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: storagePersister }}
    >
      <IonApp>
        <IonReactRouter basename="/app">
          <IonRouterOutlet id="main">
            {routes.map(route => {
              return <Route key={route.path} {...route} />;
            })}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
};

export default api.withTRPC(AppShell);
