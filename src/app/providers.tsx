// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {},
  colors: {
    primary: '#ED7D31',
    secondary: '#6C5F5B',
    third: '#4F4A45',
    hitam: '#193153',
    abu: '#CECECE',
  },
  borders: {
    primary: `1px solid #ED7D31`,
    secondary: `1px solid #6C5F5B`,
    third: '1px solid #4F4A45',
    hitam: `1px solid #193153`,
    abu: `1px solid #CECECE`,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
