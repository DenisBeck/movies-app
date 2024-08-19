import React from 'react';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';

import MainPage from './pages/main-page';
import DataContextProvider from './helpers/data-context-provider';

import './App.css';

const { ErrorBoundary } = Alert;

export default function App() {
  return (
    <ErrorBoundary>
      <Offline>
        <Alert style={{ fontSize: '24px' }} type="warning" message="You're offline right now. Check your connection." />
      </Offline>
      <DataContextProvider>
        <MainPage className="movies" />
      </DataContextProvider>
    </ErrorBoundary>
  );
}
