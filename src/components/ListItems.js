import './ListItem.css'

const ListItems = props => {
  const {eachItem, clickedImg} = props
  const {imageUrl, thumbnailUrl, id} = eachItem

  const clickedImgListItem = () => {
    clickedImg(id)
  }

  return (
    <li className="ListItemList">
      <button type="button" key={id} onClick={clickedImgListItem}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ListItems
