import React from 'react'

const Badge = ({className,children}) => {
  return (
    <div className={`${className} inline-block text-[var(--background)] text-sm bg-[var(--foreground)] rounded-r-full rounded-l-full px-4`}>
        {children}
    </div>
  )
}

export default Badge