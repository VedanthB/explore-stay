import { create } from 'zustand';

interface LoginPopUpStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginPopUp = create<LoginPopUpStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginPopUp;
