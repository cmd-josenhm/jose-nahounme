import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppContent } from './App.jsx';

export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppContent />
    </MemoryRouter>,
  );
}
