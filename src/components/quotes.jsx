import React,{Component} from "react";
import {loadData} from "../utils/loadData";
import {Button} from "bloomer";
class Quote extends Component{
    state = {
        quote: "Fetching quotes..."

    };
    async componentDidMount(){
        const category = this.props.match.params.category_name;
        this.getQuote(category);
    }

    getQuote = async category => {
        const data = await loadData(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const quote = data.value;
        this.setState({
            quote
        });
    
    };
    handleClick= e =>{
        const category = this.props.match.params.category_name;

        e.preventDefault();
        this.getQuote(category);
    }
  
    render(){

        const {quote} = this.state;
        const category = this.props.match.params.category_name;
        return (
        <>
        <p>{quote}</p>
        <Button isColor="warning" isSize="medium" onClick={(e)=> this.handleClick(e)}>Get Another Quote {category}</Button>
        </>
        );
        
         
        
    }

}




export default Quote;