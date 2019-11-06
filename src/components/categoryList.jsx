import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Progress, Button} from "bloomer";


import {loadData} from "../utils/loadData";

class CategoryList extends Component{
    state ={
        categories: []
    }
    async componentDidMount(){
        this.getCategories();
        
    }
    getCategories = async () => {
        const categories = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        );
        this.setState({
            categories
        })
    }
    render(){
        const {categories} = this.state;
        return (
            <ul>
            <Progress isColor="danger" progress-indeterminate-duration="3000s"></Progress>

            {categories.map((category, id) =>{
               return (
               <li key={'category-${id}'}>
                   <Link isColor="danger" to={`/category/${category}`}>{category}</Link>
                </li>

               )
            })}
            </ul>
        );
    }

}
export default CategoryList;