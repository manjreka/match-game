import './index.css'

const ResponsiveScreen = props => {
  const {url} = props

  return (
    <ul>
      <li>
        <img src={url} alt="match" />
      </li>
    </ul>
  )
}

export default ResponsiveScreen
