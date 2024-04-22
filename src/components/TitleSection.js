import React from 'react'

const TitleSection = ({children,className}) => {
  return (
    <h3 className={`text-[20px] text-primary font-bold capitalize ${className}`}>{children}</h3>
  )
}

export default TitleSection