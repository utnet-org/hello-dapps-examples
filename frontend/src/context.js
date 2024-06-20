import { createContext } from 'react';

/**
 * @typedef HelloContext
 * @property {import('./wallets/utility').Wallet} wallet Current wallet
 * @property {string} signedAccountId The AccountId of the signed user
 */

/** @type {import ('react').Context<HelloContext>} */
export const HelloContext = createContext({
  wallet: undefined,
  signedAccountId: ''
});