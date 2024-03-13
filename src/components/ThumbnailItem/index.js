// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onThumbnail = () => {
    setThumbnailId(id)
  }

  return (
    <li className="thumbnail-list">
      <button type="button" className="thumbnail-button" onClick={onThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
