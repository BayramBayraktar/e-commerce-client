import React from 'react'
import Link from 'next/link'
import Style from './style.module.css'
import { motion } from 'framer-motion'

//components
import Page_detail_header from '../../components/page_detail_header'
import Banner_2 from '../../components/banner-2'

const Categories = () => {
    return (
        <motion.div
            className={Style.Wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Page_detail_header title="ALL CATEGORIES" />
            <div className={Style.container} >
                <Link href='/arvi' className={Style.content_big}>
                    ARvi
                </Link>
                <Link href='/desınger' className={`${Style.contet_tall}`}>
                    DESINGER
                </Link>
                <Link href="/art">ART</Link>
                <Link href='/sport' className={`${Style.contet_tall}`}>
                    SPORT
                </Link>
                <Link href='/shoes'>SHOES</Link>
                <Link href='/kıds' className={`${Style.content_wide}`}>
                    KIDS
                </Link>
            </div>

            <div className={Style.spread_container}>
                <Link href='/home' className={`${Style.spread}`}>
                    HOME
                </Link>
                <Link href='/travel' className={`${Style.spread}`}>
                    TRAVEL
                </Link>
                <Link href='/women' className={`${Style.spread}`}>
                    WOMEN
                </Link>
            </div>
            <Banner_2 />
        </motion.div>
    )
}

export default Categories