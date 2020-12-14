import React from 'react'
import { Nav } from './Nav'
import Title from './Title'

export const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title='Box office' subtitle='Are you looking for a movie or an actor?' />
            <Nav/>
            {children}
        </div>
    )
}
