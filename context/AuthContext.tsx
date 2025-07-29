'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/types/user'
import { saveUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '@/lib/auth'


type AuthContextType = {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null)

useEffect(() => {
  const storedUser = getUserFromLocalStorage()
  if (storedUser) setUserState(storedUser)
}, [])

  const setUser = (user: User) => {
  saveUserToLocalStorage(user)
  setUserState(user)
}

  const logout = () => {
  removeUserFromLocalStorage()
  setUserState(null)
}

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
