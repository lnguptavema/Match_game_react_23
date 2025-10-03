import './ListItem.css'

const ListItems = props => {
  const {eachItem, clickedImg} = props
  const {imageUrl, id} = eachItem

  const clickedImgListItem = () => {
    clickedImg(id)
  }

  return (
    <li className="ListItemList">
      <button type="button" key={id} onClick={clickedImgListItem}>
        <img src={imageUrl} alt="imageUrl" />
      </button>
    </li>
  )
}

export default ListItems
