import React from 'react';
import {Link, Outlet } from "react-router-dom"
// import Modal from "../components/Modal"
import { Button, Modal } from "react-bootstrap"


class Home extends React.Component {
  constructor(){
    super()
    this.state={
      show: false
    }
  }
  handleModal() {
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <>
  <div className='container-fluid border border-dark p-sm-5 p-md-0 vw-100% vh-100%' style={{fontFamily: "Red Rose,cursive", maxHeight:"100%", maxWidth:"100%"}}>
        <div className="d-md-flex mt-3 row-fluid d-none flex-row justify-content-around">
          <div className="">
            <img
              className=""
              src="https://metabnb-hng-task3.netlify.app/assets/Group.33bc5e6b.png"
              alt="logo"
              style={{height: 30, width: "auto"}}
            />
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <a
              className=""
              href="/"
              aria-current="page" style={{textDecoration: "none",color: "grey",fontSize:20}}
            >
              Home
            </a>
            <Link className="mx-4
            " id="contact"
                style={{textDecoration: "none",color: "grey",fontSize:20}}
                to="/contact"
              >
              Place to stay
              </Link>
            <a
              className="active"
              href="/"
              aria-current="page"  style={{textDecoration: "none",color: "grey",fontSize:20}}
            >
              NFTs
            </a>
            <a
              className="mx-5"
              href="/"
              aria-current="page"  style={{textDecoration: "none",color: "grey",fontSize:20}}
            >
              Community
            </a>
          </div>
          <div>
          <Button onClick={()=>{this.handleModal()}}
          className="btn md-rounded text-bold text-white Home"
          style={{ backgroundColor: "#A02279", width: 130, fontSize: 14 }}>
            Connect Wallet
          </Button>
          <Modal className='w-sm-auto w-md-auto mt-5' show={this.state.show}>
            <Modal.Header className="font-bold">Connect Wallet <span><img onClick={()=>{this.handleModal()}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADLSURBVHgB7ZQ9EoMgEIUXadVJp3KL3CBH8gYhXbqcJ13schI4ABSpMMuMdMifdvrN7MgMz326uwBwckyGYRj7vr/n6LuuG3171dpLhBCeYrJoXpTSC+TAGOP4ZXPIxO5ZjdVCCSGTzclDJjnJaUyglPq0bUtwyeu6Boyb7Q/GQwjBYS/cn+SWpUoVGmNm3zpGtEQWW3NXFowJlnJprSfYiq+hKSNcnHw3k5RRLDbJmXNnsnYXeZvcNM0VH28p5RMiuHOC/LDpXzg5Hn8FVVaECUMmMQAAAABJRU5ErkJggg=="/></span></Modal.Header>
            <Modal.Body>
              <h3 className='text-start' style={{fontSize:12, fontWeight:"bold"}}>Choose your preffered wallet</h3>
              <div className='d-flex flex-row p-2 justify-content-between border border-dark' style={{borderRadius:10}} >
              <img src="data:image/png;base64,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" />
              <span className='text-start' style={{  fontSize: 18, fontWeight: "bold" }}>Meta Mask</span>
              <img style={{height:20}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </div>
              <div className='d-flex flex-row mt-2 p-2 justify-content-between border border-dark sm-rounded' style={{borderRadius:10}} >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiDSURBVHgBnVgLcFVHGf7+Pfcm5EEgTUAgFCMZ+mRailSG1o46NA5V0FIGpOi0o+3Uxjp02upoLZNxWrAtoYmTVh4WW9QWnUE7To2PUUKYEYqiU2GcvlAiCoHycngkuTe59+zvf1737nnkJulONuecPXt3v/32+//9/0P4AOVDbVxVM2x/knN8iya6STOuYY16m1HNDJK/AQ36rwb62Oa/MXj/hKzVfaKDMhhnofF0vqqdG1KZfIutabU8NmlBppkgQCDA5N6r3r3XruUfO1fQEa2pCxV4/sJ36dhY5xwTwLnr+Uql7HaZaxlrLndBIAwmeI6B5HC7djCTejUHtGafGR3oqAAXtOXvs21+StiaLltXmNwEFGKMw2wmgpQ2GzjGip4dfIa2fiCAi9r5ClvbG7TND2qZkUOs+UAxCmPwtlg7C9Pms0uj34c7rbRa3/80nR0zwOt+wNU1mfxrwlpzAIwTtjUAEWXMebb9fra/oPCzczUWQ+jOEi3HRrocxaKiDbd18pTJ2aFfKehmS+zRkiWooMK4l3dBG5G30uAdxa7s9TEr2P2NWzUWl9v8SzzEdaMCVLncOgu0uDBxACSYEOZEHALuTWhMbFRlXAHEAEtpTpfrDSUB3v7CcAspXhsAsvyqoiApzFa8cmJbICgyFoPQQuir1mN8v4mpoMElW7gxN5zrETfS6GoOiFksJ1rkyJZaMIqIFs1+to70IzqZt7BQ9HgixCDb9pOiu0al2GMMKOoPcS2FWeQENv2tpiJjMLa/wBwVr84NaZ5h5fD9EINLXhbW+od64R5TPmvsuYfYCYEwY7ZOsMoIs3a0TZttCawyDYufnI0O6ks5AK3BobWOQqQvgu1lf8UOyIBmB5wnJYcJcldXkQaumUa4eiqhtsqb/H+DjLffBw7JJg3kgt8YeiLjmYtjGa/LZEdaZKh1tLL9eEV2wpTD0m+O6fNGYiyolWnC5+cpLL9BoWFysr8/dp7x44OM377FOHWpNKu2DjHoLPSoTuNGumtb9rPy0MXM/ulAEccbN4SFjQqPL7FwRWUysGjpu8BY9xvG7vfYB2JIxNhm9iXjtjunTxmWpgTOx8nnVbnsCVCiRF/m1BXC2gO3WqgoK4IblG08fIIFiCf26TXA/FmECSnvvcPwCysJG3drbD/gicfXUMhg2FiUawzDuCWlQDc7Fue6kqCTsxRDFd6T93/lTUVwFyW6e3G/jdf/wegf4pDoq8sJzdcSHv6EwpRqoKoM+MJ8hRcP2LHzlZIe2D1h5isR44zo8UQR2sgQ9WOv5XHqIuPkJcbaXTns+rtGZpgRLZeyjF1vatz7io0TwuzRc8B9O3WIsSIyDuErNCtcTWu2ZwYkKKgsRBxRbUjbgg8TDvcxBoY87dRPJOTFD5y+zCH3MrMWyA4T+i4aRiC/nzZJyW+BcwPstlcJu4saga63igYZdVO+A7+shJ3KqLM0Ob/7YxaeXFaGltssGdhrOy3sne0Psza7Hti8KoUffcnCrNowmyeFccf1OGVyBfD0UsKOLyp841MoXSSFUK5VJBQH49wZCvcsTLnA75ibwnMr0qiZEO971VTR4pqUawwzpf7knhSa6uIWXlcF/OIrSgyN3DEf/7TC/CtRqkhoAOovAkbBSzuXd05pdL9rF3rPEWf86O0WJlcWR7hOnPRzd6WEmSKgejGKrXcr13kHZepEoO1OwrXTim27DrFIByXgYcC6/nOt98ue17IRGHjV08T+Xu3e39jgnSeNdQqLPqKw94hG0xSFzlUWan1/mBF3k80D5eJeaiYQPnO9whv/Ztc77LxXYcGsYvDU1s14osvzi8F85inGXuDbm7I1vyctszWHj7ngRHFufvrnPKrFTSyfZ/kgCd+7M4Wp1SJg3+U4RuD4OecQ/XazwiTRmlM3r1I4I3FyU32RuZf/wmjb47mlgKrQLgZFoS8lHvCQdLwjFNr7YTsbP+jca+OC+L0vL/JAzp1eZONiFnjwZ3m8875n1W/L9SUxljqRwvRJJLU4Z9tuxqYeDiEJgfJ30r3V+KuSAOyN8FkbztyCqwNnhzjZVw7a5nBincCG39l49zQXNPyvM7J9r9ti6aGu2LKP0d6jQ4450UKDksY+RfrSXgF0NAouSCGDYMEdSEbe+icbP9zngTw/ADywM4/uI9pfeVFHPf9krN5hi6/05toozK3/vQ7C+xg4NplzKuGIHMh73O7LNmc2SBr4HZOxAtCESMZxtivkyOs9yzj4Hw5HJZG+jhRuaCC8dED744b7uPc6HjzIkjt0Bz3qAly6hRvs3FCvvCsLQHrppJH/aoPVUsGpTo6A7BH7JYZfOl+OJsiXB1fpXS3UJ42/DiXc0eTc2IZS1dy+aEWJfuYzKbwK/7NIMSdJlT0iCjnlheTxUJ8NBkwpRH1YwV2Z/fyXQb8osMI4XsMxK43WAFcB4B8eouMCsLXIIGKBazCByahOYDAAD05gEQgBL4APXlq00fyoFMqL9zxctl3Svm1mqpikJ5NRHkGP7kJCQCi+EIN5uP35+VwbbTExxb4spFPpJ2yoP4ZFTRHLDjOaWDkqgxJsemC7y5VaH8UTA9j9dTqPfGqFZLrdesREHYWzOrrFUaZKtRkHwu6JFpb3b6IzowJ0yv5v0WXi7BrJTTpDoCLgeDyMIplB8dzb0hlafS7hy5b7GqOUjz47/DUN9U3WupFNfZngkKzFkRy9/wHT8Ritg220vdT8Y8ob53Vwo521n5LDe43EtyrQWBRcLF01mA7SyjzTEMu3akkZHsm00/HR5h5bYmsAHerPrxU8SwXsnCQtJjIKF+BR6fzzrFZbM/6HobGUcQEMysx2rqjI2ot5mG8Vnd4sjr1BXMQsAVgpwFkSS8lY6JyAk1Sd38wTHyjLWj2nN9EAxln+Dz/iu/hTy1xwAAAAAElFTkSuQmCC" />
              <span className='text-start' style={{ fontSize: 18, fontWeight: "bold" }}>Wallet Connect</span>
              <img style={{height:20}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </div>
            </Modal.Body>
          </Modal>
          </div>
        </div>
        <div className="d-flex d-md-none flex-row justify-content-between">
          <div className='mt-2' style={{marginLeft:-25}}>
            <img
              src="https://metabnb-hng-task3.netlify.app/assets/Group.33bc5e6b.png"
              alt="logo"
              style={{width: "auto", height: 20,}}
            />
          </div>
          <div className='d-flex flex-row'>
          <Button onClick={()=>{this.handleModal()}}
          className="m-2 btn md-rounded text-white Home"
          style={{ backgroundColor: "#A02279", height: 50, fontSize: 12 }}>
            Connect Wallet
          </Button>
          {/* <div className="pos-f-t" style={{marginRight: -20}}>
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-white p-4">
               <div className="flex text-[#434343] md:gap-5 md:text-sm lg:gap-8 lg:text-xl ">
                <a className="" href="/" aria-current="page">
                  Home
                </a>
                <Link className="" id="contact"
                style={{
                  textDecoration: "none",
                  fontWeight: "bolder",
                  color: "black",
                  borderRadius: 10
                }}
                to="/contact"
              >
              Place to stay
              </Link>
                <a className="active" href="/" aria-current="page">
                  NFTs
                </a>
                <a className="active" href="/" aria-current="page">
                  Community
                </a>
              </div>
              </div>
              </div>
              <nav className="navbar navbar-white bg-white">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
              </nav>
            </div> */}
          </div>
        </div>
      
        <main>
          <div className="row d-md-flex d-none px-md-5">
            <div className="col-md-6 mt-md-5" style={{paddingTop: 30}}>
              <h1>
                Rent a <span className="font-bold" style={{color:"#A02279", fontWeight:"bold"}}>Place</span>{" "}
                away from <br></br><span style={{color:"#A02279", fontWeight:"bold"}}>Home</span>{" "}
                in the{" "}
                <span style={{color:"#A02279", fontWeight:"bold"}}>Metaverse</span>
              </h1>
              <p style={{fontSize: 25, color: "#333333"}}>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <div className='d-flex flex-row'>
                <input
                  type="text"
                  placeholder="Search for location"
                  className="form-control w-75" style={{ height: 60, borderTopRightRadius:0, borderBottomRightRadius:0, borderBottomLeftRadius:10, borderTopLeftRadius:10}}/>
                <span><button className='btn' style={{height: 60, color:"white",borderTopRightRadius:10, borderBottomRightRadius:10, borderBottomLeftRadius:0, borderTopLeftRadius:0, backgroundColor:"#A02279"}}>
                Search
                </button></span>
              </div>
            </div>
            <div className="col-md-6 mt-5" style={{paddingLeft: 60}}>
              <div className="row">
                <div className="col-6 mt-5" >
                  <img src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" alt="nfts" />
                  <img className="mt-3" src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" alt="nfts" />
                </div>
                <div className="col-6" style={{marginLeft: -40}}>
                  <img src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" alt="nfts" />
                  <img className="mt-3" src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" alt="nfts" />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex d-md-none px-md-5">
            <div className="col-sm-12 mt-sm-5" style={{paddingTop: 30}}>
              <h1>
                Rent a <span className="font-bold" style={{color:"#A02279", fontWeight:"bold"}}>Place</span>{" "}
                away from <br></br><span style={{color:"#A02279", fontWeight:"bold"}}>Home</span>{" "}
                in the{" "}
                <span style={{color:"#A02279", fontWeight:"bold"}}>Metaverse</span>
              </h1>
              <p style={{fontSize: 15, color: "#333333"}}>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <div className='d-flex flex-row'>
                <input
                  type="text"
                  placeholder="Search for location"
                  className="form-control w-75" style={{ height: 50, borderTopRightRadius:0, borderBottomRightRadius:0, borderBottomLeftRadius:10, borderTopLeftRadius:10}}/>
                <span><button className='btn' style={{height: 50, color:"white",borderTopRightRadius:10, borderBottomRightRadius:10, borderBottomLeftRadius:0, borderTopLeftRadius:0, backgroundColor:"#A02279"}}>
                Search
                </button></span>
              </div>
            </div>
            <div className="col-sm-12 mt-3">
              <div className="row">
                <div className="col-6 mt-5 px-2" style={{marginLeft: 10}}>
                  <img src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" style={{width:"auto", height:100}} alt="nfts" />
                  <img className="mt-3" src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" style={{width:"auto", height:100}} alt="nfts" />
                </div>
                <div className="col-6" style={{marginLeft: -40}}>
                  <img src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" style={{width:"auto", height:100}} alt="nfts" />
                  <img className="mt-3" src="https://metabnb-hng-task3.netlify.app/assets/imageA.66ddcf04.png" style={{width:"auto", height:100}} alt="nfts" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex flex-row w-100 justify-content-around mt-5" style={{backgroundColor: "#A02279"}}>
            <img
              src="data:image/png;base64,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"
              className="w-[6rem] md:w-[150px] lg:w-[214.14px]"
              alt="nfts"
            />
            <img
              src="https://metabnb-hng-task3.netlify.app/assets/logo.eeb2f3c5.svg"
              className="w-[6rem] md:w-[150px] lg:w-[214.14px]"
              alt="nfts"
            />
            <img
              src="https://metabnb-hng-task3.netlify.app/assets/Frame.c87d7ec3.svg"
              className="w-[6rem] md:w-[150px] lg:w-[214.14px]"
              alt="nfts"
            />
          </div>
          <div className="d-md-none d-flex flex-row justify-content-around mt-5" style={{backgroundColor: "#A02279"}}>
            <img
              src="data:image/png;base64,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"
              className=""
              alt="nfts" style={{width: 60}}
            />
            <img
              src="https://metabnb-hng-task3.netlify.app/assets/logo.eeb2f3c5.svg"
              alt="nfts" style={{width:60}}
            />
            <img
              src="https://metabnb-hng-task3.netlify.app/assets/Frame.c87d7ec3.svg"
              alt="nfts" style={{width: 60}}
            />
          </div>
        </main>
        <div className="mt-5"style={{marginLeft: 20}}>
          <h2 className="text-center text-bold"  style={{fontWeight: "bold", fontSize:40}}>
            Inspiration for your next adventure
          </h2>
          <div className="mt-2 p-md-5">
            <div className='row mt-sm-2'>
              <div className="col-md-3 w-auto col-sm-12 pt-2 border-light  mb-sm-2 justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/one.60764a5b.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-md-4 w-auto col-sm-12 pt-2  mb-sm-2 border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/two.5d84b73c.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 w-auto col-sm-12 pt-2  mb-sm-2  border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/three.00b19e76.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-md-4 w-auto col-sm-12 pt-2 border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/four.02c41320.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3 mt-sm-2'>
              <div className="col-md-3 w-auto col-sm-12 pt-2 mb-sm-2 border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/five.92b302f8.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-md-4 w-auto pt-2  mb-sm-2  border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/six.ceac0e8f.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 w-auto col-sm-12 pt-2  mb-sm-2 border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/seven.88fbbecf.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-md-4 w-auto col-sm-12 pt-2  mb-sm-2 border-light justify-content-center" style={{borderRadius:20, border:"solid"}}>
                <div className="">
                  <img
                    src="https://metabnb-hng-task3.netlify.app/assets/eight.b2722fc8.png"
                    alt="Nfts" style={{height: 250, width: 250, borderRadius:20}}
                  />
                  {/* <svg
                    className=" absolute top-3 right-5"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
                      fill="#D7D7D7"
                      stroke="url(#paint0_linear_9333_349)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_9333_349"
                        x1={10}
                        y1="17.9"
                        x2={10}
                        y2="0.100006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1D0E3D" />
                        <stop offset={1} stopColor="#0F051D" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                </div>
                <div className="d-flex flex-column" style={{color: "#434343", fontSize:12}}>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>Desert king</p>
                    <p className=" font-bold">1MBT per night</p>
                  </div>
                  <div className="d-flex flex-row justify-content-between text-xs">
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBhZCxEcIwDEW/HKAOGziwB5cNYAPIBNDhkjQcW9gbcJkACgrKTMBlA7IAEYY4R/AR8ivpSda3BHgykTqZyfboc9FO9FStQBRbvNDSxi2RlpsQGMUQgSRgbZl0tZKBFBXnSXE4k46UIaIl/oiZM2GtcvSJRB5k98t1Pp6RtY1/TgOlyW2/q5epKtM5zdWarWVnIx7hp3EoSveZ8mXFxIlNijcaBOHXu/pM8JiSTfwEIhAwz6NjDKIAAAAASUVORK5CYII="
                      className="h-3 w-3"
                      alt="ratings"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-md-flex d-none" style={{backgroundColor:"#A02279", height:700}}>
          <div className="col-md-6">
            <div className='d-flex flex-column p-5 justify-content-center align-content-center' style={{marginTop:160}}>
            <h2 className="text-start mx-3" style={{color: "white", fontWeight:"bolder", fontSize:40}}>
              Metabnb NFTs
            </h2>
            <p className="text-start mx-3" style={{color: "white", width: 400, fontSize:20}}>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="mx-3 text-start btn bg-white w-25 rounded-lg p-4 text-base" style={{color:"#A02279"}}>
              Learn more
            </button>
            </div>
          </div>
          <div className="col-md-6 pt-5" style={{marginLeft:-40}}>
            <div className="d-flex flex-column justify-content-center align-content-center mt-5">
              <img src="https://metabnb-hng-task3.netlify.app/assets/ThreeImages.0bbbe3ef.png" style={{width:500}} alt="Nfts" />
            </div>
          </div>
        </div>
        <div className="d-flex d-md-none flex-column align-items-center mt-5 pt-4" style={{backgroundColor:"#A02279"}}>
          <div className="pt-md-5 w-75">
            <h2 className="text-center" style={{color:"white", fontSize:18, fontWeight:"bold"}}>
              Metabnb NFTs
            </h2>
            <p className="text-center" style={{color:"white", fontSize:10}}>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="btn bg-white w-100 rounded-lg pb-2" style={{color:"#A02279", height:30}}>
              Learn more
            </button>
          </div>
          <div className="col-md-6 col-sm-12 p-5">
            <div className="">
              <img src="https://metabnb-hng-task3.netlify.app/assets/ThreeImages.0bbbe3ef.png" style={{width:200, height:"auto"}} alt="Nfts" />
            </div>
          </div>
        </div>
        <footer style={{backgroundColor:"#1D1D1E"}}>
          <div className="d-flex d-md-flex d-none p-3">
          <div className="row mt-5 w-100">
          <div className='col-3'>
            <div className='d-flex flex-column'>
            <img
            src="https://metabnb-hng-task3.netlify.app/assets/Group.39565081.svg"
            className="w-100"
            alt="Metabnb Logo"
            />
          <div className="mt-5 pt-5" >
            <div className="gap-10">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZLLDcMgDIbN44aQMgKjdIVOkG7QdoKu0FE6QkahE7QHBCegRkokRBqSVL0lv2QZy+YDbAAqijE2zrmbtfaFPiYzxpy+1fIaCAF3SmlLCIE5TYLwdIWuzW73RvdkjOlVIJTKA+/9UUrZTRVTWCjOua7lF4PmNOoiTuWCfTj3ocpSeliEEK5CiEe+b9QjnFBTAKCA6hKS9MvTujXFafyH4RP2pmr1f2v2Dto06AOyiUU4wisoHwAAAABJRU5ErkJggg=="
                alt="facebook social"
                
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBjVTrbcIwELYDf5BAYoPSDdigMAF0gmaEjkA3YAPoBKQT4BHYADpBkXgkkfLo96XnKHUC5KSLHd/d53v5tBIKw3CU5/m71nqG35G6TwewAX/0ej3ulebnfD6PPc/bAmQIsG/wDsfHJgTojMBPctkhTdPXfr+/KzwB76/X608cx3PVkmDj04ZMDHW5XNbY5BS0BTmdThMaw3ZOW4AtNb2hELE+NxkgjDFDzrLMDAYDI94ssBjYGIAcIM+VIJoqAHI0xPlWPC0ZehvKnBALva4kcO8IVzibYLuGJ18oxBGrj/UtiiICTWvxym2ryv/EPbNk88mQXY88Vxk3F0pJknyqOgX8dDqdsSuoASGkon8QxrCmjBC5unm6BbQTo5mqe+vLalxZ1z1gSREzFX2sRYji3ZzJZvJtG/wjJgpJDKpndB2lDhrKb26VX9uGampIVpDJZ94YMr1t0PlrHba3eNX6nVnCY/fLVuGbsY+PgrYgvFge7J4Y5RhBb2yUjAbhe0Q9zi92/JRjRFsJUXG4QGVe1IPBxpmFJUDelnaw/QKrRHjlF6P/KgAAAABJRU5ErkJggg=="
                alt="instagram social"
                className='mx-4'
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNSURBVHgBzVPLUcMwEJVkH/w7kA5EBZgOTAcpwR0AHUAFgQqADqACmwpICaKC+ODvjD+8ZWRGkDjEOTC8mfWuJe3bffKasf8GfujBPM9Dy7IuEUqYgt26rquGYTgpikIyCuq6fiM/RYKDy6qqBtPKstzAP1AuvBQIQpCETdMktLCLSAix2pLCORWO+75XsFCg3Yw2iAwugYTYTAB5pOVM4d33/WeuDydwkbGpYCkqvaCARLHVHqJTuitOcrqui6h93e4sOI6zQF7G9WVv2BFAbuZ53oJiQWyQ8MSOAIhex1jQA5cVY/GezcfjNyINSa2yw6Hoa20RQd4Nm4cL8+WLKAiCNe7rnCT+1hmKfv4e5pptvrRtK23bPkM4OQYocg1Jdz/XaY4ibNLPGO2bI/pC6OSKOt+1P062JCIcXIJMjh0heY1BpcQUUlL2F/gAXzfA6SoqAs4AAAAASUVORK5CYII="
                alt="twitter social"
                
              />
            </div>
            <div className=" flex gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBtVPdbYNADObuDXjJCIxwIyQbZARGSCZoV+gEdIOmE4QNwgZhg7biV0hw/Vz5kEWBNFJjydjn388+zvP+idSSw1q7qapqr5SK2JRprTPf93PvL8QFXpumsQucgKPVIhQAvtZ1/QH5DN46X1mWRjS4LhZzRVaDJnGE/leA6BYJFAege4PtDD2WxRh1MtfFSkfbtheyISEjJp1sIodGtw6Vps8wDIZk3/cvjCRGgAEfgyAwxLi9I87vYpyUJ9nLsX6qi25noLh4N4hyKHdENCV0/fLuJM2JOcmiKLZsTzGKAaqDCyQdCJ7cues6w2omEWwkTCK3bJJSd/65Wx4dfKWjA3oMWwrfSaKbu+Upqrt+SBk3Lhs7+YTY8ZGCEnoWzk/7ox2hoRtvt/qAqcutRzv3NNRaQf5RDY+eh2F4YuSPo2+QO7J9ibQvMwAAAABJRU5ErkJggg=="
                className="h-4 w-4"
                alt="copyright"
              />
              <p className="text-sm" style={{color:"white"}}>2022 Metabnb</p>
            </div>
          </div>
            </div>
          
          </div>
          <div className='col-3 mt-3'>
          <div className='text-start'>
              <h3 className="mb-6 font-bold" style={{color: "white"}}>Community</h3>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>NFT </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Tokens </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Landlords </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Discord </a>
              </div>
              </div>
          </div>
          <div className='col-3 mt-3'>
                <div className="text-start">
                <h3 className="mb-6 font-bold" style={{color: "white"}}>Places</h3>
                </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Castle </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Farms </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Beach </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Learn more </a>
              </div>
          </div>
          <div className='col-3 mt-3'>
                <div className="text-start">
                <h3 className="mb-6 font-bold" style={{color: "white"}}>About us</h3>
                </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Road map </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Creators </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Career </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Contact us </a>
              </div>
          </div>
        </div> 
          </div>

          <div className="d-flex d-md-none p-3">
          <div className="row-fluid">
          <div className='col-3'>
            <div className='d-flex flex-column'>
            <img
            src="https://metabnb-hng-task3.netlify.app/assets/Group.39565081.svg"
            alt="Metabnb Logo"
            style={{}}
            />
          <div className="mt-5 pt-5" >
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZLLDcMgDIbN44aQMgKjdIVOkG7QdoKu0FE6QkahE7QHBCegRkokRBqSVL0lv2QZy+YDbAAqijE2zrmbtfaFPiYzxpy+1fIaCAF3SmlLCIE5TYLwdIWuzW73RvdkjOlVIJTKA+/9UUrZTRVTWCjOua7lF4PmNOoiTuWCfTj3ocpSeliEEK5CiEe+b9QjnFBTAKCA6hKS9MvTujXFafyH4RP2pmr1f2v2Dto06AOyiUU4wisoHwAAAABJRU5ErkJggg=="
                alt="facebook social"
                
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBjVTrbcIwELYDf5BAYoPSDdigMAF0gmaEjkA3YAPoBKQT4BHYADpBkXgkkfLo96XnKHUC5KSLHd/d53v5tBIKw3CU5/m71nqG35G6TwewAX/0ej3ulebnfD6PPc/bAmQIsG/wDsfHJgTojMBPctkhTdPXfr+/KzwB76/X608cx3PVkmDj04ZMDHW5XNbY5BS0BTmdThMaw3ZOW4AtNb2hELE+NxkgjDFDzrLMDAYDI94ssBjYGIAcIM+VIJoqAHI0xPlWPC0ZehvKnBALva4kcO8IVzibYLuGJ18oxBGrj/UtiiICTWvxym2ryv/EPbNk88mQXY88Vxk3F0pJknyqOgX8dDqdsSuoASGkon8QxrCmjBC5unm6BbQTo5mqe+vLalxZ1z1gSREzFX2sRYji3ZzJZvJtG/wjJgpJDKpndB2lDhrKb26VX9uGampIVpDJZ94YMr1t0PlrHba3eNX6nVnCY/fLVuGbsY+PgrYgvFge7J4Y5RhBb2yUjAbhe0Q9zi92/JRjRFsJUXG4QGVe1IPBxpmFJUDelnaw/QKrRHjlF6P/KgAAAABJRU5ErkJggg=="
                alt="instagram social"
                className='mx-4'
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNSURBVHgBzVPLUcMwEJVkH/w7kA5EBZgOTAcpwR0AHUAFgQqADqACmwpICaKC+ODvjD+8ZWRGkDjEOTC8mfWuJe3bffKasf8GfujBPM9Dy7IuEUqYgt26rquGYTgpikIyCuq6fiM/RYKDy6qqBtPKstzAP1AuvBQIQpCETdMktLCLSAix2pLCORWO+75XsFCg3Yw2iAwugYTYTAB5pOVM4d33/WeuDydwkbGpYCkqvaCARLHVHqJTuitOcrqui6h93e4sOI6zQF7G9WVv2BFAbuZ53oJiQWyQ8MSOAIhex1jQA5cVY/GezcfjNyINSa2yw6Hoa20RQd4Nm4cL8+WLKAiCNe7rnCT+1hmKfv4e5pptvrRtK23bPkM4OQYocg1Jdz/XaY4ibNLPGO2bI/pC6OSKOt+1P062JCIcXIJMjh0heY1BpcQUUlL2F/gAXzfA6SoqAs4AAAAASUVORK5CYII="
                alt="twitter social"
                
              />
            </div>
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBtVPdbYNADObuDXjJCIxwIyQbZARGSCZoV+gEdIOmE4QNwgZhg7biV0hw/Vz5kEWBNFJjydjn388+zvP+idSSw1q7qapqr5SK2JRprTPf93PvL8QFXpumsQucgKPVIhQAvtZ1/QH5DN46X1mWRjS4LhZzRVaDJnGE/leA6BYJFAege4PtDD2WxRh1MtfFSkfbtheyISEjJp1sIodGtw6Vps8wDIZk3/cvjCRGgAEfgyAwxLi9I87vYpyUJ9nLsX6qi25noLh4N4hyKHdENCV0/fLuJM2JOcmiKLZsTzGKAaqDCyQdCJ7cues6w2omEWwkTCK3bJJSd/65Wx4dfKWjA3oMWwrfSaKbu+Upqrt+SBk3Lhs7+YTY8ZGCEnoWzk/7ox2hoRtvt/qAqcutRzv3NNRaQf5RDY+eh2F4YuSPo2+QO7J9ibQvMwAAAABJRU5ErkJggg=="
                className="h-4 w-4"
                alt="copyright"
              />
              <p className="text-sm" style={{color:"white"}}>2022 Metabnb</p>
            </div>
          </div>
            </div>
          
          </div>
          <div className='col-3 mt-3'>
          <div className='text-start'>
              <h3 className="mb-6 font-bold" style={{color: "white"}}>Community</h3>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>NFT </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Tokens </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Landlords </a>
              </div>
              <div className="my-2 text-sm">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Discord </a>
              </div>
              </div>
          </div>
          <div className='col-3 mt-3'>
                <div className="text-start">
                <h3 className="mb-6 font-bold" style={{color: "white"}}>Places</h3>
                </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Castle </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Farms </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Beach </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Learn more </a>
              </div>
          </div>
          <div className='col-3 mt-3'>
                <div className="text-start">
                <h3 className="mb-6 font-bold" style={{color: "white"}}>About us</h3>
                </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Road map </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Creators </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Career </a>
              </div>
              <div className="text-start">
                <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Contact us </a>
              </div>
          </div>
        </div> 
          </div>   
               
      </footer>
      
  </div>


  <Outlet />
</>
    );
  }
}


export default Home;
