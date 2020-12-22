import React, { Component } from 'react';
import { connect } from "react-redux"
import { viewArticles } from '../../../Redux/Articles/articlesAction'
import '../DepartmentPage/depCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Article.css'


class Articles extends Component {
    
    componentDidMount = async () => {
        var api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=756bad764879424c9c65361163f46baa`)
        var data = await api.json();
        const randomArticle = data["articles"]
       // console.log("artilcles", randomArticle)
        const indexarticles = Math.floor(Math.random() * randomArticle.length);
        //console.log(randomArticle, articles[randomArticle]);
        const articles = randomArticle[indexarticles]
        this.props.viewArticles(articles)

    }



    render() {
      //  console.log("props", this.props)
        return (

            // <div className="card bg-dark text-white">
            //     <a href ={this.props.articles.articles.url} target="_blank">
            //     <img id ="random_article"  src={this.props.articles.articles.urlToImage} className="card-img" alt="image" />
                
            //     <div className="card-img-overlay  article_content" >
            //         <h5 className="card-title article_title" >{this.props.articles.articles.title}</h5>
            //         <p className="card-text">{this.props.articles.articles.content}</p>

            //     </div>
            //     </a>
            // </div>
            
            <div className='article' style={{backgroundImage:`url(${this.props.articles.articles.urlToImage})`}}>
                <a href ={this.props.articles.articles.url} target="_blank" style={{textDecoration:'none'}}>
                <div className='article_content'>
                    <h3> {this.props.articles.articles.title} </h3>
                    <p>{this.props.articles.articles.content} </p>
                </div>
                </a>
            </div>
            

        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        viewArticles: articles => dispatch(viewArticles(articles))
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Articles);

