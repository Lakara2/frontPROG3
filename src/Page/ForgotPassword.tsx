import { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null)
  const { resetPassword } = useAuth()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    try {
      setMessage('')
      setLoading(true)
      await resetPassword(emailRef.current?.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setMessage('Failed to reset password')
    }

    setLoading(false)
  }
  return (
    <>
      <div className="contents order-2 order-md-1 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-4 container-fluid">
            <h2 className="mt-6 text-center text-3xl text-yellow">
              Password Reset
            </h2>
          </div>

          <form onSubmit={handleSubmit}>

            <input type="hidden" name="remember" defaultValue="true" />

            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  className="input-100 one"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
            </div>
            <div className="text-sm m-2 text-center">
              <Link
                className="font-medium text-bryan"
                to="/login"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
