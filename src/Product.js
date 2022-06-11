import React, { Component, useState } from 'react';
import Products from './data';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { counter } from '@fortawesome/fontawesome-svg-core';

const allCategoryvalue = [...new Set(Products.map((currentelement) => { return currentelement.category; })), 'all']

const allCategoryvalue2 = [...new Set(Products.map((currentelement) => { return currentelement.brand; })), 'all']

// obect to Array 



// console.log(allCategoryvalue)

const Product = () => {

    

    const [items, setItems] = useState(Products);
    const [sorted, setSorted] = useState(Products);

    const [catItems, setCatItems] = useState(allCategoryvalue);
    const [catItems2, setCatItems2] = useState(allCategoryvalue2);


    const filterItem = (catgItem) => {

        if (catgItem === "all") {
            setItems(Products);
            
            console.log("dadadadsada")
            console.log(Products)
            return
        }

        const updatedItems = Products.filter((curtele) => {
            return (curtele.category) === catgItem;

        })
        setItems(updatedItems);
        console.log("this is after applying categories fileter updatedItems ")
        console.log(updatedItems)
        
    }
    // const ProductPrice = Products.price;




    const filterItem2 = (catgItem2) => {
        if (catgItem2 === "all") {
            setItems(Products);
            return
        }

        const updatedItems = Products.filter((curtele2) => {
            return (curtele2.brand) === catgItem2;

        })
        setItems(updatedItems);
        console.log("this is after applying barnds fileter updatedItems ")
        console.log(updatedItems)
        
    }

    const sorting=(type)=>{
        if(type==='asc'){
            Products.sort((a,b)=>{
                return a.price-b.price
            })
            setItems(Products)
          
           
            console.log("this is after applying barnd srotting asc Products ")
            console.log(Products);
        }
        

        if(type==='desc'){
             Products.sort((a,b)=>{
                return b.price-a.price
            })
            setItems(Products)
           
            console.log("this is after applying barnd srotting dasc Products ")
            console.log(Products);
        }
      
        
    }
   

      






    return (
        <>
            <nav>
                <h1>Products</h1>
                <div className="filter">





                    <div className='butns'> <div className="span"> </div>

                        {
                            catItems.map((cuel) => {
                                return <button className='btn' onClick={() => filterItem(cuel)}>{cuel}</button>
                            })
                        }


                    </div>
                    <div class="brands"> Brands
                        <div class="items">
                            {

                                catItems2.map((cuel2) => {
                                    return <div class="bitems" onClick={() => filterItem2(cuel2)}>{cuel2}</div>
                                })

                            }

                        </div>

                    </div>
                    <div className="brands price-filter"> Sort By Price
                        <div className="items">
                            <div className="bitems">Default </div>
                            <div className="bitems"onClick={()=>sorting('asc')}>Low to High </div>
                            <div className="bitems"onClick={()=>sorting('desc')}>High to Low</div>

                        </div>

                    </div>









                </div>


            </nav>

            {/* {
                items.map((ele) => {
                    const { id, title, images, thumbnail, price, category, discountPercentage, rating, stock, brand, description } = ele;

                    return (
                        <>  <div>
                            {category}
                        </div></>
                    )
                })
            } */}
            <div className="container">





                <div className="products_container">

                    {

                        items.map((elem) => {
                            const { id, title, images, thumbnail, price, category, discountPercentage, rating, stock, brand, description } = elem;
                            return (

                                <div className="products">
                                    <div className="image">
                                        <img src={thumbnail} alt="image" />
                                    </div>
                                    <div className="title">
                                        <h2>{title}</h2></div>

                                    <div className="stars">
                                        <span className="rating">{rating}</span>

                                        <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                                    </div>

                                    <div className="price">
                                        <div className="sellingprice">
                                            ₹ {Math.floor(price * ((100 - discountPercentage) / 100))}</div>

                                        <div className="real">
                                            <span className="realprice">₹ {price}</span>
                                            <span className="discount_prc">{discountPercentage}% off</span></div>
                                    </div>



                                    <div className="desc">{description}</div>
                                </div>

                            )
                        })
                    }




                </div>
            </div>
        </>
    );

}

export default Product;