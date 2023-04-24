
import './assets/css/Application.css';
import logo from './assets/images/logo/white-logo.svg';
import phone from './assets/images/hero/phone.png'; 


function Application(props) {
   
    return ( <div><div className="preloader">
    <div className="preloader-inner">
        <div className="preloader-icon">
            <span></span>
            <span></span>
        </div>
    </div>
</div>

<header className="header navbar-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="nav-inner">
                   
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo} className="App-logo" alt="logo" />
                        </a>
                        <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            <ul id="nav" className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="#home" className="page-scroll active"
                                        aria-label="Toggle navigation">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#features" className="page-scroll"
                                        aria-label="Toggle navigation">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" aria-label="Toggle navigation">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#pricing" className="page-scroll"
                                        aria-label="Toggle navigation">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" aria-label="Toggle navigation">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="dd-menu collapsed" href="" data-bs-toggle="collapse"
                                        data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                    <ul className="sub-menu collapse" id="submenu-1-4">
                                        <li className="nav-item"><a href="">Blog Grid Sidebar</a>
                                        </li>
                                        <li className="nav-item"><a href="">Blog Single</a></li>
                                        <li className="nav-item"><a href="">Blog Single
                                                Sibebar</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="" aria-label="Toggle navigation">Contact</a>
                                </li>
                            </ul>
                        </div> 
                        <div className="button add-list-button">
                            <a href="" className="btn">Get it now</a>
                        </div>
                    </nav>
                   
                </div>
            </div>
        </div> 
    </div> 
</header>

<section id="home" className="hero-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                    <h1 className="wow fadeInLeft" data-wow-delay=".4s">A powerful app for your business.</h1>
                    <p className="wow fadeInLeft" data-wow-delay=".6s">From open source to pro services, Piqes helps you
                        to build, deploy, test, and monitor apps.</p>
                    <div className="button wow fadeInLeft" data-wow-delay=".8s">
                        <a href="" className="btn"><i className="lni lni-apple"></i> App Store</a>
                        <a href="" className="btn btn-alt"><i className="lni lni-play-store"></i> Google
                            Play</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
                <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                    <img src={phone} className="phone-logo" alt="logo" />
                </div>
            </div>
        </div>
    </div>
</section>

<section id="features" className="features section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title">
                    <h3 className="wow zoomIn" data-wow-delay=".2s">Features</h3>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Your Experience Gets Better And Better Over Time.
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                
                <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                    <i className="lni lni-cloud-upload"></i>
                    <h3>Push to Deploy</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
               
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               
                <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                    <i className="lni lni-lock"></i>
                    <h3>SSL Certificates</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
              
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              
                <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    <i className="lni lni-reload"></i>
                    <h3>Simple Queues</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
               
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               
                <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                    <i className="lni lni-shield"></i>
                    <h3>Advanced Security</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
                
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              
                <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                    <i className="lni lni-cog"></i>
                    <h3>Powerful API</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
               
            </div>
            <div className="col-lg-4 col-md-6 col-12">
               
                <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    <i className="lni lni-layers"></i>
                    <h3>Database Backups</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a
                        page at its layout.</p>
                </div>
               
            </div>
        </div>
    </div>
</section>

<section className="our-achievement section">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
                <div className="title">
                    <h2>Trusted by developers from over 80 planets</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                            <h3 className="counter"><span id="secondo1" className="countup" cup-end="100">100</span>%</h3>
                            <p>satisfaction</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                            <h3 className="counter"><span id="secondo2" className="countup" cup-end="120">120</span>K</h3>
                            <p>Happy Users</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                            <h3 className="counter"><span id="secondo3" className="countup" cup-end="125">125</span>k+</h3>
                            <p>Downloads</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="pricing" className="pricing-table section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title">
                    <h3 className="wow zoomIn" data-wow-delay=".2s">pricing</h3>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Pricing Plan</h2>
                    <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                
                <div className="single-table wow fadeInUp" data-wow-delay=".2s">
                  
                    <div className="table-head">
                        <h4 className="title">Hobby</h4>
                        <p>All the basics for starting a new business</p>
                        <div className="price">
                            <h2 className="amount">$12<span className="duration">/mo</span></h2>
                        </div>
                        <div className="button">
                            <a href="" className="btn">Buy Hobby</a>
                        </div>
                    </div>
                  
                    <div className="table-content">
                        <h4 className="middle-title">What's Included</h4>
                       
                        <ul className="table-list">
                            <li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Potenti felis, in cras ligula.</li>
                        </ul>
                       
                    </div>
                  
                </div>
               
            </div>
            <div className="col-lg-3 col-md-6 col-12">
               
                <div className="single-table wow fadeInUp" data-wow-delay=".4s">
                   
                    <div className="table-head">
                        <h4 className="title">Freelancer</h4>
                        <p>All the basics for starting a new business</p>
                        <div className="price">
                            <h2 className="amount">$24<span className="duration">/mo</span></h2>
                        </div>
                        <div className="button">
                            <a href="" className="btn">Buy Freelancer</a>
                        </div>
                    </div>
                    
                    <div className="table-content">
                        <h4 className="middle-title">What's Included</h4>
                       
                        <ul className="table-list">
                            <li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Potenti felis, in cras ligula.</li>
                        </ul>
                     
                    </div>
                   
                </div>
               
            </div>
            <div className="col-lg-3 col-md-6 col-12">
               
                <div className="single-table wow fadeInUp" data-wow-delay=".6s">
                  
                    <div className="table-head">
                        <h4 className="title">Startup</h4>
                        <p>All the basics for starting a new business</p>
                        <div className="price">
                            <h2 className="amount">$32<span className="duration">/mo</span></h2>
                        </div>
                        <div className="button">
                            <a href="" className="btn">Buy Startup</a>
                        </div>
                    </div>
                   
                    <div className="table-content">
                        <h4 className="middle-title">What's Included</h4>
                       
                        <ul className="table-list">
                            <li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Potenti felis, in cras ligula.</li>
                        </ul>
                       
                    </div>
                  
                </div>
               
            </div>
            <div className="col-lg-3 col-md-6 col-12">
               
                <div className="single-table wow fadeInUp" data-wow-delay=".8s">
                   
                    <div className="table-head">
                        <h4 className="title">Enterprise</h4>
                        <p>All the basics for starting a new business</p>
                        <div className="price">
                            <h2 className="amount">$48<span className="duration">/mo</span></h2>
                        </div>
                        <div className="button">
                            <a href="" className="btn">Buy Enterprise</a>
                        </div>
                    </div>
                   
                    <div className="table-content">
                        <h4 className="middle-title">What's Included</h4>
                       
                        <ul className="table-list">
                            <li><i className="lni lni-checkmark-circle"></i> Cras justo odio.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Dapibus ac facilisis in.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Morbi leo risus.</li>
                            <li><i className="lni lni-checkmark-circle"></i> Potenti felis, in cras ligula.</li>
                        </ul>
                       
                    </div>
                   
                </div>
              
            </div>
        </div>
    </div>
</section>

<section className="section call-action">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                <div className="cta-content">
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">You are using free Lite Version of Appvilla
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">Please, purchase full version of the template to
                        get all pages, features and commercial license.</p>
                    <div className="button wow fadeInUp" data-wow-delay=".6s">
                        <a href="" className="btn">Purchase Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer className="footer">
  
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                    
                    <div className="single-footer f-about">
                        <div className="logo">
                            <a href="index.html">
                            <img src={logo} className="App-logo" alt="logo" />
                            </a>
                        </div>
                        <p>Making the world a better place through constructing elegant hierarchies.</p>
                        <ul className="social">
                            <li><a href=""><i className="lni lni-facebook-filled"></i></a></li>
                            <li><a href=""><i className="lni lni-twitter-original"></i></a></li>
                            <li><a href=""><i className="lni lni-instagram"></i></a></li>
                            <li><a href=""><i className="lni lni-linkedin-original"></i></a></li>
                            <li><a href=""><i className="lni lni-youtube"></i></a></li>
                            <li><a href=""><i className="lni lni-pinterest"></i></a></li>
                        </ul>
                        <p className="copyright-text">Designed and Developed by <a href="https://uideck.com/"
                                rel="nofollow" target="_blank">UIdeck</a>
                        </p>
                    </div>
                   
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                           
                            <div className="single-footer f-link">
                                <h3>Solutions</h3>
                                <ul>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Analytics</a></li>
                                    <li><a href="">Commerce</a></li>
                                    <li><a href="">Insights</a></li>
                                    <li><a href="">Promotion</a></li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                          
                            <div className="single-footer f-link">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Guides</a></li>
                                    <li><a href="">API Status</a></li>
                                    <li><a href="">Live Support</a></li>
                                </ul>
                            </div>
                          
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                          
                            <div className="single-footer f-link">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Our Blog</a></li>
                                    <li><a href="">Jobs</a></li>
                                    <li><a href="">Press</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                          
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                           
                            <div className="single-footer f-link">
                                <h3>Legal</h3>
                                <ul>
                                    <li><a href="">Terms Conditions</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Catering Services</a></li>
                                    <li><a href="">Customer Relations</a></li>
                                    <li><a href="">Innovation</a></li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>

<a href="#" className="scroll-top">
    <i className="lni lni-chevron-up"></i>
</a>
                     
</div> );
  }
  
  export default Application;