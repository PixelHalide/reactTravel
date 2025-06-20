
const Dropdown = ({contents}) => {
  return (
    <div className='flex flex-col'>
      <ul className='flex flex-col text-center'>
        {contents.map((content, idx) => (
          <li key={idx} className="hover:bg-gray-200 dark:hover:bg-gray-700 py-2">
            <div className="block w-full">
              {content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown