const OptionButton = props => {
  const {details, activeTabChange} = props
  const {tabId, displayText} = details

  const buttonClicked = () => {
    activeTabChange(tabId)
  }

  return (
    <li>
      <button type="button" onClick={buttonClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default OptionButton
