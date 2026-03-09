import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()

    const [item, setItem] = useState("")

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        setItem(localStorage.getItem("token"))
    }, [])

    function logout() {
        localStorage.removeItem("token")
        router.push("/")
    }

    return (
        <>
            <Script src="../js/toggle.js"></Script>

            <nav className="navbar-links">
                <ul className="nav-links">

                    {item !== null ?
                        <li><Link href="/user">User</Link></li>
                        : null}

                    {item !== null ?
                        <li onClick={logout}><Link href="/">Logout</Link></li>
                        : null}

                    <li><Link href="/signin">Sign in</Link></li>
                    <li><Link href="/signup">Sign up</Link></li>
                    <li><Link href="/">Winderton</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="https://www.youtube.com/channel/winderton">Youtube</Link></li>
                    <li><Link href="https://www.patreon.com/winderton">Patreon</Link></li>

                </ul>

                <a className="burg">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </a>

            </nav>
        </>
    )
}

export default Nav