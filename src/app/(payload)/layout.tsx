/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './importMap'
import './custom.scss'

type Args = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: 'Admin – Drogurile Ucid',
}

const Layout = ({ children }: Args) => (
    <RootLayout
        config={config}
        importMap={importMap}
        serverFunction={handleServerFunctions as any}
    >
        {children}
    </RootLayout>
)

export default Layout
