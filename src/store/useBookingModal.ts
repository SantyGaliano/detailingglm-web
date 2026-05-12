import { create } from "zustand";

interface BookingModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useBookingModal =
  create<BookingModalStore>((set) => ({
    isOpen: false,

    open: () =>
      set({
        isOpen: true,
      }),

    close: () =>
      set({
        isOpen: false,
      }),
  }));