import { create } from "zustand";

import { Project } from "@/types/project";
import { useBackdropStore } from "./useBackdropStore";

type ProjectModalStore = {
  isOpen: boolean;
  project: Project | null;
  open: (project: Project) => void;
  close: () => void;
};

export const useProjectModalStore = create<ProjectModalStore>((set) => ({
  isOpen: false,
  project: null,
  open: (project) => {
    useBackdropStore.getState().open(() => set({ isOpen: false }));
    set({ isOpen: true, project })
  },
  close: () => {
    useBackdropStore.getState().close();
    set({ isOpen: false, project: null })
  }
}));