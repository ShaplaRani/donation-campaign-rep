

const Banner = () => {
    return (
        <div className="text-center py-52 bg-no-repeat bg-cover bg-[url('/src/assets/Logo.png')]">
            <h2 className="font-bold text-5xl text-black mb-10">I Grow By Helping People In Need</h2>
            <from >
                  <input className="border border-inherit p-4 rounded-s-lg w-[400px] " type="text" name="name" id=""placeholder="Search here...." />
                  <input className="bg-red-500 font-semibold text-base rounded-e-lg text-white py-4 px-6" type="submit" value="Search" />
            </from>

        </div>
    );
};

export default Banner;