import React from 'react'

const ColorPicker = props => {
  // colors 是一组 hex 的 schema 值
  const { colors, activeColor, setActiveColor } = props

  if (colors.length === 0) {
    return <h3>Loading...</h3>
  }

  // radio 使用 onChange 只有在重新选择的时候才会触发, click 为即使在重复选择的时候也会触发对应函数
  return (
    <fieldset className="color-picker">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={e => setActiveColor(e.target.value)}
          />
          <span style={{ background: color }} />
        </label>
      ))}
    </fieldset>
  )
}

export default ColorPicker