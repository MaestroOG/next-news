'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, speed: 400 })

export default function ProgressBar() {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        NProgress.start()
        NProgress.done()
    }, [pathname])

    return null
}
