import React from 'react'
import './Home.css'
import Cards from './Cards'

function Home() {
  return (
    <div className='Home-Page-Container'>
      <div className='Home-Page-Head'>
        <h2>Welcome Lets See What We Got</h2>
      </div>
      <div className='Homepage-Content-gif'>
        <div className='Homepage-Content-quotes'>
          <h1>The most honest form of filmmaking is to make a film for yourself.</h1>
        </div>
      </div>
      <div className='Homepage-Cards-display'>
        <div className='Movie-Card-Homepage'>
          <Cards path={"/"} src={"https://templatelab.com/wp-content/uploads/2019/06/movie-poster-template-03.jpg?w=395"} name={"Movies Page"}/>
        </div>
        <div className='Series-Card-Homepage'>
          <Cards path={"/"} src={"https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-music-carnival-poster-design-image_162591.jpg"} name={"Series Page"}/>
        </div>
        <div className='Add-Movies-Card-homepage'>
          <Cards path={"/"} src={"https://static.vecteezy.com/system/resources/thumbnails/010/973/696/small/movie-camera-icon-isolated-object-on-white-background-vector.jpg"} name={"Add Movies Page"}/>
        </div>
        <div className='Add-Series-Card-Homepage'>
        <Cards path={"/"} src={"https://media.istockphoto.com/id/183431206/photo/movie-camera.jpg?s=612x612&w=0&k=20&c=yAZJMonXH4Wf4qwJiCIosh73p9_NJXCKR1Hgi54pA6g="} name={"Add Series Page"}/>
        </div>
        <div className='About-Page-Card-Homepage'>
        <Cards path={"/"} src={"https://i.pinimg.com/originals/fc/9a/b8/fc9ab87fa69adfb815d4e991b7d4245b.jpg"} name={"About Page"}/>
        </div>
      </div>
      <div className='Homepage-Content-Div'>
        <div className='Homepage-Content'>
          <div className='Homepage-icon-1'>
          <i className="fa fa-credit-card fa-3x" aria-hidden="true"></i>
          </div>
          <div className='Homepage-content-foot-1'>
            <h3>Always 100% Free</h3>
            <p>Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.</p>
          </div>
        </div>
        <div className='Homepage-Content'>
          <div className='Homepage-icon-2'>
          <i className="fa fa-tablet fa-3x" aria-hidden="true"></i>
          </div>
          <div className='Homepage-content-foot-2'>
            <h3>Device-Friendly</h3>
            <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
