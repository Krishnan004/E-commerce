import React, { useState, useEffect } from 'react'

const Filter = ({ setProduct, fetch, product }) => {
    const [min,setMin]=useState(1);
    const [max,setMax]=useState();
    const handleMinChange = (e) => {
        setMin(e.target.value);
      };
    
      const handleMaxChange = (e) => {
        setMax(e.target.value);
      };
    const [deal, setDeal] = useState([
        {
            name: "White Printed Coffee Mug",
            rate: 50
        },
        {
            name: "Printed Brown Tshirt",
            rate: 40
        },
        {
            name: " Typography Teal Printed Tshirt",
            rate: 30
        },
        {
            name: "Printed Green Tshirt",
            rate: 20
        },
        {
            name: "White Printed Coffee Mug",
            rate: 10
        },
        {
            name: "Printed Green Tshirt",
            rate: 50
        },

    ])

    const [mugCount, setmugCout] = useState(0)
    const [tshirtCount, setTshirtCount] = useState(0)

    useEffect(() => {
        const mcount = fetch.filter(item => item.name === "Mug").length;
        const tcount = fetch.filter(item => item.name === "Tshirts").length;
        setmugCout(mcount)
        setTshirtCount(tcount)
    }, [])

    const handleFilter = (name) => {
        const filteredItems = fetch.filter((item) => item.name === name);
        setProduct(filteredItems);
    };

    const handlePriceFilter = (e) => {
        const filterValue = e.target.value;
        console.log(min+" "+max)
        const filteredItems = fetch.filter((item) => item.rate >= min && item.rate<=max);
        setProduct(filteredItems);
        // const filteredProducts = product.filter((item) => item.rate > filterValue);
        // setProduct(filteredProducts);
    };
    return (
        <div className="flex flex-col gap-20 text-gray-700 p-4">
            <header >
                <h1 className="text-4xl font-semibold m-2">Filter by price</h1>
                <div className="">
                {/* <input
                    type="range"
                    min="10"
                    max="1"
                    value={min}
                    className="absolute top-0 left-7 rotate-180"
                    onChange={handleMinChange}
                /> */}
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={max}
                    className="w-full"
                    onChange={handleMaxChange}
                />
                </div>
                <div className="flex justify-end m-6">
                    <button className="bg-red-500 text-white rounded px-2" onClick={handlePriceFilter}>APPLY</button>
                </div>
            </header>
            <div >
                <h1 className="text-xl leading-loose font-medium">Categories</h1>
                <div>
                    <div className="flex justify-between leading-loose">
                        <button className="text-red-400" onClick={() => handleFilter("Mug")}>Mugs</button>
                        <p>({mugCount})</p>
                    </div>
                    <div className="flex justify-between">
                        <button className="text-red-400" onClick={() => handleFilter("Tshirts")}>Tshirt</button>
                        <p>({tshirtCount})</p>
                    </div>
                </div>
            </div>
            <div >
                <h1 className="text-xl">Hottest Deals</h1>
                <div className="grid grid-cols-2">
                    {deal.map((item, index) => (
                        <div key={index} className=" p-4 rounded-lg shadow-sm relative ">
                            <img
                                src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2018/06/tshirt5-300x300.jpg"
                                alt={item.name}
                                className="w-full h-auto object-cover"
                            />
                            <div className="mt-4 text-center">
                                <h2 className="text-sm text-red-500">{item.name}</h2>
                                <p className="">{item.rate}</p>
                            </div>
                            <div className="size-10 p-2 rounded-full  bg-white border absolute top-0 right-0 text-xs">Sale</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
