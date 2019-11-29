import React, { useState, useEffect, useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const Canvas = props => {
  const canvasRef = useRef()
  const contextRef = useRef()
  // const [context, setContext] = useState(null)
  const [drawing, setDrawing] = useState(false)
  const [[width, height], setSize] = useState([window.innerWidth, window.innerHeight])

  // 直接使用自定义 hooks
  useWindowSize(() => {
    setSize([window.innerWidth, window.innerHeight])
  })

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d')
    }
  }, [canvasRef])

  const startDrawing = e => {
    const context = contextRef.current
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.lineWidth = 10
    context.strokeStyle = props.color
    context.beginPath()

    context.moveTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    )
    setDrawing(true)
  }

  const processDrawing = e => {
    const context = contextRef.current

    const coords = [
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    ]

    if (drawing) {
      context.lineTo(...coords)
      context.stroke()
    }
  }

  const stopDrawing = e => {
    const context = contextRef.current

    context.closePath()
    setDrawing(false)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width={props.width || width}
        height={props.height || height}
        onMouseDown={startDrawing}
        onMouseMove={processDrawing}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </>
  )
}

export default Canvas