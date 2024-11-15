import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

interface props {
    previousroute : string
}

const BackButton = ({previousroute = "/"} : props) => {
  return (
    <div className='flex'>
        <Link to={previousroute} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-3x1' />
        </Link>
    </div>
  )
}

export default BackButton