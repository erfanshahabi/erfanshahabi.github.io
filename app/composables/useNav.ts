export const useSidebarOpen = () => useState<boolean>('sidebarOpen', () => false)
export const useActiveSection = () => useState<string>('activeSection', () => '')
