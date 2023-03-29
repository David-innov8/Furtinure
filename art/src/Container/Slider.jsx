import React from 'react'
import {useState,useEffect} from 'react'
import Slider from 'react-slick'


function Sliders(){
    const [results, setResults] = useState([])
    const api_url = 'https://fakestoreapi.com/products'
    const controller = new AbortController();

    const fetchData = ()=>{
        fetch(api_url)
        .then(response=> response.json())
        .then((json)=> setResults(json))

     console.log()
    }


    useEffect(()=>{
        // async function getData(){
        //     const response = await fetch(api_url)
        //     const data = await response.json()
        //     setResults(data)
        // }
    
        // getData()
        fetchData()

    //  return()=>{
    //     controller.abort()
    //  }
    },[])

   
    

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return(
        // <Slider {...settings}>
        //    {
        //     results.map((item, index)=>{
        //         <div key={index}>
        //             {item.title}
        //             {/* <h2>{item.title}</h2>
        //             <p>{item.description}</p> */}
        //         </div>
        //     })
        //    }
        // </Slider>
        <Slider {...settings}>

             {
                results.map((results, index)=>(
                    <div key={index}>
                        {results.title}
                    </div>
                ))
            }
        </Slider>
           
        
    )
}

export default Sliders