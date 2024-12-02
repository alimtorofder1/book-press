import img1 from '../../../assets/360_F_301326655_hy1Dc5auGvmmtgxDoBo7c0sxZqtEPz1w.jpg'
import img2 from '../../../assets/360_F_313598338_vucDG0sfBP1zryid0LG5b33gyh15Njz9.jpg'
import img3 from '../../../assets/unnamed.jpg'
import img4 from '../../../assets/books-and-pencils-slider.jpg'
import author1 from '../../../assets/author-headshot-photography-examples-2.webp'


const Slider = () => {
    return (
        <div className='mb-20'>

        <div>
            <h2 className='text-5xl text-center font-bold mb-8'>Testimonials</h2>
        </div>
                    
        <div className="carousel  w-full">
        <div id="item1" className="carousel-item w-full hero">
            <img
            src={img1}
            className="w-full h-[500px]" />
            <div className='pb-10'>
            <img className='size-20 rounded-full' src={author1} alt="" srcset="" />
            </div>
            <div className='text-white text-center w-full h-[500px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                <h1 className='pt-72 text-3xl font-bold'>Abid Hasan</h1>
                <p>The books here are very good I bought them <br /> they sell books at very low prices and they deliver very <br /> fast and the delivery man is very helpful. <br /> If you want, you can also take it, I think it will <br /> be very good</p>
            </div>
        </div>
        <div id="item2" className="carousel-item w-full">
            <img 
            src={img2}
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
            <img
            src={img3}
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
            <img
            src={img4}
            className="w-full" />
        </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        </div>
        </div>
    );
};

export default Slider;