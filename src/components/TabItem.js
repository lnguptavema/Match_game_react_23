import './TabItem.css'

const TabItem = props => {
  const {eachItem, clickeListITem, activeTabId, key} = props
  const {displayText, tabId} = eachItem

  const clickedITem = () => {
    clickeListITem(tabId)
  }

  const classNameItem = activeTabId ? 'listName' : ''

  return (
    <li key={key} className={`${classNameItem}`}>
      <button type="button" onClick={clickedITem}>
        {' '}
        <h1>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
