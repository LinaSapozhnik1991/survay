import { create } from 'zustand'

interface ModalState {
  isOpen: boolean
  content: React.ReactNode | null
  position: 'center' | 'right'
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

const useModalStore = create<ModalState>(set => ({
  isOpen: false,
  content: null,
  position: 'center',
  openModal: content => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null })
}))

export default useModalStore
