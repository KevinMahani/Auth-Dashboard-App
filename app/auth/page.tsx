'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchema } from '@/validators/loginSchema'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { useAuth } from '@/context/AuthContext'
import  styles from './page.module.scss'

export default function AuthPage() {
  const { setUser } = useAuth()
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async () => {
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    const data = await res.json()
    const user = data.results[0]
    setUser(user)
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
      <h2>Login</h2>
      <Input
        label="Phone Number"
        placeholder="Enter your phone number"
        {...register('phone')}
        error={errors.phone?.message}
      />
      <Button type="submit">Login</Button>
    </form>
  )
}
