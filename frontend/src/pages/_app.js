import { useEffect, useState } from 'react';

import '@/styles/globals.css';
import { HelloContext } from '@/context';
import { Navigation } from '@/components/navigation';

import { Wallet } from '@/wallets/utility';
import { NetworkId, HelloContract } from '@/config';

const wallet = new Wallet({ createAccessKeyFor: HelloContract, networkId: NetworkId });

export default function MyApp({ Component, pageProps }) {
  const [signedAccountId, setSignedAccountId] = useState('');

  useEffect(() => { wallet.startUp(setSignedAccountId) }, []);

  return (
    <HelloContext.Provider value={{ wallet, signedAccountId }}>
      <Navigation />
      <Component {...pageProps} />
    </HelloContext.Provider>
  );
}
