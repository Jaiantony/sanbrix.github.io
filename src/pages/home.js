import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import $ from 'jquery'
import ChevronLeft from '../images/svg/ChevronLeft';
import ChevronRight from '../images/svg/ChevronRight';
import RoundedArrowLeft from '../images/svg/RoundedArrowLeft';
import RoundedArrowRight from '../images/svg/RoundedArrowRight';
import ArrowDown from '../images/svg/ArrowDown';

// import './skrollr'
function Home() {

    const [onGoingPageActiveSlide,setOnGoingPageActiveSlide]=useState(0)

    const [testimonialsActiveSlide,setTestimonialsActiveSlide]=useState(0)

    const [mediaCenterActiveSlide,setMediaCenterActiveSlide]=useState(0)

    const [nextClickedMediaCenter,setNextClickedMediaCenter] =useState(false)

    const [mblResponsive,setMblResponsive]=useState(false)

    useEffect(()=>{
       // var s = skrollr.init();
       window.addEventListener("wheel", wheelHandler);
       stickySectionHeight()
       setMblResponsive(window.innerWidth<481)
        console.log('test',window.innerWidth<481)
    },[])
    function stickySectionHeight(){
            const stikyContainerHeight = document.querySelector('.completed_projects_inner').scrollWidth;
            console.log(stikyContainerHeight)
            document.querySelector('.completed_projects_container').setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
    }

    function isElementInViewport (el) {
   //console.log('el',el?.getBoundingClientRect())
        const rect = el.getBoundingClientRect();
      //console.log(rect.bottom,document.documentElement.clientHeight)
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        if(document.querySelector('.completed_projects_container')){
        const containerInViewPort = isElementInViewport(document.querySelector('.completed_projects_container'))
       // console.log({containerInViewPort},document.querySelector('.completed_projects_container').getBoundingClientRect())

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;
        console.log(g_canScrollHorizontally,isPlaceHolderBelowTop,isPlaceHolderBelowBottom)
      //  if(g_canScrollHorizontally){
            document.querySelector('.completed_projects_inner').scrollLeft += evt.deltaY;
      //  }
    }   
    }

    // useEffect(()=>{
    //     console.log('changed....')
    //     if(nextClickedMediaCenter&&!mediaCenterStarted){
    //         console.log('changed')
    //         setNextClickedMediaCenter(nextClickedMediaCenter+2)
    //         setMediaCenterStarted(true)
    //     }
    // },[nextClickedMediaCenter])
    const ongoing_project_settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoPlay:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        afterChange: function(index) {
            console.log(index)
            setOnGoingPageActiveSlide(index)
        },
        responsive: [
            {
              breakpoint: 480,
              settings: {
                autoplay: true,
                slidesToShow: 1,
                afterChange: function(index) {
                    console.log(index)
                    setOnGoingPageActiveSlide(index)
                },
                infinite: true,
                dots: true,
              }
            },
        ]
      };
      const testimonial_settings = {
        className: "testimonial_center_item",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: function(index) {
            console.log("before",index)
            setTestimonialsActiveSlide(index==4?0:index+1)
        },
        afterChange: function(index) {
            console.log("after",index)
            setTestimonialsActiveSlide(index)
        },
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", position:'absolute',right:'300px',zIndex:'1' }}
            onClick={()=>{onClick();setNextClickedMediaCenter(true)}}
          >
            <RoundedArrowRight /></div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",position:'absolute',left:'300px',zIndex:'1'}}
            onClick={()=>{onClick();setNextClickedMediaCenter(false)}}
          ><RoundedArrowLeft /></div>
        );
      }

      const blog_settings={
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: function(index) {
           //console.log(index)
            setOnGoingPageActiveSlide(index)
        },
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
              }
            },
        ]
      }
      const media_center_settings={
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,  
       // focusOnSelect: true,   
       beforeChange: function(index) {
        console.log(index,nextClickedMediaCenter?(index==4?0:index==3?-1:index+1):index-1)
        setMediaCenterActiveSlide(nextClickedMediaCenter?(index==4?0:index==3?-1:index+1):index-1);
        },  
        afterChange: function(index) {
            console.log({index})
         //   if(!nextClickedMediaCenter){
                setMediaCenterActiveSlide(index==4?-1:index);
         //   }
          
        },
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      }
      const completed_projects_settings={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
      }

      const ongoingProject=[
        {
            name:'Sanbrix Adhira',
            img:''
        },
        {
            name:'Sanbrix Adhira',
            img:''
        },
        {
            name:'Sanbrix Adhira',
            img:''
        },
        {
            name:'Sanbrix Adhira',
            img:''
        },
      ]
      const completedProjects=[
        {
            logo:'',
            name:'Sanbrix Arista1',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius incididunt ut labo dolore magna aliqua.',
            img:'',
        },
        {
            logo:'',
            name:'Sanbrix Arista2',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius incididunt ut labo dolore magna aliqua.',
            img:'',
        },
        {
            logo:'',
            name:'Sanbrix Arista3',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius incididunt ut labo dolore magna aliqua.',
            img:'',
        },
        {
            logo:'',
            name:'Sanbrix Arista4',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius incididunt ut labo dolore magna aliqua.',
            img:'',
        }
      ]
  return (
    <>
    
    <main className='home_page'>
    <section className="container-fluid home_banner">
    <div className="container">
       <span onClick={()=>{window.scrollTo(0, 550);}}><ArrowDown/></span>
        </div>
        </section>


        <section className="container-fluid who_we_are">
            <div className="container">
            <div className='row'>
            <div className='col-lg-6 left_who_we_are'>
                
                <h3><img src='/images/home/green_img.png'/>Who we are?</h3>
                <p>South India's Leading Real Estate Company</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    <br/> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                <div>
                    <div>
                        <img src='/images/home/Group57.png'/>
                        <p>20+ <br/> LANDMARKS</p>    
                    </div>
                    <div>
                        <img src='/images/home/Group56.png'/>
                        <p>800+ <br/> HAPPY CUSTOMERS</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 right_who_we_are'>
                {/* <img src='/images/home/Rectangle56.png'/> */}
                </div>
        </div>
        </div>
        </section>

        <section className="container-fluid completed_projects">
            
        <h2>Completed <b>Projects</b></h2>
            <div id='desk_completed_project' className='completed_projects_container' > 
            <div className='completed_projects_inner'>
                {
                    completedProjects.map(project=>(
                        <div className="container">
                        <div className='row'>
                             <div className='col-lg-5 left_completed_projects'>
                                 <img src='/images/home/Group58.png'/>
                                 <h4>{project.name}</h4>
                                 <p>{project.desc}</p>
                                 <button>Book Now</button>
                             </div>
                             <div className='col-lg-7 right_completed_projects'>
                             <img src='/images/home/s-arista-5-100-feet-road.png'/>
                                 </div>
                        </div>
                         </div>
                     
                    ))
                }
  
    

    </div>
    </div>

    <div id='mbl_completed_project'>
        { completedProjects.map(project=>(
                        <div>
                            <div className='row' style={{marginBottom:'40px'}}>
                            <div className='col-lg-12 right_completed_projects'>
                             <img src='/images/home/s-arista-5-100-feet-road.png'/>
                                 </div>
                             <div className='col-lg-12 left_completed_projects'>
                                 <img src='/images/home/Group58.png' style={{maxWidth:'200px'}}/>
                                 <h4>{project.name}</h4>
                                 <p>{project.desc}</p>
                                 <button className='bk_nw'>Book Now</button>
                             </div>
                            
                        </div>
                        </div>
                    ))}
        {/* <Slider  {...completed_projects_settings}>
        {
                    completedProjects.map(project=>(
                        <div>
                            <div className='row'>
                             <div className='col-lg-12 left_completed_projects'>
                                 <img src='/images/home/Group58.png'/>
                                 <h4>{project.name}</h4>
                                 <p>{project.desc}</p>
                                 <button className='bk_nw'>Book Now</button>
                             </div>
                             <div className='col-lg-12 right_completed_projects'>
                             <img src='/images/home/s-arista-5-100-feet-road.png'/>
                                 </div>
                        </div>
                        </div>
                    ))
                    
        }
        </Slider> */}
    </div>
    </section>

    <section className="container-fluid ongoing_project">
<div className="container">
<h2>Ongoing <b>Projects</b></h2>
   <div className='row'>
   <Slider {...ongoing_project_settings}>
    
    {
        ongoingProject.map((t,i)=>(
        <div>
            <div className={`ongoing_project_item ${mblResponsive?"ongoing_project_item_active":onGoingPageActiveSlide==i&&"ongoing_project_item_active"}`}>
            <p>Sanbrix Adhira</p>
            <img src='/images/home/gallery-6.png' />
            </div>            
          </div>        
        ))
    }
        </Slider>
<div className='ogp_arrow_con'>
    <div className={`ogp_arrow_left ${onGoingPageActiveSlide==0&&'ogp_arrow__inactive'}`} onClick={()=>$('.ongoing_project .slick-prev').click()}>
        <ChevronLeft/>
    </div>
    <div className={`ogp_arrow_right ${ongoingProject.length==(onGoingPageActiveSlide+2)&&'ogp_arrow__inactive'}`} onClick={()=>$('.ongoing_project .slick-next').click()}>
        <ChevronRight/>
    </div>
</div>

   </div>
   
   <div className='stepper_progress_line' style={{width:`${(ongoingProject.length-1)*50}px`}}>
        {
            [...Array(ongoingProject.length-1)].map((step,i)=>(
                <div className={`stepper_progress_line_item ${i<(onGoingPageActiveSlide+1)&&'stepper_progress_line_item_active'}`}></div>
            ))
        }
   </div>
    </div>
    </section> 

    <section className="container-fluid testimonials">
    <h2> <b>Testimonials</b></h2>
    <Slider {...testimonial_settings}>
    
    {
        [0,0,0,0,0].map((t,i)=>(
        <div>
            <div className={`testimonials_item ${(testimonialsActiveSlide+1)==(i+1)&&'testimonials_item_active'}`}>            
                <img src='/images/home/portrait-young-man-looking-camera-explains-tells-sitting-home-couch.png' />
            </div>            
          </div>        
        ))
    }
        </Slider>
    </section>

    <section className="container-fluid media_center">
    <div className="container">
    <h2> <b>Media Center</b></h2>
        <div className='row'>
        <div className='col-lg-6'>
            <div className='media_center_list_con'>
        <Slider {...media_center_settings}>
    
    {
        [0,0,0,0,0].map((t,i)=>(
           <div>
            <div className={`media_center_item ${(mediaCenterActiveSlide+1)==(i)&&"media_center_item_active"}`}>
            
            {i}
               
            </div>            
          </div>        
        ))
    }
        </Slider>
        </div>
        </div>
        <div className='col-lg-6'>
            <div className='mc_newspapaer'>
                {
                    ['Newspapaer','gallery-6','Newspapaer','gallery-6','Newspapaer'].map((t,i)=>(
                        <img className={`mc_newspapaer_inactive ${(mediaCenterActiveSlide+1)==i&&'mc_newspapaer_active'}`} src={`/images/home/${t}.png`}/>
                    ))
                }
               
            </div>
            </div>
   </div>
    </div>
    </section>

    <section className="container-fluid blog">
    <h2> <b>Blog</b></h2>
   <Slider {...blog_settings}>
    
    {
        [0,0,0].map((t,i)=>(
           <div>
            <div className={`blog_item`}>
               <img src='/images/home/s-arista-5-100-feet-road.png' />
               <div className='blog_content'>
                    <h5>Lorem ipsum</h5>
                    <br/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br/><br/>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. pariatur.
                    </p>
               </div>
            </div>            
          </div>        
        ))
    }
        </Slider>

  
    </section>

        </main>
        </>
  )
}

export default Home

{/* <section className="container-fluid home_banner">
<div className="container">
   <div className='row'>
        <div className='col-lg-6'>

        </div>
        <div className='col-lg-6'>
            
            </div>
   </div>
    </div>
    </section> */}