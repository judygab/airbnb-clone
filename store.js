import { create } from 'zustand'

const initialState = {
    location: "",
    dates: [new Date(), new Date()],
    guests: 0,
}

export const useSearchStore = create((set) => ({
  ...initialState, 
  increaseGuests: () => set((state) => ({ guests: state.guests + 1 })),
  decreaseGuests: () => set((state) => ({ guests: state.guests - 1 })),
  removeAllFilters: () => set(initalState),
}))