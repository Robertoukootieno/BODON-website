'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Button from '@/components/ui/Button'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  createdAt: string
}

export default function AuthTestPage() {
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('TestPassword123!')
  const [firstName, setFirstName] = useState('Test')
  const [lastName, setLastName] = useState('User')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const testSignUp = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          confirmPassword: password,
          firstName,
          lastName,
          acceptTerms: true,
        }),
      })

      const result = await response.json()
      
      if (response.ok) {
        toast.success('Account created successfully!')
        await fetchUser()
      } else {
        toast.error(result.error || 'Sign up failed')
      }
    } catch (error) {
      toast.error('Network error')
    } finally {
      setLoading(false)
    }
  }

  const testSignIn = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          rememberMe: false,
        }),
      })

      const result = await response.json()
      
      if (response.ok) {
        toast.success('Signed in successfully!')
        await fetchUser()
      } else {
        toast.error(result.error || 'Sign in failed')
      }
    } catch (error) {
      toast.error('Network error')
    } finally {
      setLoading(false)
    }
  }

  const testSignOut = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'POST',
      })

      if (response.ok) {
        toast.success('Signed out successfully!')
        setUser(null)
      } else {
        toast.error('Sign out failed')
      }
    } catch (error) {
      toast.error('Network error')
    } finally {
      setLoading(false)
    }
  }

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me')
      
      if (response.ok) {
        const result = await response.json()
        setUser(result.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      setUser(null)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-max">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-8">
            Authentication System Test
          </h1>

          {/* Test Credentials */}
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg"
              />
            </div>
          </div>

          {/* Test Actions */}
          <div className="space-y-4 mb-8">
            <div className="flex space-x-4">
              <Button
                onClick={testSignUp}
                disabled={loading}
                className="flex-1"
              >
                Test Sign Up
              </Button>
              <Button
                onClick={testSignIn}
                disabled={loading}
                variant="outline"
                className="flex-1"
              >
                Test Sign In
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={fetchUser}
                disabled={loading}
                variant="outline"
                className="flex-1"
              >
                Check Auth Status
              </Button>
              <Button
                onClick={testSignOut}
                disabled={loading}
                variant="outline"
                className="flex-1"
              >
                Test Sign Out
              </Button>
            </div>
          </div>

          {/* Current User Status */}
          <div className="bg-neutral-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Current Authentication Status
            </h3>
            
            {user ? (
              <div className="space-y-2">
                <p className="text-green-600 font-medium">✅ Authenticated</p>
                <div className="text-sm text-neutral-600">
                  <p><strong>ID:</strong> {user.id}</p>
                  <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ) : (
              <p className="text-red-600 font-medium">❌ Not authenticated</p>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="flex space-x-4">
              <Button
                as="a"
                href="/auth/signin"
                variant="outline"
                size="sm"
              >
                Go to Sign In Page
              </Button>
              <Button
                as="a"
                href="/auth/signup"
                variant="outline"
                size="sm"
              >
                Go to Sign Up Page
              </Button>
              <Button
                as="a"
                href="/dashboard"
                variant="outline"
                size="sm"
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
