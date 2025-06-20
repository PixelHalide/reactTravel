import { Link } from 'react-router-dom';

const Dropdown = ({contents}) => {
  return (
    <div className='flex flex-col'>
      <ul className='flex flex-col text-center'>
        {contents.map((content, idx) => (
          <li key={idx} className="hover:bg-gray-700 py-2">
            <Link to={`/${content.toLowerCase()}`} className="block w-full">
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown