import React from "react"
import "./main.css"
import { Link } from "react-router-dom"

const Main = (props) => {
  return (
    <div className="bookdisplay">
      {props.books.map(eachBook =>
        <div key={eachBook._id} className="eachbookholder"  >

          <section id={eachBook._id} onClick={(e) => props.bookIdHandle(e)} style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
            <div onClick={(e) => props.bookIdHandle(e)}>
              <Link to={`/book/${eachBook._id}`}><section id={eachBook._id} className="bookdetaillinksection">  </section></Link>
            </div>
            <small className="bookdelete" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Delete</small>
            <small className="bookedit" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Edit</small>
          </section>
          <section>
            <Link to={`/book/${eachBook._id}`} className="eachbooktitleholder">
              <p className="eachbooktitle">{eachBook.title}</p>
            </Link>
            <Link to={`/author/${eachBook.author.name}`} className="eachbookauthorholder">
              <p className="eachbookauthor" >{eachBook.author.name}</p>
            </Link>
          </section>
        </div>
      )}

    </div>
  )
}

export default Main