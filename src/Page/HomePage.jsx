import '../assets/style/home.css';
import About from './about';
export default function HomePage(params) {

    return(
        <div className="underTaker">
            <div className="homeEl">
                <div className="textDiv">
                    <div className="fourDot">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h1>Where Money</h1>
                    <h1>Meet Trust.</h1>
                    <div className="fourPlus">
                        <i className='bx bx-plus'></i>
                        <i className='bx bx-plus'></i>
                        <i className='bx bx-plus'></i>
                        <i className='bx bx-plus'></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet, esentium, quisquam hic velit non enim nesciunt animi commodi. Quasi, alias?</p>
                    <button>Know More</button>
                </div>
                <div className="imgDiv">
                    <img src="https://i.postimg.cc/pXgwBBVC/result11.png" alt="" />
                </div>
            </div>
           
        </div>
    )
}