import './App.css';
import './Series.css';
import { Routes, Route, Link } from "react-router-dom";
import { MovieCard } from './MovieCard';
import { useState } from 'react';


function App() {
 
  return (
    <div className='App'>
      <div className='Navigation-Header'>
      <nav>
        <ul className='List-Nav'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">MovieList</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </nav>
      <div className='sign-up-part'>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieData />} />
        <Route path="/series" element={<SeriesData/>} />
      </Routes>
    </div>
  )
}


function Home(){
  return(
    <div className='Home-Page'>
      Welcome to Homepage.
    </div>
  )
}

function SeriesData(){
  const series_data = [
    {
      id:1,
      name:"Sherlock",
      poster:"https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      video:"https://youtu.be/IrBKwzL3K7s",
      season:"4",
      runtime:"60 mins",
      rating:"4.6",
      summary:"Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",
      cast:{
        actor:"Benedict Cumberbatch, Benedict Cumberbatch, Andrew Scott, ",
        actress:"Lara Pulver, Amanda Abbington"
      },
      genre:"Crime, Mistery, Detective Fiction",
      language:"English",
      status:"Finished"
    },
    {
      id:2,
      name:"Breaking Bad",
      poster:"https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
      video:"https://youtu.be/HhesaQXLuRY",
      season:"5",
      runtime:"60 mins",
      rating:"4.8",
      summary:"Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
      cast:{
        actor:"Bryan Cranston, Aaron Paul, Dean Norris",
        actress:"Anna Gunn, Betsy Brandt"
      },
      genre:"Drama, Crime, Family, Triller",
      language:"English",
      status:"Finished"
    },
    {
      id:3,
      name:"The Walking Dead",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1pQ4zfDW6yUsvpYfYEu5_Ghn1lMy48cSA&s",
      video:"https://youtu.be/sfAc2U20uyg",
      season:"11",
      runtime:"45 mins",
      rating:"4.1",
      summary:"In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices.",
      cast:{
        actor:"Norman Reedus, Jeffrey Dean Morgan, Andrew Lincoln",
        actress:"Melissa McBride,  Lauren Cohan"
      },
      genre:"Horror, Drama, Si-Fi",
      language:"English",
      status:"Finished"
    },
    {
      id:4,
      name:"Dark",
      poster:"https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw",
      video:"https://youtu.be/rrwycJ08PSA",
      season:"3",
      runtime:"70 mins",
      rating:"4.4",
      summary:"When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. 'Dark' represents the first German original series produced for Netflix.",
      cast:{
        actor:"Louis Hofmann",
        actress:"Lisa Vicari"
      },
      genre:"Si-Fi, Triller, Mystery",
      language:"German",
      status:"Finished"
    },
    {
      id:5,
      name:"The Boys",
      poster:"https://resizing.flixster.com/oynbxA9hJYlfdYfqcy_BrVNu_cQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjczNzIyNC53ZWJw",
      video:"https://youtu.be/M1bhOaLV4FU",
      season:"4",
      runtime:"60 mins",
      rating:"4.4",
      summary:"Superheroes are often as popular as celebrities, as influential as politicians, and sometimes even as revered as gods. But that's when they're using their powers for good. What happens when the heroes go rogue and start abusing their powers? When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name.",
      cast:{
        actor:"Antony Starr, Karl Urban, Jack Quaid",
        actress:"Erin Moriarty, Karen Fukuhara, Aya Cash"
      },
      genre:"Action, Superhero, Crime",
      language:"English",
      status:"On-Going"
    },
    {
      id:6,
      name:"Naruto/Naruto: Shippuden",
      poster:"https://naruto-official.com/anime/series/naruto2_visual.webp",
      video:"https://youtu.be/22R0j8UKRzY",
      season:"31",
      runtime:"25 mins",
      rating:"4.4",
      summary:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition on his journey to becoming Hokage in his village.",
      cast:{
        actor:"Junko Takeuchi",
        actress:"Nana Mizuki"
      },
      genre:"Animation, Action, Superpower",
      language:"Japanese",
      status:"Finished"
    },
    {
      id:7,
      name:"Vilangu",
      poster:"https://m.media-amazon.com/images/M/MV5BNTdiYzQ1YWEtMjk0Mi00Y2Y4LWFkZDMtMDJmMzhjZGY1MzBkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
      video:"https://youtu.be/oIXvlxX9qH0",
      season:"1",
      runtime:"40 mins",
      rating:"3.9",
      summary:"Paridhi, a police officer, is tasked with investigating a mysterious murder. He strives to solve the perplexing case while also dealing with his personal problems.",
      cast:{
        actor:"Vimal, Kichcha Ravi",
        actress:"Ineya"
      },
      genre:"Triller, Crime, Mystery",
      language:"Tamil",
      status:"Finished"
    },
    {
      id:8,
      name:"Suzhal: The Vortex",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OiyqzX8sPaN4KkDdK9WWeGTHcjHe9y7ofw&s",
      video:"https://youtu.be/b2xE68VEjUs",
      season:"1",
      runtime:"45 mins",
      rating:"4.1",
      summary:"A criminal investigation in small-town India threatens to shake up the cultural societal fabric.",
      cast:{
        actor:"Kathir",
        actress:"Gopika Ramesh, Aishwarya Rajesh"
      },
      genre:"Suspense, Triller, Mystry",
      language:"Tamil",
      status:"Finished"
    },
    {
      id:9,
      name:"",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BtqOFGOoEpCpA9MrxyWfvJd0l-0wN_xAsQ&s",
      video:"https://youtu.be/Pm-wNmS9RGI",
      season:"2",
      runtime:"25 mins",
      rating:"4.3",
      summary:"Jujutsu Kaisen is an anime television series based on Gege Akutami's manga series of the same name. The anime series was announced in the 52nd issue of Weekly Shōnen Jump published in November 2019.",
      cast:{
        actor:"Yuichi Nakamura, Junya Enoki",
        actress:"Asami Seto"
      },
      genre:"Animation, Superpower, Action",
      language:"Japanese",
      status:"On-Going"
    },
    {
      id:10,
      name:"Chernobyl",
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Chernobyl_2019_Miniseries.jpg/220px-Chernobyl_2019_Miniseries.jpg",
      video:"https://youtu.be/s9APLXM9Ei8",
      season:"1",
      runtime:"60 mins",
      rating:"4.7",
      summary:"In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line to save Europe.",
      cast:{
        actor:"Jared Harris, Stellan Skarsgård",
        actress:""
      },
      genre:" Historical drama, Disaster, Tragedy;",
      language:"Russian",
      status:"Finished"
    }
  ]
  return(
   <>
    <div className="movie-list">
      {series_data.map((ele) => (
        <SeriesCard series={ele} />
      ))}
    </div>
   </>
  )
}

function SeriesCard({series}){
  return(
    <div className='Series-Cards'>
      <img className="Series-Cards-Img" src={series.poster} alt={series.name}/>
      <div className='Series-Cards-Detail'>
        <h2>{series.name}&nbsp;#{series.language}</h2>
        <h3>⭐{series.rating}</h3>
      </div>
      <div className='Series-Cards-Detail-Season-Satus'>
      <small><b>Seasons - </b>{series.season}</small>
      <small><b>Status-</b>{series.status}</small>
      </div>

      <div className='Series-Card-Details-More'>
          <div className='Series-Card-Summary-Button'>
            <small><b>Genre-</b>{series.genre}</small>
            <small><b>Runtime-</b>{series.runtime}</small>
            <button>Show More</button>
          </div>
          <div className='Series-Card-Summary-More'>
            <p className="Series-Card-Summary">{series.summary}</p>
            <p><b>Actors-</b>{series.cast.actor}</p>
            <p><b>Actress-</b>{series.cast.actress}</p>
          </div>
        </div>
    </div>
  )
}


function MovieData(){
  const data_movies = [
    {
    id:1,
    name: "Lucifer",
    poster: "http://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    rating: 4.7,
    trailer: "https://youtu.be/X4bF_quwNtw",
    summary: "Lucifer Morningstar (Tom Ellis) is the devil. He's tired of Hell and takes Link break in L.A. He's running his nightclub Lux with demon disciple Mazikeen (Lesley-Ann Brandt). His brother Amenadiel (D.B. Woodside) demands that he returns to Hell.",
    cast: {
      actor: "Tom Ellis",
      actress: "Lauren German"
    },
    duration: "100min",
    genre: "Action, Triller, Fantasy",
    language:"English"
  },
  {
    id:2,
    name: "The Avengers",
    poster: "https://media.vogue.fr/photos/5d385448282990000800dc0c/1:1/w_1080,h_1080,c_limit/raw.jpg",
    rating: 4.1,
    trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8&pp=ygUQdHJhaWxlciBhdmFuZ2Vycw%3D%3D",
    summary: "S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time.",
    cast: {
      actor: "Mark Ruffalo, Chris Hemsworth, Robert Downey Jr.",
      actress: "Elizabeth Olsen, Scarlett Johansson"
    },
    duration: "150min",
    genre: "Action, Triller, Fantasy",
    language:"English"
  },
  {
    id:3,
    name: "Shrek",
    poster: "https://images.moviesanywhere.com/5948f139cd669fb5984d2c782e7678be/99cedd1f-ae78-4026-a3e8-b79840b71cbc.jpg",
    rating: 3.9,
    trailer: "https://youtu.be/CwXOrWvPBPk",
    summary: "In a bid to get his land back, Shrek agrees to retrieve Princess Fiona for the fairytale-hating Lord Farquaad of Duloc, but falls in love with her on the way.",
    cast: {
      actor: "Mike Myers as Shrek",
      actress: "Cameron Diaz as Fiona"
    },
    duration: "135min",
    genre: "Animation, Comedy",
    language:"English"
  },
  {
    id:4,
    name: "The Pursuit of Happyness",
    poster: "https://images.moviesanywhere.com/08b5312f6334adf18414ccfb2093960a/80420ae5-16eb-41ce-b0be-a6f2a04b1a16.jpg",
    rating: 4,
    trailer: "https://youtu.be/DMOBlEcRuw8",
    summary: "Chris Gardner takes up an unpaid internship in a brokerage firm after he loses his life's earnings selling a product he invested in. His wife leaves him and he is left with the custody of his son.",
    cast: {
      actor: "Will Smith",
      actress: "Thandiwe Newton"
    },
    duration: "160min",
    genre: "Family, Drama",
    language:"English"
  },
  {
    id:5,
    name: "Lights Out",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12543830_p_v8_ao.jpg",
    rating: 3.2,
    trailer: "https://youtu.be/6LiKKFZyhRU",
    summary: "A young woman realizes that her mother is possessed by a supernatural spirit that hunts only in the dark. However, a spate of murders compels her to confront the spirit and save her family.",
    cast: {
      actor: "Alexander DiPersia",
      actress: "Teresa Palmer"
    },
    duration: "120min",
    genre: "Horror, Triller",
    language:"English"
  },
  {
    id:6,
    name: "Pirates of the Caribbean",
    poster: "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_FMjpg_UX1000_.jpg",
    rating: 4.1,
    trailer: "https://youtu.be/naQr0uTrH_s",
    summary: "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise.",
    cast: {
      actor: "Johnny Depp, Orlando Bloom",
      actress: "Keira Knightley"
    },
    duration: "170min",
    genre: "Action, Triller, Fantasy",
    language:"English"
  },
  {
    id:7,
    name: "Forrest Gump",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg",
    rating: 4.4,
    trailer: "https://youtu.be/bLvqoHBptjg",
    summary: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
    cast: {
      actor: "Tom Hanks",
      actress: "Robin Wright"
    },
    duration: "155min",
    genre: "Comedy, Drama",
    language:"English"
  },
  {
    id:8,
    name: "How to Train Your Dragon",
    poster: "https://play-lh.googleusercontent.com/1NgUHgo2XvJxeaW71iacayJiA0Xs_yxFZH5N-UN7BkjI36NJmp9mSdtVN84JOjqwfYDsMw",
    rating: 4.1,
    trailer: "https://youtu.be/2AKsAxrhqgM",
    summary: "A Viking breaks all rules and befriends a dragon he is supposed to kill. He decides to call him Toothless and they join forces to put an end to the terror that wreaks havoc in their respective worlds.",
    cast: {
      actor: "Jay Baruchel",
      actress: "America Ferrera"
    },
    duration: "90min",
    genre: "Animation, Action, Fantasy",
    language:"English"
  },
  {
    id:9,
    name: "The Lord of the Rings",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 4.5,
    trailer: "https://youtu.be/V75dMMIW2B4",
    summary: "The Lord of the Rings is a trilogy of epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by British author J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
    cast: {
      actor: "Elijah Wood, Viggo Mortensen",
      actress: "Liv Tyler, Cate Blanchett"
    },
    duration: "188min",
    genre: "Action, Triller, Fantasy",
    language:"English"
  },
  {
    id:10,
    name: "Moana",
    poster: "https://m.media-amazon.com/images/I/71RgCh-pLWL._AC_UF1000,1000_QL80_.jpg",
    rating: 3.8,
    trailer: "https://youtu.be/cPAbx5kgCJo",
    summary: "Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.",
    cast: {
      actor: "Dwayne Johnson",
      actress: "Auli'i Cravalho"
    },
    duration: "90min",
    genre: "Animation",
    language:"English"
  },
  {
    id:11,
    name: "Aavesham",
    poster: "https://m.media-amazon.com/images/M/MV5BYTA0YTgxNWUtYjllOS00MWNhLTk3MTQtYjQ1N2RmNTZjYzI2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
    rating: 4,
    trailer: "https://youtu.be/L0yEMl8PXnw",
    summary: "Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.",
    cast: {
      actor: "Fahadh Faasil, Mithun Jai Shankar, Midhutty",
      actress: "-"
    },
    duration: "210min",
    genre: "Action, Comedy",
    language:"Malayalam"
  },
  {
    id:12,
    name: "Theeran Adhigaaram Ondru",
    poster: "https://m.media-amazon.com/images/M/MV5BNTAxOTBlZWMtMDdmMi00ZWE2LWI3YTUtNDM4OGM2NDkzMDU5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 4.1,
    trailer: "https://youtu.be/uLuGOOFORAs",
    summary: "Theeran, a dedicated police officer, pays the price for his honesty and faces hardships when he tries to investigate the illegal activities conducted by a powerful gangster.",
    cast: {
      actor: "Karthi",
      actress: "Rakul Preet Singh"
    },
    duration: "185min",
    genre: "Action, Triller",
    language:"Tamil"
  },
  {
    id:13,
    name: "Thani Oruvan",
    poster: "https://m.media-amazon.com/images/S/pv-target-images/4e8fce2e8fa91e118901c3feee7b6be2dbc8c2517e8423f204fc1cd244107f63.jpg",
    rating: 4.2,
    trailer: "https://youtu.be/r5Lih8rKd6k",
    summary: "A wealthy and powerful scientist commits many medical malpractices for money. Hence, a dutiful police officer sets out to expose him and bring him to justice.",
    cast: {
      actor: "Jayam Ravi, Arvind Swamy",
      actress: "Nayanthara"
    },
    duration: "160min",
    genre: "Action, Triller",
    language:"Tamil"
  },
  {
    id:14,
    name: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    rating: 4.4,
    trailer: "https://youtu.be/YoHD9XEInc0",
    summary: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    cast: {
      actor: "Leonardo DiCaprio, Cillian Murphy",
      actress: "Marion Cotillard"
    },
    duration: "190min",
    genre: "Action, Triller, Si-fi",
    language:"English"
  },
  {
    id:15,
    name: "The Wailing",
    poster: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
    rating: 3.7,
    trailer: "https://youtu.be/43uAputjI4k",
    summary: "When an outsider visits a village, its inhabitants experience a mysterious epidemic. A police officer then tries to solve the mystery behind the outbreak to save his sick daughter.",
    cast: {
      actor: "Kwak Do-won",
      actress: "Chun Woo-Hee"
    },
    duration: "150min",
    genre: "Horror, Triller",
    language:"Korean"
  },
  {
    id:16,
    name: "Memories of Murder",
    poster: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rating: 4,
    trailer: "https://youtu.be/ux6VHo5jQVw",
    summary: "While South Korea is still under the military's reign, two local, unreliable detectives are joined by an experienced one from Seoul to investigate a series of mysterious murder cases.",
    cast: {
      actor: "Kang ho Song, Hae il Park",
      actress: "Jung In-sun"
    },
    duration: "130min",
    genre: "Action, Triller, Suspense",
    language:"Korean"
  },
  {
    id:17,
    name: "300",
    poster: "https://resizing.flixster.com/98zLtkl_x1_-MkA94IKZe-KCVyQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p163191_p_v8_al.jpg",
    rating: 3.8,
    trailer: "https://youtu.be/UrIbxk7idYA",
    summary: "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
    cast: {
      actor: "Gerard Butler",
      actress: "Lena Headey"
    },
    duration: "115min",
    genre: "Action",
    language:"English"
  },
  {
    id:18,
    name: "Gladiator",
    poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 4.3,
    trailer: "https://youtu.be/P5ieIbInFpg",
    summary: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
    cast: {
      actor: "Russell Crowe",
      actress: "Connie Nielsen"
    },
    duration: "160min",
    genre: "Action",
    language:"English"
  },
  {
    id:19,
    name: "Bad Boys",
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/badboys_onesheet_1400x2100_0.jpg?itok=GGzVOfd0",
    rating: 3.4,
    trailer: "https://youtu.be/Xm12NSa8jsM",
    summary: "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
    cast: {
      actor: "Will Smith, Joe Pantoliano",
      actress: "Theresa Randle, Téa Leoni"
    },
    duration: "115min",
    genre: "Comedy, Action",
    language:"English"
  },
  {
    id:20,
    name: "Soodhu Kavvum",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/31/Soodhu_Kavvum.jpg",
    rating: 4.2,
    trailer: "https://youtu.be/aaQuRwnwH54",
    summary: "Das kidnaps Arumai, the son of a politician who has been planning his own kidnapping to extract money from his father. Problems arise when an insane police officer is brought to handle the case.",
    cast: {
      actor: "Vijay Sethupathi, Bobby Simha, Ashok Selvan, Ramesh Thilak, Karunakaran",
      actress: "Sanchita Shetty"
    },
    duration: "140min",
    genre: "Comedy, Action",
    language:"Tamil"
  }
  
  ]

  const [movieName,setMovieName] = useState("")
  const [moviePoster,setMoviePoster] = useState("")
  const [movieSummary,setMovieSummary] = useState("")
  const [movieRating,setMovieRating] = useState("")
  const [movieRuntime,setMovieRuntime] = useState("")
  const [movieGenre,setMovieGenre] = useState("")
  const [movieLanguage,setMovieLanguage] = useState("")
  const [movieTrailer,setMovieTrailer] = useState("")
  const [movieActor,setMovieActor] = useState("")
  const [movieActress,setMovieActress] = useState("")

  const moviedata1 = {
    name:movieName,
    poster:moviePoster,
    rating:movieRating,
    summary:movieSummary,
    duration:movieRuntime,
    genre:movieGenre,
    language:movieLanguage,
    trailer:movieTrailer,
    cast:{
      actor:movieActor,
      actress:movieActress
    }
  }

const [movieList,setMovieList] = useState(data_movies)


  return(
    <>
    <div>
      <div className='Add-Movie-Header'>
        <div><h2>ADD MOVIES HERE</h2></div>
        <div>
          <form>
            <div className='form-div'>
            <label for='MovieName'>Movie Name:</label><br></br>
            <input type='text' id='MovieName' placeholder='Name...'
             onChange={(event) => setMovieName(event.target.value)} />
            </div>
            
            <div className='form-div'>
            <label for='Poster'>Movie Poster URL:</label><br></br>
            <input type='text' id='Poster' placeholder='PosterURL...'
            onChange={(event) => setMoviePoster(event.target.value)} />
            </div>
            
            <div className='form-div'>
            <label for='rating'>Movie Rating:</label><br></br>
            <input type='text' id='rating' placeholder='rating...'
            onChange={(event) => setMovieRating(event.target.value)} />
            </div>

            <div className='form-div'>
            <label for='summary'>Movie Summary:</label><br></br>
            <textarea id='summary' placeholder='summary...' rows="4" cols="40"
            onChange={(event) => setMovieSummary(event.target.value)} />
            </div>

            <div className='form-div'>
            <label for='runtime'>Movie Runtime:</label><br></br>
            <input type="text" id='runtime' placeholder='runtime...'
            onChange={(event) => setMovieRuntime(event.target.value)} />          
            </div>

            <div className='form-div'>
            <label for='genre'>Movie Genre:</label><br></br>
            <input type="text" id='genre' placeholder='genre...'
            onChange={(event) => setMovieGenre(event.target.value)} />
            </div>
            
            <div className='form-div'>
            <label for='lang'>Movie Language:</label><br></br>
            <input type="text" id='lang' placeholder='Language...'
            onChange={(event) => setMovieLanguage(event.target.value)} />
            </div>
            
            <div className='form-div'>
            <label for='trailer'>Movie Trailer URL:</label><br></br>
            <input type="text" id='trailer' placeholder='Trailer URL...'
            onChange={(event) => setMovieTrailer(event.target.value)} />
            </div>

            <div className='form-div'>
            <label for='actor'>Movie Actor:</label><br></br>
            <input type="text" id='actor' placeholder='Actor...'
            onChange={(event) => setMovieActor(event.target.value)} />
            </div>

            <div className='form-div'>
            <label for='actress'>Movie Actress:</label><br></br>
            <input type="text" id='actress' placeholder='Actress...'
            onChange={(event) => setMovieActress(event.target.value)} />
            </div>
           
           <div className='form-button'>
           <button type='button' onClick={() => {
            setMovieList([...movieList, moviedata1])}}>Add Movie</button>
           </div>
          </form>
        </div>
      </div>
      <div className="movie-list">
      {movieList.map((mv) => (
        <MovieCard movie={mv} />
      ))}
    </div>
  </div>
    
    </>
  )
}

export default App
