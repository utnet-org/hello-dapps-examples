import { createContext } from 'react';

/**
 * @typedef UncContext
 * @property {import('./wallets/unc').Wallet} wallet Current wallet
 * @property {string} signedAccountId The AccountId of the signed user
 */

/** @type {import ('react').Context<UncContext>} */
export const UncContext = createContext({
  wallet: undefined,
  signedAccountId: ''
});