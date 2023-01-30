import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDeleteEachTrack = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="track-container">
      <div className="track-left-container">
        <img src={imageUrl} alt="track" className="track-thumbnail" />
        <div className="track-of-container">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="track-right-container">
        <p className="track-duration">{duration}</p>
        <button
          onClick={onDeleteEachTrack}
          className="delete-button"
          type="button"
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongItem
