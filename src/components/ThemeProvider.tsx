"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Simplified type import that works with the latest version
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}