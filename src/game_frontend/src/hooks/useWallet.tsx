import { useAuth } from "./useAuth";

const useWallet = (): string | undefined => {
  const auth = useAuth();



  // Determine the current authenticated wallet
  const currentWallet: WalletName | undefined = (() => {
    if (auth?.isAuthenticated.plug) return "PLUG";
    if (auth?.isAuthenticated.ii) return "INTERNETIDENTITY";
    return undefined; 
  })();
  
  // Map wallet types to image paths
  const WALLETS: Record<WalletName, string> = {
    PLUG: "/assets/images/wallets/plug.png",
    INTERNETIDENTITY: "/assets/images/wallets/ii.png",
    BIFINITY: "/assets/images/wallets/bifinity.png",
    NFID: "/assets/images/wallets/nfid.png",
  };

  // Return the wallet image path
  const walletImage = currentWallet ? WALLETS[currentWallet] : undefined;


  return walletImage;
};

export default useWallet;
