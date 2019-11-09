import React from 'react';
import axios from 'axios';

const webAPIUrl = "https://localhost:5001/newsarticles";

const Card = ({news}) => {

    function deletePost(id) {
        axios.delete(`${webAPIUrl}/${id}`)
        .then(res => {
            console.log(res)
        })
        window.location.reload();
    }

    if(news){
        const nNews = news.map((n, index) => {
            return(
                <div key={index} className="card" style={{width: '18rem' }}>
                    <img className="card-img-top" src={`/assets/placeholder.png`} alt="placeholder" />
                    <div className="card-body-text-dark">
                        <h1 className="card-title">{n.title}</h1>
                        <h4 className="card-text">{n.ingress} </h4>
                        <p className="card-text">{n.author}</p>
                        <p className="card-text">{n.date}</p>
                        <p className="card-text">{n.runningText}</p>
                        <p className="card-text">{n.category}</p>
                    </div>
                    <input className="btn btn-outline-success" type="button" value="Edit"></input>
                    <input onClick={deletePost.bind(this, n.id)} className="btn btn-outline-success" type="button" value="Delete"></input>
                </div>
            )
        })
        return(
            <div className="row">
                {nNews}
            </div>
        )
    }
}

export default Card;