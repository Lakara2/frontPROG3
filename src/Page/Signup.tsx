import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { SpacerWithText } from '../Atoms/SpacerWithText'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { SocialSignIn } from './SocialSignIn'
import "../App.css"

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current?.value, passwordRef.current?.value)
      navigate('/')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-4 container-fluid">
                <h2 className="text-center text-yellow">
              Create an account
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
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

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="input-100 one"
                  placeholder="Password"
              />
            </div>
              <div>
                <label className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  className="input-100 one"
                  placeholder="Confirm Password"
                />
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
            <div className="text-sm text-center">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500"
                to="/login"
              >
                Already have an account?
              </Link>
            </div>
          </form>

          <SpacerWithText text="or" />
          <SocialSignIn setError={setError} enabled={!loading} />
        </div>
      </div>
    </div>
    </>
  )
}
