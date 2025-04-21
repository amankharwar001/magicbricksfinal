import { create } from 'zustand'

const useProjectStore = create((set) => ({
  projects: [],
  loading: true,
  setProjects: (data) => set({ projects: data }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}))
export default useProjectStore
