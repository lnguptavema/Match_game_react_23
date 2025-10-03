import './MainImage.css'

const MainImage = props => {
  const {list} = props

  return (
    <li className="container" key={list.id}>
      <img className="imageValue" src={list.imageUrl} alt="imagevalue" />
    </li>
  )
}

export default MainImage
