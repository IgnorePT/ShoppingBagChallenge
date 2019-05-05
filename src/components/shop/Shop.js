import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import {existOnWhishlist, existOnCart} from "./../../helpers/productHelpers";

import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import Pagination from '../pagination/Pagination';

import Header from "./../layout/header";
import Footer from "./../layout/footer";
import Wishlist from "./../pages/wishlist/Wishlist";

export default class Shop extends Component {

    state = {
        products: [],
        brands: [],
        cart: {
            products: [],
            subtotal: null,
        },
        errorMessage: "",
        filter: {
            brand: null,
            order: 1,
            page: null,
        },
        pagination: {
            pageNumber: null,
            elementsPerPage: null,
            prePage: null,
            nextPage: null,
            total: null,
            totalPages: null,
        },
        wishlist: []
    }

    /**
     * Add Products to wishlist
     * @param {object} product Product to add to whishlist
     * Todo: Save only the product id on whishlist 
     */
    addToWishlist = async (product) => {

        let wishlist = await this.getWishlist();

       if(existOnWhishlist(wishlist, product.id)){
            return this.removeFromWhishlist(wishlist, product.id)
       }
       
        wishlist =  [...wishlist, product ];
        localStorage.setItem("whishlist", JSON.stringify(wishlist));

        return this.getWishlist();
    }

     /**
     * Remove Product from wishlist
     * @param {array} wishlist Wishlist array elements 
     * @param {Number} productId Id of product to remove
     */
    removeFromWhishlist = (wishlist, productId) => {
  
        let filterWishlist = wishlist.filter(function(element) {
            return element["id"] !== productId;
       });

       localStorage.setItem("whishlist", JSON.stringify(filterWishlist));

       return this.getWishlist();
    }

    /**
     * Add Products to cart
     * @param {object} product Product to add to cart
     * Todo: Save only the product id on cart to fetch them dynamicly
     */
	addToCart = (product) => {
        //Todo
        const cart = this.state.cart.products;

        if(existOnCart(cart, product.id)){
            return console.log("Exists on cart");
        }

        axios.post("http://localhost:4000/cart", {product})
		.then((response) => {
            console.log(response);
            this.getCart();
        }).catch((err) => {
            console.log(err);
        });
        
    }

    /**
     * Remove Product from wishlist
     * @param {Number} productId Id of product to remove
     * Todo: Check response and show errors
     */
    removeFromCart = (productId) => {
        const data ={
            productId
        }

        axios.delete("http://localhost:4000/cart", {
            data
        }).then((response) =>{
            this.getCart();
        }).catch((err) => {
            console.log(err);
        });
    } 

    /**
     * Get Wishlist Helper Function
     */
    getWishlist = async () => {
       const wishlist = JSON.parse(localStorage.getItem("whishlist")) || [];
       this.setState({wishlist});

       return wishlist;
    }

    /**
     * Get Cart Helper Function
     */
    getCart = async () => {
        axios.get("http://localhost:4000/cart")
		.then((response) => {
				this.setState({cart:{
                   products: response.data.products,
                   subtotal: response.data.subtotal
                } });
        }).catch((err) => {
            console.log(err);
        });
     }

    /**
     * Get Brands Helper Function
     */
    getBrands = async () => {
        
        axios.get("http://localhost:4000/brands")
		.then((response) => {
				this.setState({brands: response.data});
        }).catch((err) => {
            console.log(err);
            this.setState({errorMessage: "We can't fetch some important information to the page. Please Try again later"});

        });
    }

    /**
     * Get product Helper Function
     * @param {object} filters Filters to the products (Order | Brand | Page)
     */
    getProducts = (filters) => {
        let params = {
            order: filters.order || 1,
            page: filters.page || 1,
            brand: filters.brand || null
        }

        axios.get("http://localhost:4000/products", {
            params
        })
		.then((response) => {
         
            const {data,pageNumber, elementsPerPage, prePage, nextPage, total, totalPages} = response.data;

				this.setState({
                    products: data,
                    pagination: {
                        pageNumber,
                        elementsPerPage,
                        prePage,
                        nextPage,
                        total,
                        totalPages,
                    }
                });
		}).catch((err) => {
            console.log(err);
            this.setState({errorMessage: "We can't fetch the products. Please Try again later"});
        });

    }

    /**
     * Filter Products by Brand
     * @param {Number} brandId Id of the brand to filter
     */
    onBrandSelect = (brandId) => {
        let filter = {
            brand: brandId,
            order: this.state.filter.order || 1
        }

        this.setState({
            filter
        });

        this.getProducts(filter);
    }

    /**
     * Sort Products by price
     * @param {Number} order ( 0 - No order | 1 - Price Ascending | 2 - Price Descending)
     */
    sortByPrice = (order) => {
        let filter = {
            brand: this.state.filter.brand || null,
            order
        }

        this.setState({
            filter
        });

        this.getProducts(filter);
    }

    /**
     * Change page of products
     * @param {Number} page 
     */
    onChangePage = (page) => {

        let filter = {
            brand: this.state.filter.brand,
            order: this.state.filter.order,
            page
        }

        this.getProducts(filter);
    }


	componentDidMount(){

        this.getWishlist();
        this.getCart();
        this.getBrands();
		this.getProducts({});
    }
    
  render() {
	return (
        <Router>
        <Header 
            wishlist={this.state.wishlist} 
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
        />
    {/* Home Page - Product List */}
        <Route exact path="/" render={props => ( 
            <React.Fragment>
                <main className="product-page">
                <div className="container">
                    <ProductFilter 
                        brands={this.state.brands}
                        onBrandSelect={this.onBrandSelect}
                        sortByPrice={this.sortByPrice}
                    />

                    <ProductList 
                        products={this.state.products} 
                        brands={this.state.brands}
                        whishlist={this.state.wishlist}
                        cart={this.state.cart}
                        addToWishlist={this.addToWishlist}
                        addToCart={this.addToCart}                
                        />

                    <Pagination 
                        pagination={this.state.pagination}
                        onChangePage={this.onChangePage}
                    />

                </div>
            </main>
            </React.Fragment>
        )} />
        {/* Wishlist Page */}
        <Route path="/wishlist" component={Wishlist} />
        <Footer />
        </Router>
	)
  }
}
