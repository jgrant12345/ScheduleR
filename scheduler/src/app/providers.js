'use client';

import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext({value: 42});

export function Providers({ children }) {
  return (
    <SidebarContext.Provider value={{value: 31}}>
      {children}
    </SidebarContext.Provider>
  );
}