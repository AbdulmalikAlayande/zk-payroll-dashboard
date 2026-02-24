import { create } from 'zustand';
import { createLogger } from '@/lib/logger';

const log = createLogger('wallet');

interface WalletState {
  isConnected: boolean;
  address: string | null;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  isConnected: false,
  address: null,
  publicKey: null,

  connect: async () => {
    try {
      // @ts-ignore - Freighter types
      if (typeof window.freighter === 'undefined') {
        alert('Please install Freighter wallet extension');
        return;
      }

      // @ts-ignore
      const { isConnected } = await window.freighter.isConnected();
      if (!isConnected) {
        // @ts-ignore
        await window.freighter.requestAccess();
      }

      // @ts-ignore
      const publicKey = await window.freighter.getPublicKey();

      set({
        isConnected: true,
        address: publicKey,
        publicKey,
      });
    } catch (error) {
      log.error('Wallet connection failed', { error: error instanceof Error ? error.message : String(error) });
    }
  },

  disconnect: () => {
    set({
      isConnected: false,
      address: null,
      publicKey: null,
    });
  },
}));
