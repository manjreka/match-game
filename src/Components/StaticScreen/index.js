import './index.css'

const StaticScreen = props => {
  const {details, thumbnailSelected} = props
  const {thumbnailUrl, id} = details

  const onThumbnailSelect = () => {
    thumbnailSelected(id)
  }

  return (
    <li>
      <button
        type="button"
        className="static-container"
        onClick={onThumbnailSelect}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="static-image" />
      </button>
    </li>
  )
}

export default StaticScreen
