

interface Props {
  MainImage: string
  SecondImage: string
  title: string
}

export const View01: React.FC<Props> = ( {MainImage, SecondImage, title} ) => {
  return (
    <article className="relative w-72 bg-green-800 p-1 -skew-x-12 outline-0 outline-green-500  group rounded-4xl hover:perspective-[250px]  transition-all
    [transform-style:preserve-3d]  duration-300 hover:[transform:perspective(250px)_rotateX(10deg)_translateY(-5%)_translateZ(0)]

    before:content-[''] before:absolute before:bottom-0 before:h-full before:w-full 
    before: bg-linear-90 before:bg-gradient-to-b before:from-lime-800   before:to-transparent before:rounded-4xl  
    
    before:opacity-0 before:transition-all hover:before:opacity-100">

      <img src={MainImage} alt={title} className="shadow-2xl shadow-green-800 outline-0 rounded-4xl"   />

      <img 
      src={SecondImage} 
      className="absolute w bottom-0 left-0 right-0 w-32 m-auto translate-y-8 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-3" 
      alt="" />

    </article>
  )
}