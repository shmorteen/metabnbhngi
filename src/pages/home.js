import React from 'react';
import {Link, Outlet } from "react-router-dom"


class Home extends React.Component {
  render() {
    return (
      <>
  <div className='container-flex vh-100' style={{fontFamily: "Red Rose,cursive"}}>
      <div className="bg-white p-3" >
        <div className="d-md-flex d-lg-flex d-none flex-row justify-content-around">
          <div className="">
            <img
              className="m-2 h-5 "
              src="https://metabnb-hng-task3.netlify.app/assets/Group.33bc5e6b.png"
              alt="logo"
            />
          </div>
          <div className='mt-3 d-flex flex-row justify-content-between'>
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
          <button
          className="m-2 btn md-rounded text-white"
          style={{ backgroundColor: "#A02279", height: 50, fontSize: 12 }}>
            Connect Wallet
          </button>

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
              <button
              className="mt-2 mx-1 btn sm-rounded text-white"
              style={{ backgroundColor: "#A02279", height: 40 }}>
                Connect Wallet
              </button>
            <div className="pos-f-t" style={{marginRight: -20}}>
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
            </div>
          </div>
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
          <div className="d-flex flex-row justify-content-around mt-5" style={{backgroundColor: "#A02279"}}>
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
        <footer className="d-flex d-md-flex d-none p-5" style={{backgroundColor:"#1D1D1E"}}>
        <div className="row mt-5">
          <div className='col-4'>
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
            <div className="mt-5 pt-5 flex gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBtVPdbYNADObuDXjJCIxwIyQbZARGSCZoV+gEdIOmE4QNwgZhg7biV0hw/Vz5kEWBNFJjydjn388+zvP+idSSw1q7qapqr5SK2JRprTPf93PvL8QFXpumsQucgKPVIhQAvtZ1/QH5DN46X1mWRjS4LhZzRVaDJnGE/leA6BYJFAege4PtDD2WxRh1MtfFSkfbtheyISEjJp1sIodGtw6Vps8wDIZk3/cvjCRGgAEfgyAwxLi9I87vYpyUJ9nLsX6qi25noLh4N4hyKHdENCV0/fLuJM2JOcmiKLZsTzGKAaqDCyQdCJ7cues6w2omEWwkTCK3bJJSd/65Wx4dfKWjA3oMWwrfSaKbu+Upqrt+SBk3Lhs7+YTY8ZGCEnoWzk/7ox2hoRtvt/qAqcutRzv3NNRaQf5RDY+eh2F4YuSPo2+QO7J9ibQvMwAAAABJRU5ErkJggg=="
                className="h-4 w-4"
                alt="copyright"
              />
              <p className="text-sm" style={{color:"white"}}>2022 Metabnb</p>
            </div>
          </div>
          </div>
          <div className='col-8 mt-5' style={{paddingLeft:50}}>
            <div className='d-flex flex-row justify-content-between'>
            <div >
            <h3 className="mb-6 font-bold" style={{color: "white"}}>Community</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>NFT </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Tokens </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Landlords </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Discord </a>
            </li>
          </ul>
            </div>
            <div className='mx-5'>
          <h3 className="mb-6 font-bold" style={{color: "white"}}>Places</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Castle </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Farms </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Beach </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Learn more </a>
            </li>
          </ul>
            </div>
            <div>
          <h3 className="mb-6 font-bold" style={{color: "white"}}>About us</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Road map </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Creators </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Career </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white",fontSize:12, fontWeight:"bold"}}>Contact us </a>
            </li>
          </ul>
        </div>
            </div>
          
         
        
        </div>
        </div>

        
        
        
      </footer>
      <footer className="d-flex d-md-none grid gap-10 bg-[] p-5 text-white md:grid-cols-2 md:p-[4rem] lg:grid-cols-4 lg:flex-row " style={{backgroundColor:"#1D1D1E"}}>
        <div className="flex flex-col gap-10">
          <img
            src="https://metabnb-hng-task3.netlify.app/assets/Group.39565081.svg"
            className=""
            alt="Metabnb Logo"
          />
          <div className="mt-10 flex flex-col gap-10">
            <div className="flex gap-10">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZLLDcMgDIbN44aQMgKjdIVOkG7QdoKu0FE6QkahE7QHBCegRkokRBqSVL0lv2QZy+YDbAAqijE2zrmbtfaFPiYzxpy+1fIaCAF3SmlLCIE5TYLwdIWuzW73RvdkjOlVIJTKA+/9UUrZTRVTWCjOua7lF4PmNOoiTuWCfTj3ocpSeliEEK5CiEe+b9QjnFBTAKCA6hKS9MvTujXFafyH4RP2pmr1f2v2Dto06AOyiUU4wisoHwAAAABJRU5ErkJggg=="
                alt="facebook social"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBjVTrbcIwELYDf5BAYoPSDdigMAF0gmaEjkA3YAPoBKQT4BHYADpBkXgkkfLo96XnKHUC5KSLHd/d53v5tBIKw3CU5/m71nqG35G6TwewAX/0ej3ulebnfD6PPc/bAmQIsG/wDsfHJgTojMBPctkhTdPXfr+/KzwB76/X608cx3PVkmDj04ZMDHW5XNbY5BS0BTmdThMaw3ZOW4AtNb2hELE+NxkgjDFDzrLMDAYDI94ssBjYGIAcIM+VIJoqAHI0xPlWPC0ZehvKnBALva4kcO8IVzibYLuGJ18oxBGrj/UtiiICTWvxym2ryv/EPbNk88mQXY88Vxk3F0pJknyqOgX8dDqdsSuoASGkon8QxrCmjBC5unm6BbQTo5mqe+vLalxZ1z1gSREzFX2sRYji3ZzJZvJtG/wjJgpJDKpndB2lDhrKb26VX9uGampIVpDJZ94YMr1t0PlrHba3eNX6nVnCY/fLVuGbsY+PgrYgvFge7J4Y5RhBb2yUjAbhe0Q9zi92/JRjRFsJUXG4QGVe1IPBxpmFJUDelnaw/QKrRHjlF6P/KgAAAABJRU5ErkJggg=="
                alt="instagram social"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNSURBVHgBzVPLUcMwEJVkH/w7kA5EBZgOTAcpwR0AHUAFgQqADqACmwpICaKC+ODvjD+8ZWRGkDjEOTC8mfWuJe3bffKasf8GfujBPM9Dy7IuEUqYgt26rquGYTgpikIyCuq6fiM/RYKDy6qqBtPKstzAP1AuvBQIQpCETdMktLCLSAix2pLCORWO+75XsFCg3Yw2iAwugYTYTAB5pOVM4d33/WeuDydwkbGpYCkqvaCARLHVHqJTuitOcrqui6h93e4sOI6zQF7G9WVv2BFAbuZ53oJiQWyQ8MSOAIhex1jQA5cVY/GezcfjNyINSa2yw6Hoa20RQd4Nm4cL8+WLKAiCNe7rnCT+1hmKfv4e5pptvrRtK23bPkM4OQYocg1Jdz/XaY4ibNLPGO2bI/pC6OSKOt+1P062JCIcXIJMjh0heY1BpcQUUlL2F/gAXzfA6SoqAs4AAAAASUVORK5CYII="
                alt="twitter social"
              />
            </div>
            <div className="flex gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBtVPdbYNADObuDXjJCIxwIyQbZARGSCZoV+gEdIOmE4QNwgZhg7biV0hw/Vz5kEWBNFJjydjn388+zvP+idSSw1q7qapqr5SK2JRprTPf93PvL8QFXpumsQucgKPVIhQAvtZ1/QH5DN46X1mWRjS4LhZzRVaDJnGE/leA6BYJFAege4PtDD2WxRh1MtfFSkfbtheyISEjJp1sIodGtw6Vps8wDIZk3/cvjCRGgAEfgyAwxLi9I87vYpyUJ9nLsX6qi25noLh4N4hyKHdENCV0/fLuJM2JOcmiKLZsTzGKAaqDCyQdCJ7cues6w2omEWwkTCK3bJJSd/65Wx4dfKWjA3oMWwrfSaKbu+Upqrt+SBk3Lhs7+YTY8ZGCEnoWzk/7ox2hoRtvt/qAqcutRzv3NNRaQf5RDY+eh2F4YuSPo2+QO7J9ibQvMwAAAABJRU5ErkJggg=="
                className="h-4 w-4"
                alt="copyright"
              />
              <p className="text-sm">2022 Metabnb</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-bold">Community</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>NFT </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Tokens </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Landlords </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Discord </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-bold">Places</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Castle </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Farms </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Beach </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Learn more </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 font-bold">About us</h3>
          <ul>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Road map </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Creators </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Career </a>
            </li>
            <li className="my-2 text-sm">
              <a href="/" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}>Contact us </a>
            </li>
          </ul>
        </div>
      </footer>
  </div>


  <Outlet />
</>
    );
  }
}


export default Home;
