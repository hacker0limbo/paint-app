import React from 'react'

const RefreshButton = props => {
  const { refresh } = props

  return (
    <button
      className="button-refresh-colors"
      onClick={refresh}
    >
      &#8634;
    </button>
  )
}

export default React.memo(RefreshButton)