import { create } from 'zustand';

interface RegisterPopUpStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterPopUp = create<RegisterPopUpStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterPopUp;
