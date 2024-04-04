import React from 'react'

const Bar = ({length, index}) => {
  const barStyle={
    height: length,
    background:"linear-gradient(90deg, rgba(155,155,158,1) 42%, rgba(157,157,173,1) 56%, rgba(157,157,166,1) 71%, rgba(30,33,33,1) 100%)"
  }
  return (
    <>
      <div key={index} id={index} className="bars rounded-sm w-3" style={barStyle}></div>
    </>
  )
}

export default Bar;
