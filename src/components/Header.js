
import PropTypes from 'prop-types'; //shortcut is impt
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header'>
        {/* <h1 style={{ color:'green', backgroundColor:'black'}}> {title}</h1> */}
        <h1> {title}</h1>
        <Button color='green' text='Add' />
    </header>
  )
};

Header.defaultProps = { //this will show if title is not set
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = { //another method to add style instead of adding inline css and style={{ headingStyle }} to the H1
    color:'green', 
    backgroundColor:'black'
}

export default Header;
