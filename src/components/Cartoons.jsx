

import { useState } from "react";// importing a pre-existing function from react

export default function Cartoons() {
    //logic goes here
    const [cartoonList, setCartoonList] = useState()
    const getCartoons = () => {
        fetch(`https://api.sampleapis.com/cartoons/cartoons2D`)
            .then(response => response.json())
            .then(setCartoonList)
            .catch(console.error)
    }
    //console.log({cartoonList})-to check if we connected to the api. web,inspect,console

    return (// jsx goes here
        <>
            <button onClick={() => getCartoons()}>Get Cartoon</button>
            <div className="button list">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Creator</th>
                        <th>Image</th>

                    </tr>
                    {cartoonList && cartoonList.map((item) => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.creator}</td>
                                <td>{item.image}</td>

                            </tr>

                        )
                    }
                    )}

                </table>

            </div>


        </>
    )

}
/* <section id="movie-list-container">
{movies.map(movie => (
<div className="movie-card" key={movie.id}>
    <img className="movie-poster" 
    src={movie.posterURL}
    alt={movie.title} />
    <h3 className="movie-title">
        {movie.title}
    </h3>
</div>
))}
</section> */