export default function Home() {
  return (
    <section className="flex flex-col justify-between">
      <div className="px-10">
        <nav className="flex justify-between items-center border-b-2 border-gray-400 py-5">
          <ul className="flex space-x-8">
            <li className="flex-initial">CORSEN</li>
            <li className="flex-initial text-xs font-bold pt-1">Home</li>
            <li className="flex-initial text-xs font-bold pt-1">Pages</li>
            <li className="flex-initial text-xs font-bold pt-1">Shop</li>
            <li className="flex-initial text-xs font-bold pt-1">Portfolio</li>
            <li className="flex-initial text-xs font-bold pt-1">Blog</li>
          </ul>

          <div className="flex space-x-4">
            <div className="flex">
              <p>Search</p>
              <p>0</p>
            </div>
            <div className="flex">
              <p>Cart</p>
              <p>0</p>
            </div>
          </div>
        </nav>
      </div>

      <footer className="flex flex-col justify-start items-start space-y-3 px-20">
        <p className="lg:text-5xl ">Mixed Tiles</p>

        <div className="max-w-sm">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>

        <div className="border-2 border-black">
            <p className="text-xs font-bold px-10 py-3">SHOP COLLECTION</p>
        </div>
      </footer>
    </section>
  );
}
