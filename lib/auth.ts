import { User } from '@/types/user'

const USER_KEY = 'user'

export function saveUserToLocalStorage(user: User) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }
}

export function getUserFromLocalStorage(): User | null {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem(USER_KEY)
  return stored ? JSON.parse(stored) : null
}

export function removeUserFromLocalStorage() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_KEY)
  }
}

export function isUserAuthenticated(): boolean {
  return getUserFromLocalStorage() !== null
}
