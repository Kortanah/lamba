
import {ChevronRight, Globe, Banknote, MessageCircle,Smartphone,Bitcoin,Building2,Umbrella} from "lucide-react"

function Header() {
  return (
    <>
    {/* **************Header Section************** */}
    <section id="home" className="pt-10  pb-0 bg-gradient-to-r from-rose-100 to-teal-100 ">
          <div className="container mx-auto px-4 flex items-center justify-center  max-md:flex-col max-sm:flex-col">
        <div className="max-md:text-center max-sm:text-center ">
            <h1 className="text-4xl lg:text-6xl md:text-4xl font-bold text-gray-800 mb-4 ">Global Money <br/> Transfer Made Easy</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Fast, secure, and affordable money transfers to over 15 countries</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center  max-md:mx-auto max-md:my-4  max-sm:mx-auto">
             <a href="https://wa.me/+233541663677" target="blank"> Start Transfer Now </a><ChevronRight className="ml-2 h-5 w-5" />
            </button>
         </div>
         <div className="px-10">
            <div className="absolute ">
                <img className="relative bottom-0 right-40" src="/cryp.png" alt="" />
                <img className="relative bottom-0 left-40 w-80" src="/curen.png" alt="" />
            </div>
            <img className="w-80" src="/co.png" alt="" />
         </div>
            
          </div>
        </section>

     {/* **************Service Section************** */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-600 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-blue-600 mb-4">
                  <Smartphone className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Mobile Money</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>MTN</li>
                  <li>Vodacash</li>
                  <li>AirtelTigo</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-green-600 mb-4">
                  <Globe className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">International Transfers</h3>
                </div>
                <div className="text-gray-600">
                <p>Send money to multiple countries across Africa, Europe, Asia, and North America.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md ">
                <div className="flex items-center text-purple-600 ">
                  <Bitcoin className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Crypto Exchange</h3>
                </div>
                <div className="text-gray-600">
                <p>Exchange cryptocurrencies securely and efficiently.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-orange-600 mb-4">
                  <Building2 className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Bank Transactions in Ghana</h3>
                </div>
                <div className="text-gray-600">
                <p>Seamless bank transfers within Ghana.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-red-600 mb-4">
                  <Umbrella className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Insurance Policy</h3>
                </div>
                <div className="text-gray-600">
                <p>Protect your finances with our insurance options.</p>
                </div>
              </div>

             </div>
            </div>
        </section>

    {/* *********************About Section******************* */}

        <section id="about" className="py-20 bg-gradient-to-b from-blue-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Lambano360</h2>
              <p className="text-gray-600 mb-8">
                Lambano360 is your trusted partner for global money transfers and financial services. With our cutting-edge technology and extensive network, we provide fast, secure, and affordable solutions for all your international money transfer needs.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-2xl">Global Reach</h3>
                  <p className=" text-gray-600">Transfer money to multiple countries across Africa, Europe, Asia, and North America.</p>
                </div>
                <div>
                  <Banknote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-2xl">Competitive Rates</h3>
                  <p className=" text-gray-600">Enjoy some of the best exchange rates and low fees in the industry.</p>
                </div>
                <div>
                  <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 text-2xl">24/7 Support</h3>
                  <p className=" text-gray-600">Our customer support team is always ready to assist you with any queries.</p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* ***************************Contact Section************** */}

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col items-center" >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
     
            <div className="p-4 text-center">
              <p className="text-gray-400">Email: support@lambaXpresstransfer.com</p>
              <p className="text-gray-400">Phone: +233 (054) 166 3677</p>
            </div>

              <button 
                type="submit"
                className="w-60 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded-lg"
              >
               <a href="tel:+233541663677"> Lets Talk </a>
              </button>
         
          </div>
        </section>

    
  </>)
}

export default Header