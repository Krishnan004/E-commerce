import React, { useState, useEffect } from 'react'
import api from '../api/mainurl';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Filter = ({ setProduct, fetch, product }) => {
    const [min,setMin]=useState(0);
    const [max,setMax]=useState();
    const [rangeMin,setRangeMin]=useState()
    const [rangeMax,setRangeMax]=useState()
    const [count,setCount]=useState({ categoryCounts: {} });
    const uniqueCategories = [...new Set(fetch.map(item => item.category))];
    const handleMinChange = (e) => {
        setMin(e.target.value);
      };
    
      const handleMaxChange = (e) => {
        setMax(e.target.value);
      };
    const [deal, setDeal] = useState([])

    useEffect(()=>{
        // fetch product details for hotdeal section in allproduct
        const fetchDeal=async()=>{
        const response=await api.get("/hotdeal")
        setDeal(response.data)
        }
        fetchDeal()
    },[])

    

    useEffect(() => {
        // Create a counts object
        const counts = {};
    
        // Populate the counts object with the number of occurrences of each category
        fetch.forEach(item => {
          counts[item.category] = (counts[item.category] || 0) + 1;
        });
    
        // Update the state with the counts object
        setCount(prevState => ({
          ...prevState,
          categoryCounts: counts
        }));
      }, [fetch]);


    const handleFilter = (name) => {
        const filteredItems = fetch.filter((item) => item.category === name);
        setProduct(filteredItems);
    };

    const handlePriceFilter = (e) => {
        const filterValue = e.target.value;
        console.log(min+" "+max)
        const filteredItems = fetch.filter((item) => item.price >= min && item.price<=max);
        setProduct(filteredItems);
        // const filteredProducts = product.filter((item) => item.rate > filterValue);
        // setProduct(filteredProducts);
    };

    useEffect(() => {
        if (fetch.length > 0) {
            const minPrice = fetch.reduce((acc, item) => item.price < acc ? item.price : acc, fetch[0].price);
            const maxPrice = fetch.reduce((acc, item) => item.price > acc ? item.price : acc, fetch[0].price);
            setRangeMin(minPrice);
            setRangeMax(maxPrice);
        }
    }, [fetch]);
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
                    min={rangeMin}
                    max={rangeMax}
                    value={max}
                    className="w-full"
                    onChange={handleMaxChange}
                />
                <div className="flex justify-around">
                <input className="border-2 border-gray-600  w-20 default-none" type="number" value={min}  onChange={handleMinChange}/>
                <input className="border w-20" type="number" value={max} onChange={handleMaxChange}/>
                </div>
                </div>
                <div className="flex justify-end m-6">
                    <button className="bg-red-500 text-white rounded px-2" onClick={handlePriceFilter}>APPLY</button>
                </div>
            </header>
            <div >
                <h1 className="text-xl leading-loose font-medium">Categories</h1>
                <div>
                    {uniqueCategories.map(item=>
                    <div key={item} className="flex justify-between leading-loose">
                        <button className="text-red-400" onClick={() => handleFilter(`${item}`)}>{item}</button>
                        <p>({count.categoryCounts[item]})</p>
                    </div>
                    )}
                    {/* <div className="flex justify-between">
                        <button className="text-red-400" onClick={() => handleFilter("T-shirt")}>Tshirt</button>
                        <p>({tshirtCount})</p>
                    </div> */}
                </div>
            </div>
            <div >
                <h1 className="text-xl">Hottest Deals</h1>
                {deal.length==0 &&
                     <Loading/>
                }
                <div className="grid grid-cols-2">
                
                    {deal.map((item, index) => (
                        <Link to={{
                            pathname: `/allproduct/${item.product_id}`
                          }}
                          state={{product_src:item.product_src,name:item.name,description:item.description,price:item.price,design:item.design,product_id:item.product_id}}
                          >
                        <div key={index} className=" p-4 rounded-lg shadow-sm relative ">
                            <img
                                src={item.product_src}
                                alt={item.category}
                                className="w-full h-auto object-cover"
                            />
                            <div className=" flex flex-col items-center gap-2 mt-4 text-center">
                                <h2 className="text-sm text-red-500">{item.name}</h2>
                                {/* <p className="">{item.category}</p> */}
                                <div className="flex gap-2 text-sm">
                                    <p className="line-through">₹{item.price}</p>
                                    <p>₹{item.discount_price}</p>
                                </div>
                            </div>
                            <div className="size-10 p-2 rounded-full  bg-white border absolute top-0 right-0 text-xs">Sale</div>
                        </div>
                        </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Filter
