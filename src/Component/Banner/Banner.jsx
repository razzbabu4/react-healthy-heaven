
const Banner = () => {
    return (
        <div className="px-4 lg:px-24 my-4 lg:my-12">
            <div className="rounded-2xl hero min-h-screen bg-[url('https://i.ibb.co/T158DJF/banner.jpg')]">
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-center text-white">
                    <div className="lg:w-2/3">
                        <h1 className="my-5 lg:my-16 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="my-5 lg:my-16 w-full">Experience the ultimate fusion of flavors and ambiance at HealthyHeaven. From delectable dishes crafted with the finest ingredients to an inviting atmosphere that exudes warmth and sophistication, our restaurant promises a dining experience like no other.</p>
                        <div className="flex gap-5 justify-center">
                        <button className="btn bg-[#0BE58A] border-none">Explore Now</button>
                        <button className="btn bg-transparent text-white">Our Feedback</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;