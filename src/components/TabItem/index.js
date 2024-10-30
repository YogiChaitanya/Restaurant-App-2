import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickedTab} = props
  const {menuCategory, menuCategoryId} = tabDetails

  const activeTabStyling = isActive ? 'active-tab-item' : ''

  const onClickUpdatedTab = () => {
    clickedTab(menuCategoryId)
  }

  return (
    <li className={`each-tab-item ${activeTabStyling}`} key={menuCategoryId}>
      <button
        className="tab-category-button"
        onClick={onClickUpdatedTab}
        type="button"
      >
        {menuCategory}
      </button>
    </li>
  )
}

export default TabItem
