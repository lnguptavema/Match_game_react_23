import './MainImage.css'

const MainImage = props => {
  const {list} = props

  return (
    <li className="container" key={list.id}>
      <img className="imageValue" src={list.imageUrl} alt="match" />
    </li>
  )
}

export default MainImage
