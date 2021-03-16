import React from 'react';

function FilmList (props) {
    return (
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                <div className="film-box">
                    <img className="image-box mb-3" src={props.poster} alt="poster"/>
                    <div className="film-body">
                        <div className="vote-box mx-auto mb-2">
                            <h5 className="film-vote text-center">{props.vote}</h5>
                        </div>
                        <h5 className="film-title">{props.name}</h5>
                        <p className="film-text">{props.overview}</p>
                        <p className="film-date">Release Date: {props.date}</p>
                    </div>
                </div>

            </div>
        )

} 

export default FilmList;
