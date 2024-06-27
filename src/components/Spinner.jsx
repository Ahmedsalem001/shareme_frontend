import {ColorRing} from 'react-loader-spinner'
const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
    <ColorRing
    className="m-5"
    />
    <p className='text-lg text-center px-2 animate-pulse text-rose-700'>{message}</p>
    </div>
  )
}

export default Spinner