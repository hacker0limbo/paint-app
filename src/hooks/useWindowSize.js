import { useState, useEffect } from 'react'

const useWindowSize = callback => {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    const handleResize = () => {
      // callback 为在调整 window size 的时候做的一些其他事情
      callback()
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [callback])

  return [windowWidth, windowHeight]
}

export default useWindowSize