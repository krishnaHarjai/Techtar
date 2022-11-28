import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the tech problems
            you face
            everyday. We are leading tech company whose aim is to increase the 
            problem solving abilities in children.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>Who We Are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nulla facilis ullam ipsum unde nostrum officiis, ab quasi nesciunt delectus rerum veniam a doloremque atque vitae, praesentium accusamus voluptates! Commodi quisquam officia consequuntur nostrum modi rerum saepe quo earum sapiente.</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{
              animationDelay: "0.1s",
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
