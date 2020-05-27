import React from "react";
import AppLayout from "../components/layout";

export default class IndexPage extends React.Component{
    public render(){
        return(
            <div>
                <AppLayout>
                <div id="colorlib-page">
          <div className="container-wrap">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(/static/assets/template/jackson/images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Anas P Sayed</a></h1>
                <span className="position"><a href="#">Full stack developer</a> from India</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                    <li><a href="#" data-nav-section="about">About</a></li>
                    <li><a href="#" data-nav-section="services">Services</a></li>
                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                    <li><a href="#" data-nav-section="education">Education</a></li>
                    <li><a href="#" data-nav-section="experience">Experience</a></li>
                    <li><a href="#" data-nav-section="work">Work</a></li>
                    <li><a href="#" data-nav-section="blog">Blog</a></li>
                    <li><a href="#" data-nav-section="contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
              <div className="colorlib-footer">
                <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                <ul>
                  <li><a href="#"><i className="icon-facebook2" /></a></li>
                  <li><a href="#"><i className="icon-twitter2" /></a></li>
                  <li><a href="#"><i className="icon-instagram" /></a></li>
                  <li><a href="#"><i className="icon-linkedin2" /></a></li>
                </ul>
              </div>
            </aside>
            <div id="colorlib-main">
              <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                  <ul className="slides">
                    <li style={{backgroundImage: 'url(/static/assets/template/jackson/images/img_bg_1.jpg)'}}>
                      <div className="overlay" />
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                              <div className="desc">
                                <h1>Hi! <br />I'm Anas</h1>
                                <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                <p><a className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style={{backgroundImage: 'url(/static/assets/template/jackson/images/img_bg_2.jpg)'}}>
                      <div className="overlay" />
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                              <div className="desc">
                                <h1>I am <br />a Designer</h1>
                                <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                          <div className="about-desc">
                            <span className="heading-meta">About Us</span>
                            <h2 className="colorlib-heading">Who Am I?</h2>
                            <p><strong>Hi I'm Anas P S.</strong> I started this journey around 9 years back. I got graduated from Rajagiri School of Engineering and Teachnology during the year 2010. I got working exposure in multinational companies like H&R Block, Tata Consultancy Services, Quest Global and NeST. I got exposure working in vertical like Tax, Mortagage, HealthCare and Industrial domains.</p>
                            <p>My Technical stack includes React, Javascript, JQuery, Html, CSS, Asp.Net MVC, C# .Net and C++. </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                          <div className="services color-1">
                            <span className="icon2"><i className="icon-bulb" /></span>
                            <h3>Graphic Design</h3>
                          </div>
                        </div>
                        <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                          <div className="services color-2">
                            <span className="icon2"><i className="icon-globe-outline" /></span>
                            <h3>Web Design</h3>
                          </div>
                        </div>
                        <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                          <div className="services color-3">
                            <span className="icon2"><i className="icon-data" /></span>
                            <h3>Software</h3>
                          </div>
                        </div>
                        <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                          <div className="services color-4">
                            <span className="icon2"><i className="icon-phone3" /></span>
                            <h3>Application</h3>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                          <div className="hire">
                            <h2>I am happy to know you <br />that 25+ projects done sucessfully!</h2>
                            <a href="#" className="btn-hire">Hire me</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-services" data-section="services">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">What I do?</span>
                      <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                  </div>
                  <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-1">
                        <span className="icon">
                          <i className="icon-bulb" />
                        </span>
                        <div className="desc">
                          <h3>Innovative Ideas</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-2">
                        <span className="icon">
                          <i className="icon-data" />
                        </span>
                        <div className="desc">
                          <h3>Software</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-3">
                        <span className="icon">
                          <i className="icon-phone3" />
                        </span>
                        <div className="desc">
                          <h3>Application</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-4">
                        <span className="icon">
                          <i className="icon-layers2" />
                        </span>
                        <div className="desc">
                          <h3>Graphic Design</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-5">
                        <span className="icon">
                          <i className="icon-data" />
                        </span>
                        <div className="desc">
                          <h3>Software</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                      <div className="services color-6">
                        <span className="icon">
                          <i className="icon-phone3" />
                        </span>
                        <div className="desc">
                          <h3>Application</h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(/static/assets/template/jackson/images/cover_bg_1.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="colorlib-narrow-content">
                  <div className="row">
                  </div>
                  <div className="row">
                    <div className="col-md-3 text-center animate-box">
                      <span className="colorlib-counter js-counter" data-from={0} data-to={309} data-speed={5000} data-refresh-interval={50} />
                      <span className="colorlib-counter-label">Cups of coffee</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                      <span className="colorlib-counter js-counter" data-from={0} data-to={356} data-speed={5000} data-refresh-interval={50} />
                      <span className="colorlib-counter-label">Projects</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                      <span className="colorlib-counter js-counter" data-from={0} data-to={30} data-speed={5000} data-refresh-interval={50} />
                      <span className="colorlib-counter-label">Clients</span>
                    </div>
                    <div className="col-md-3 text-center animate-box">
                      <span className="colorlib-counter js-counter" data-from={0} data-to={10} data-speed={5000} data-refresh-interval={50} />
                      <span className="colorlib-counter-label">Partners</span>
                    </div>
                  </div>
                </div>
              </div>
              <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">My Specialty</span>
                      <h2 className="colorlib-heading animate-box">My Skills</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                      <p>I have experience working in technologies like React, Javascript, JQuery, Html, CSS, Asp .Net MVC, C# .Net, WPF, MVVM and VC++.</p>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="progress-wrap">
                        <h3>React JS</h3>
                        <div className="progress">
                          <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                            <span>75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="progress-wrap">
                        <h3>jQuery</h3>
                        <div className="progress">
                          <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                            <span>60%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="progress-wrap">
                        <h3>HTML5</h3>
                        <div className="progress">
                          <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="progress-wrap">
                        <h3>CSS3</h3>
                        <div className="progress">
                          <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="progress-wrap">
                        <h3>Javascript</h3>
                        <div className="progress">
                          <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                            <span>70%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="progress-wrap">
                        <h3>MVC</h3>
                        <div className="progress">
                          <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Education</span>
                      <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                      <div className="fancy-collapse-panel">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                          <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree in Computer Science
                                </a>
                              </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-6">
                                    <p>I have completed Bachelor of Technology from Rajagiri School of Engineering and Technology during the year 2010. </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>I have secured first class in engineering degree with 70% marks.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFour">
                              <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">High School Secondary Education
                                </a>
                              </h4>
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                              <div className="panel-body">
                                <p>I have studied my secondary level with Biology, Maths as the main subject and secured 86% of marks during the year 2005..</p>	
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFive">
                              <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Education
                                </a>
                              </h4>
                            </div>
                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                              <div className="panel-body">
                                <p>I have studied my High school level at Our Lady of Mercy School and secured 89% of marks during the year 2005.</p>	
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Experience</span>
                      <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="timeline-centered">
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-1">
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2><a href="#">React Developer at TCS</a> <span>2019-2020</span></h2>
                              <p>I have worked in react project for the client BayEquity LLC. It used Web Api, Html, CSS, Next.js etc..</p>
                            </div>
                          </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-2">
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2><a href="#">Front End Developer at H&R Block</a> <span>2018-2019</span></h2>
                              <p>H&R Block is tax consultant and multinational giant. I got a opportunity to work with a project named Emerald Online which is online portal for their credit card. It used technologies like Asp.Net MVC, WCF, SSRS, Html, CSS, JQuery.</p>
                            </div>
                          </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-3">
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2><a href="#">Software Engineer at Quest Global</a> <span>2014-2018</span></h2>
                              <p>I worked in Quest Global in varies vertical like Analytical instrument, Healthcare, Power. Used Technologies like c# .Net WPF, MongoDB etc..</p>
                            </div>
                          </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2><a href="#">Software Engineer at NeST</a> <span>2010-2014</span></h2>
                              <p>In Next I have worked in industrial domain vertical with technologies like c# .Net WPF, VC++ and MFC.</p>
                            </div>
                          </div>
                        </article>
                        <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                          <div className="timeline-entry-inner">
                            <div className="timeline-icon color-none">
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-work" data-section="work">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">My Work</span>
                      <h2 className="colorlib-heading animate-box">Recent Work</h2>
                    </div>
                  </div>
                  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                      <p className="work-menu"><span><a href="#" className="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-1.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 01</a></h3>
                            <span>Website</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-2.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 02</a></h3>
                            <span>Animation</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-3.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 03</a></h3>
                            <span>Illustration</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-4.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 04</a></h3>
                            <span>Application</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-5.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 05</a></h3>
                            <span>Graphic, Logo</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="project" style={{backgroundImage: 'url(/static/assets/template/jackson/images/img-6.jpg)'}}>
                        <div className="desc">
                          <div className="con">
                            <h3><a href="work.html">Work 06</a></h3>
                            <span>Web Design</span>
                            <p className="icon">
                              <span><a href="#"><i className="icon-share3" /></a></span>
                              <span><a href="#"><i className="icon-eye" /> 100</a></span>
                              <span><a href="#"><i className="icon-heart" /> 49</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box">
                      <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-blog" data-section="blog">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Read</span>
                      <h2 className="colorlib-heading">Recent Blog</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="blog-entry">
                        <a href="blog.html" className="blog-img"><img src="/static/assets/template/jackson/images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                        <div className="desc">
                          <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                          <h3><a href="blog.html">Renovating National Gallery</a></h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                      <div className="blog-entry">
                        <a href="blog.html" className="blog-img"><img src="/static/assets/template/jackson/images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                        <div className="desc">
                          <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                          <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                      <div className="blog-entry">
                        <a href="blog.html" className="blog-img"><img src="/static/assets/template/jackson/images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                        <div className="desc">
                          <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                          <h3><a href="blog.html">Make website from scratch</a></h3>
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 animate-box">
                      <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                      <span className="heading-meta">Get in Touch</span>
                      <h2 className="colorlib-heading">Contact</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="colorlib-icon">
                          <i className="icon-globe-outline" />
                        </div>
                        <div className="colorlib-text">
                          <p><a href="#">anaspsayed@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="colorlib-icon">
                          <i className="icon-map" />
                        </div>
                        <div className="colorlib-text">
                          <p>Pappanayil House, Nettoor P O, Ernakulam, Kerala, India 682040</p>
                        </div>
                      </div>
                      <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="colorlib-icon">
                          <i className="icon-phone" />
                        </div>
                        <div className="colorlib-text">
                          <p><a href="tel://">+91 8281477122</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-md-push-1">
                      <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                          <form >
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                              <textarea id="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                            </div>
                            <div className="form-group">
                              <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>{/* end:colorlib-main */}
          </div>{/* end:container-wrap */}
        </div>{/* end:colorlib-page */}
                </AppLayout>
            </div>
        );
    }
}