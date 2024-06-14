import { useEffect, useState } from 'react';

import '@/styles/globals.css';
import { UncContext } from '@/context';
import { Navigation } from '@/components/navigation';

import { Wallet } from '@/wallets/unc';
import { NetworkId, HelloContract } from '@/config';

const wallet = new Wallet({ createAccessKeyFor: HelloContract, networkId: NetworkId });

export default function MyApp({ Component, pageProps }) {
  const [signedAccountId, setSignedAccountId] = useState('');

  useEffect(() => { wallet.startUp(setSignedAccountId) }, []);

  return (
    <UncContext.Provider value={{ wallet, signedAccountId }}>
      <Navigation />
      <Component {...pageProps} />
    </UncContext.Provider>
  );
}
