import { Link } from "react-router-dom"
import image from '../../assets/images/muksam.jpg'
import { navMenu } from "../../constants/navList"
import Button from "../Common/Button"
const Navbar = () => {
  return (
    <>
    
<header className="p-4 shadow-lg border-rounded bg-amber-50 dark:bg-gray-800 ">

    
   

  <section className="max-w-7xl mx-auto flex justify-evenly items-center group">
    <div className="mr-auto">
        <div className="size-14 border rounded-full overflow-hidden border-black shadow-lg hover:rotate">
      <img src={image} />
        </div>  

     </div>
    <input type="checkbox" id="nav-toggle" hidden />
    <menu className="flex gap-4 text-lg font-semibold fixed md:static md:gap-8 bg-white md:bg-transparent left-0 top-20 w-full md:w-auto shadow-lg md:shadow-none flex-col md:flex-row justify-center md:justify-start p-4 md:p-0 *:border-b md:*:border-none border-b-gray-200 md:border-b-0 transition-all duration-300 ease-in-out -translate-y-[200%] group-has-checked:translate-y-0 md:translate-y-0 z-10">
     
     <ul className="flex gap-16 mt-6">
      {
        navMenu.map(({title,route})=>(
          <li className="inline text-black hover:text-orange-500 cursor-pointer transition"> <Link to={route}> {title} </Link></li>
        ))
      }
      <Button className= "text-2xl"
      label = 'Clickme'
      color = "LightGreen " 
      onClick={() => alert("Button 1 clicked")}
      />
      <Button className= "text-2xl"
      label = 'Dont Click me'
      color ="LightBlue "
      onClick={() => alert("I warned you")}
      />
     </ul>
    </menu>
    <label htmlFor="nav-toggle" className="cursor-pointer md:hidden text-2xl font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </label>
    <label htmlFor="nav-toggle" className="hidden fixed group-has-checked:block top-0 left-0 right-0 bottom-0 bg-black/10 z-0" />
  </section>
</header>

</>
  )
}

export default Navbar