import React from 'react'
import '../css/Movie.css'
import { useState } from 'react'
const Moviedata=[
    {
        id:1,
        name:"Modalasala",
        year:"2015",
        Rating:"5",
        image:"https://upload.wikimedia.org/wikipedia/en/9/90/Modalasala.jpg"
    },
  
    {
        id:2,
        name:"MogginaManasu",
        year:"2012",
        Rating:"5",
        image:"https://m.media-amazon.com/images/M/MV5BNTQ2M2RhNzAtZDU4YS00NDhkLWJjNmItYTczZGQxNWYzYWMwXkEyXkFqcGdeQXVyMTAxNTM1ODgy._V1_.jpg"
    },
    {
        id:3,
        name:"Rajahuli",
        year:"2016",
        Rating:"5",
        image:"https://m.media-amazon.com/images/M/MV5BNTc4NTg4MjYwMV5BMl5BanBnXkFtZTgwMDUxMDA3MjE@._V1_.jpg"
    },
    {
        id:4,
        name:"Googly",
        year:"2019",
        Rating:"5",
        image:"https://wallpapers.oneindia.com/ph-1024x768/2013/07/googly_1373878259.jpg"
    },
    {
        id:5,
        name:"SantuStraightforward",
        year:"2020",
        Rating:"5",
        image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/santhu-straight-forward-et00040862-08-10-2016-05-44-37.jpg"
    },
    {
        id:6,
        name:"KGF",
        year:"2022",
        Rating:"5",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRDpsEUQ76f58SuVMbGW7-oHoy65qB3ZYLg&usqp=CAU"
    },
    {
        id:7,
        name:"Rocky",
        year:"2014",
        Rating:"5",
        image:"https://djtalkies.com/Image/movie/682_wide.jpg"
    }, 
    {
        id:8,
        name:"Janu",
        year:"2019",
        Rating:"5",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Jaanu.jpg/220px-Jaanu.jpg"
    }, 
    {
        id:9,
        name:"Gokula",
        year:"2011",
        Rating:"5",
        image:"https://www.filmibeat.com/img/popcorn/movie_posters/gokula-kan-20200118133726-676.jpg"
    }, 
    {
        id:10,
        name:"KallaraSante",
        year:"2013",
        Rating:"5",
        image:"https://akamaividz2.zee5.com/image/upload/w_480,h_270,c_scale,f_webp,q_auto:eco/resources/0-0-2600/list/kallarasanthe1170x658.jpg"
    }, 
    {
        id:11,
        name:"Kirathaka",
        year:"2017",
        Rating:"5",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a9/2011_Kannada_film_Kirathaka_poster.jpeg"
    },
    {
        id:12,
        name:"Rajadani",
        year:"2018",
        Rating:"5",
        image:"https://movieassetsdigital.sgp1.cdn.digitaloceanspaces.com/thumb/4ed266e2fdca6c8e0ba8c562ed51fd808f0be874"
    },
    
  ]
function MovieApi() {
let [movie,setMovie]=useState("")
let perpage=3
let [cpage,setPage]=useState(1)
let nextPage=()=>{
    setPage(cpage+1)
}
let prevPage=()=>[
    setPage(cpage -1)
]
let updateChange=(e)=>{
setMovie(e.target.value)
}
let filterMovie=Moviedata.filter((mov)=>{
let Mname=mov.name.toLocaleLowerCase();
return Mname.includes(movie.toLocaleLowerCase())
})
    
  return (
    <div className='nav'>
        <h1>MovieApi</h1>
<input type='text'placeholder='Enter Movie Name' onChange={updateChange}/>
<div className='head'>
{filterMovie.slice((cpage - 1) * perpage, cpage * perpage).map(mov => (
        <div className="item" key={mov.id}>
          <h4>{mov.name} <br />Released : {mov.year} <br /> Rating : {mov.Rating}</h4>
         
          <img src={mov.image} alt={mov.name}  className='img'/>
        </div>
      ))}
    </div>
    <div className='foot'> <button onClick={prevPage}>-</button><button onClick={nextPage}>+</button></div>
   
    </div>
  )
}

export default MovieApi