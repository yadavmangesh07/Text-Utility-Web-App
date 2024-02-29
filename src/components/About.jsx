import React, { useState } from 'react';
// import Footer from './Footer';

export default function About(props) {




    return (
        <>
            <div className="accordion p-3 mx-3 my-2 rounded">
                <h1 className="mx-3">About TextiFy</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" >
                            <button className="accordion-button" type="button"  style={{backgroundColor:props.mode1==='dark'?'#23272F':'white',color:props.mode1==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is TextiFy?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black' }}>
                                <strong>TextiFy</strong> is a versatile text utility tool designed to assist users with various text manipulation tasks. Whether you need to format, transform, or analyze text, TextiFy offers a range of features to simplify your workflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About the Developer
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black' }}>
                                <strong>Mangesh Yadav:</strong> I am the creative mind behind TextiFy. With a passion for learning and exploring new technologies, I embarked on the journey of software development with TextiFy being my first project.
                                <br /><br />
                                Currently, I am in the process of learning various programming languages and technologies, including JavaScript, React, HTML, CSS, and more. Through TextiFy, I not only aim to hone my skills but also to contribute to the developer community by sharing my learnings and experiences.
                                <br /><br />
                                As TextiFy evolves, I welcome feedback and suggestions from users to continually improve the application and enhance the user experience. Feel free to reach out to me with any inquiries, ideas, or collaboration opportunities.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How Can TextiFy Help You?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black' }}>
                                TextiFy offers a wide range of features including text formatting, case conversion, character counting, and much more. Whether you need to clean up messy text, generate Lorem Ipsum, or analyze word frequency, TextiFy has you covered.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <footer className=" text-center text-white rounded">
                <div className="container p-4 pb-0">
                    <section className="mb-4" style={{backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black'}}>
                        <h3>Connect With Me:</h3>
                        <a className="btn btn-floating m-1" href="https://github.com/yadavmangesh07" role="button">
                            <i className="bi bi-github" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? 'white' : 'black',fontSize: "2rem" }}></i>
                        </a>
                        <a className="btn btn-floating m-1" href="https://twitter.com/__Mangesh" role="button">
                            <i className="bi bi-twitter" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? '#19BAED' : 'black',fontSize: "2rem" }}></i>
                        </a>
                        <a className="btn btn-floating m-1" href="mailto:mangeshyadav8736@gmail.com" role="button">
                            <img src="src/components/7123025_logo_google_g_icon.png" style={{height:'40px',width:'40px'}} alt="" />
                        </a>
                        <a className="btn btn-floating m-1" href="https://www.linkedin.com/in/mangesh-yadav-65a437237" role="button">
                            <i className="bi bi-linkedin" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? '#137EBB' : 'black',fontSize: "2rem" }}></i>
                        </a>
                        <a className="btn btn-floating m-1" href="https://discord.com/users/OPTIMUS#3832" role="button">
                            <i className="bi bi-discord" style={{ backgroundColor: props.mode1 === 'dark' ? '#23272F' : 'white', color: props.mode1 === 'dark' ? '#5C6AF3' : 'black',fontSize: "2rem" }}></i>
                        </a>
                    </section>
                </div>
                
            </footer>

            
        </>
    );
}
