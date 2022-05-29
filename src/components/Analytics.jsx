import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto" src={Laptop} alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS COMPANY</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl py-2 font-bold">Manage Data Analytics Centrally</h1>
                    <p>
                        Morbi vestibulum volutpat enim. Etiam imperdiet imperdiet orci. Nunc egestas, augue at pellentesque laoreet, 
                        felis eros vehicula leo, at malesuada velit leo quis pede. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                        Curabitur blandit mollis lacus. Phasellus viverra nulla ut metus varius laoreet. Nam at tortor 
                        in tellus interdum sagittis. Nunc egestas, 
                        augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;