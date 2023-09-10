import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { GameItemType } from "types/GameItem";
import { WinStatusType } from "types/WinStatus";
import { determiningTheWinner } from "helpers/determTheWinner";

//*----------useCounter
interface CounterState {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
  totalCounter: number;
  increaseTotalCounter: () => void;
}

export const useCounter = create<CounterState>()(
  persist(
    devtools((set) => ({
      counter: 0,
      increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
      decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
      totalCounter: 0,
      increaseTotalCounter: () => set((state) => ({ totalCounter: state.totalCounter + 1 })),
    })),

    { name: "rps_counter" }
  )
);

//*----------useModal
interface ModalState {
  modalIsVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = create<ModalState>()((set) => ({
  modalIsVisible: false,
  openModal: () => set({ modalIsVisible: true }),
  closeModal: () => set({ modalIsVisible: false }),
}));

//*----------useGameItem

interface GameItemState {
  gameItem: GameItemType | null;
  setGameItem: (item: GameItemType | null) => void;
}

export const useGameItem = create<GameItemState>()((set) => ({
  gameItem: null,
  setGameItem: (item) => set({ gameItem: item }),
}));

//*----------useCompGameItem

interface CompGameItemState {
  compGameItem: GameItemType | null;
  setCompGameItem: () => void;
  clearCompGameItem: () => void;
}
export const useCompGameItem = create<CompGameItemState>()((set) => ({
  compGameItem: null,
  setCompGameItem: () => {
    setTimeout(() => {
      const items: GameItemType[] = ["rock", "scissors", "paper"];
      let item = items[Math.floor(Math.random() * items.length)];
      set({ compGameItem: item });
    }, 2000);
  },
  clearCompGameItem: () => set({ compGameItem: null }),
}));

//*----------useWinStatus

interface WinStatusState {
  winStatus: WinStatusType | null;
  setWinStatus: (gameItem: GameItemType, compGameItem: GameItemType) => void;
  clearWinStatus: () => void;
}

export const useWinStatus = create<WinStatusState>()((set) => ({
  winStatus: null,
  setWinStatus: (gameItem, compGameItem) => {
    setTimeout(() => {
      set(() => ({ winStatus: determiningTheWinner(gameItem, compGameItem) }));
    }, 1000);
  },
  clearWinStatus: () => set({ winStatus: null }),
}));
