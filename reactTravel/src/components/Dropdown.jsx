
const Dropdown = ({contents}) => {
  return (
    <div className='flex flex-col'>
        <ul className='flex flex-col text-center'>
            {contents.map((content, idx) => (<li key={idx}>{content}</li>))}
        </ul>
    </div>
  )
}

export default Dropdown
