import italyImageUrl from '../../assets/italywide.jpg';

const TopBanner = () => {
  return (
    <div className="justify-center relative transition-all">
        <img src={italyImageUrl} alt="Italy" className="max-w-full blur-xs"/>
        <div className='absolute inset-0 flex flex-col items-center justify-center text:4xl md:text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          <p className='block'>Redefining Travel -</p>
          <p className='block'>One step at a Time.</p>
          <div className='text-lg md:text-2xl mt-14'>
            <button class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 cursor-pointer">Find out what's hot</button>
          </div>
        </div>
    </div>
  )
}

export default TopBanner
