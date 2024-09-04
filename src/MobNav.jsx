import {Home, Globe, MessageCircle , CircleUserRound, Mail  } from 'lucide-react'

function MobNav() {

  return (
    <>
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="flex justify-around items-center py-2">
          <a href="#home" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Home size={24} />
            <span className="text-xs">Home</span>
          </a>
          <a href="#services" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Globe size={24} />
            <span className="text-xs">Services</span>
          </a>
          <a href="https://wa.me/+233541663677" target="blank" className="flex flex-col items-center text-white bg-green-500 p-2 rounded-full -mt-6">
            <MessageCircle size={32} />
            <span className="text-xs">WhatsApp</span>
          </a>
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <CircleUserRound size={24} />
            <span className="text-xs">About</span>
          </a>
          <a href="#contact" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Mail size={24} />
            <span className="text-xs">Contact</span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default MobNav