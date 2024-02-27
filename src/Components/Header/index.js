import './index.css'

const Header = props => {
  const {score, time} = props

  return (
    <nav className="header-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
          className="header-image"
        />
      </div>
      <div>
        <div className="header-content">
          <p>Score: {score} </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="header-icon"
          />
          <p> {time} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
