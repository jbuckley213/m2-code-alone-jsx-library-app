const React = require("react")
const Layout = require("./Layout")

function BookDetails(props) {
    console.log(props.oneBook.authors)
    return(
        <Layout>
            <h1>{props.oneBook.title}</h1>

            <ul>
                <span>Written by: </span>
                {props.oneBook.authors.map((oneAuthor, i)=>{
                    return(
                        <li key={i}>
                            {oneAuthor.name} {oneAuthor.lastName} 
                        </li>
                    )
                })}
            </ul>

            <p>Summary: {props.oneBook.description}</p>
            <p>Rating: {props.oneBook.rating}</p>

            <a class="return-button" href="/books">
                Return
            </a>
        </Layout>
    )
}

module.exports = BookDetails