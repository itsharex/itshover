"use client"
import React from 'react'
import { ICON_LIST } from '@/icons/index'
import IconCard from './ui/icon-card'

const IconList = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center max-w-8xl">
            {ICON_LIST.map((icon) => (
                <IconCard key={icon.name} name={icon.name} icon={icon.icon} />
            ))}
        </div>
    )
}

export default IconList