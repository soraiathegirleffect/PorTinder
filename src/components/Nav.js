import whitelogo from '../images/portinderwhite3.png'
import colorlogo from '../images/portindercolor3.png'

const Nav = ({ simple, authToken } ) => {


    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={simple ? colorlogo : whitelogo}/>

            </div>

            {!authToken && <button className='nav-button'>Login</button>}


        </nav>
    )
}
export default Nav 