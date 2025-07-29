'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'


export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
    }
  }, [user, router])

  if (!user) return null

  return (
    <div className={styles.dashboard} >
      <h1>Welcome to your Dashboard</h1>
      <h2>{user.name.first} {user.name.last}</h2>
      <Link href="/auth" className={styles.backLink} >
        ← back to Login page
      </Link>
    </div>
  )
}
