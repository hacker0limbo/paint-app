import React, { useState, useEffect, useCallback, useRef } from 'react'
import randomColor from 'randomcolor'
import PaintTitle from './PaintTitle'
import ColorPicker from './ColorPicker'
import useWindowSize from '../hooks/useWindowSize'
import RefreshButton from './RefreshButton'
import Canvas from './Canvas'

const Paint = () => {
  const [colors, setColors] = useState([])
  const [activeColor, setActiveColor] = useState(null)
  const [visible, setVisible] = useState(false)
  // 使用 ref 永远保存最新(之前)的计时器 id
  let timeoutId = useRef()

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        setColors(res.colors.map(color => color.hex.value))
        setActiveColor(res.colors[0].hex.value)
      })
  }, [])

  useEffect(() => {
    getColors()
  }, [getColors])

  const [windowWidth, windowHeight] = useWindowSize(() => {
    // 设置显示 window size 的文字可见
    setVisible(true)
    clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => {
      setVisible(false)
    }, 500)
  })

  return (
    <div className="app">
      <header style={{ borderTop: `10px solid ${activeColor}` }}>
        <div className="app">
          <PaintTitle />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <RefreshButton refresh={getColors} />
        </div>
      </header>

      {activeColor && (
        <Canvas
          color={activeColor}
        />
      )}

      <div className={`window-size ${visible ? '' : 'hidden'}`}>
        {windowWidth} x {windowHeight}
      </div>
    </div>

  )
}

export default Paint