import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { SpacerWithText } from '../Atoms/SpacerWithText'
import { SocialSignIn } from './SocialSignIn'

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) navigate('/')
    }, [])

    async function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current?.value, passwordRef.current?.value)
            navigate('/')
        } catch {
            setError('Failed to log in')
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
                            <h2 className="text-center text-yellow">
                                Sign in to your account
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

                        <div className="container">
                        <div className="row mt-4 mb-4">

                            <div className="col-6 text-left">
                                <input id="remember-me" name="remember-me" type="checkbox" className="rounded"/>
                                <label htmlFor="remember-me" className="ml-2 block text-light">Remember me</label>
                            </div>

                            <div className="col-6 text-right">
                                <Link className="text-danger" to="/forgot-password">Forgot your password ?</Link>
                            </div>

                        </div>
                    </div>

                        <div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="relative transition-colors flex w-full justify-center rounded-md
                                                  border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-light
                                                  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                        </span> Sign in

                            </button>

                        </div>
                        <div className="text-sm text-center m-3">
                            <Link className="text-danger font-medium"
                                to="/signup">Don't have an account?</Link>
                        </div>
                    </form>
                                <div className="col-12 mt-2 mb-2"><SpacerWithText text="or"/></div>
                                <div className="col-12"><SocialSignIn setError={setError} enabled={!loading}/></div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}