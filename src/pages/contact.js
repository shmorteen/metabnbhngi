import React from "react";
import {Link, Outlet } from "react-router-dom"
import { Button, Modal } from "react-bootstrap"


class Contact extends React.Component {
    constructor(){
        super()
        this.state={
          show: false
        }
      }
      handleModal() {
        this.setState({show:!this.state.show})
      }
    render(){
    return (
      <>
  <div>
    <div>
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
            <Link
              className=""
              to="/home"
              aria-current="page" style={{textDecoration: "none",color: "grey",fontSize:20}}
            >
              Home
            </Link>
            <a
              className="mx-5"
              href="/placeToStay"  style={{textDecoration: "none",color: "grey",fontSize:20}}
            >
              Place to stay
            </a>
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
          <Button onClick={()=>{this.handleModal()}}
          className="m-2 btn md-rounded text-white Home"
          style={{ backgroundColor: "#A02279", height: 50, fontSize: 12 }}>
            Connect Wallete
          </Button>
          <Modal show={this.state.show}>
            <Modal.Header>Connect Wallet <span></span></Modal.Header>
            <Modal.Body>
              <h3 className='text-center'>Choose your preffered wallet</h3>
              <div className='d-flex flex-row justify-content-between'>
              <img src="data:image/png;base64,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" />
              <span style={{ height: 50, fontSize: 40, fontWeight: "bold" }}>Meta Mask</span>
              <Button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </Button>
              </div>
              <div className='d-flex flex-row justify-content-between'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAerSURBVHgB7Vh9bJ1VGf+dc9773o/e2+92G+02uq6rQZmIzGZQYGbiFDMkRsRo5GMJC0YlS7DVmJg0JgSYCEjCHzN+JURU5pwRJZkg6yYMGJlUtqmjm7S7d23Xlrb3++t93+Pz3tu199733NteAiEhfdI3vfc5zznnd57zez7eC6zIinxIZfg7G934gOThW5oD5caYStl/XXO33yvevKWbHWquwWNteycGyVDifZRTt12h+9eHe0MRc8/zZ63tLG11Dbw8PVZqpylnM3ZrLC31352UO69dJ3bK/ssmQpBPQxpPtf94agjvoZzrX3ONS+KLEuFvv37Bqj8RkjDJNUywO2j4IQc01SL917faoD5+6XtnI8cNlwsEbJJInLKkfFRq2pH1D53/H96FnLl/TbOX8TvA5S6C8NFEFvjHiInhaasQ2dDeo5OfWBJwf09jO3QtWKqv9TDc1CnQVpufQk6Y45CHLIv/vn009Ge2HyaWkFDf6tsszr8sJfs8rZLj6WRM4oWzJmaSxYyjb1KaidWPHItNFuqdlHCJr6s2i6Qk/vRvA9e0C/S0c/uk9RLsdsbl7TNXtCUSDyCDCpJMMxZPyTobySUvDY1bePW8BcNyhgez/4TvXiD2o8qAwbvLxZfNrdeCJqbjEjd0EEX0vN7IwAedngqSzi6umSQKHBo2EAovEccWOhzoHKCYPI4l5NyMhT+cMjAVz2+YNfOHKbsvUdOYJ8xYROI3Q8sAC9tt8iUsBdgy5AtYhkTTEr9908A/x/KBkk6Xt01mbEICr5w38cfTBlLG8jIkF9oxh65UEc9MjRJ/YlimvDRq4iBx+51YHlSp2KqZOHI2Jy5YqEKSDx8d/y+WAvyzE8jSxmdRhQTpevefNDARcSKeoLFn6CbGIlXXnSFVseJKU4b/oEppr2Pw6059jYuho4GhWpEMb6v0DsAD21r8BHgrqpCt6wQ+QznaxZ3AdAFso4zSs5ajGmESvXu21ddjScCDUzEi41+wDNFo9o6NAlva8ssoOTyv66H8/bkuAbFMZ9O0vz4+ODeHpQDnlBxHaUbFCKl1M3xts4buFu4ApwJsy6Zmjq/QnMAy+kCadkyl19TGIgZmOQ6zKsCwqYVhPXHSrzHoJRRQhVXpIVp8DN+4SkOYCsnbsxLDk3IhnxeK4CysWA5lL6ivt3WfS2D3hmaGLvLMhiaGppq8eYJybirlnKO7AH9JvYtRSssYTluvh555T09GJYJzEm9NWfRQuWDywb1Hpn6AagAHv9+yMeB1DetasYld1WwQqut30X0Faop1UbLNGuo9aslWK7njDBWVrBRtLQPBMdUcdT9M0uAT13JFhETIG9GYRS2zzfX8uP3ZfiydEeDiOemMzD25A8o8bSR9sXLtGEdTfbG97SAN2c/Sx1+jGsB09LtVbqz1c0SoCCQzzm7S6xFoLsm5iaSFeMIZv163QJ2fQ8V8LsWd5QArs4QcWNXKpbxRNebSJJoaXTlwtqQoNo/MNmLGcEEoboQxgaip5WzS83HsIbBNDS7ySZnqR3VADjhzcFnASY1fhwr89nosunodmt+NvcFOPBlaj8MzTRTZvOhS7M+Cdnh2qjVn80ioE8znoVvS4fFUzJrupNtzk2pAndYY/1al/G57WacXsY4AdWzbR3BmzkOPG27dPn8xVTRKNb3rUrhz8zA6A2lqMxlxmufWqCTMFLvp336H3gF23yddyekJu1vTK6wH02K5Prdw43hCwOc1cwGYW4uGEimOGu+iN7MGswsTeX4JwDQ1rButq/suxgv1Dg+Hx8Y+zTlXgs2aciFGGBX7Us4KoSoAJUBoXpaKRu59at7cpSnv0+fJaj30/8WKgKMRcZq51KdP0otiJLZ45fW1dvDwXMEoB1gr0GXo1Wh61kI4sriG3y/oBtQENLkYKdU5gm7tY6EL9C+oWsDjIe65FhdnlIdjCTrIfNVT8fLSIRJkY9vygh3ttXyesl3ciOpnBGXQETcP0MJ7SvU2N2vJI+/M5kvXpVYimbY5DfxrluPlkWzRnF5qPa9sXKx2oqDY1AXEAt8dGCQGVXolYE1YBy3J9yjHiG/+Gk7l2VrgsNHUjUTXF/DEvufw2hsni+xPa1fjgR3b4T7zLMTM8EJ19PuEMm8XQP6lcn+VMu11H9cS2QQtp3x193kF8ZHKa3M30t07YTZszOnjiQMO27GLkzAbNyGx9X5oBFgffg56+CS8vooNfWbt692vAOPLA9wxMJIK9bUNUm65uWjAbqQ4zkBah91rOo5Pbb73hx6PvsGueaZpoqEugKs/9pGiKQFq37KGQfzWkK7fgOjm3UM1iUefZIngFhr+FD1XKSD8nQ0OKlumsr0EE/KAtNjNxLGL9Fvaixz8mK7Jv7U8eOGtvMU4nn9m9qAroT/u9bjv8nq8uG/XV3ONTaFwO8pIF43HkEqnnhoKRu+5b+BV+0eBn9vjwb72LnLADjLczqTcQk5qM5n1dFlc5QZGv7muwVWbvdLVmH2j5XvTUVSQwwd+cReVgycImfJ3XcZYmGDfc/2X7t5faZ2J766qMTSth2etc5f9ZHxUuRbeIzl88FeXM0v2kzOLeE8xNg2Bn954664gVmRFVmRF3nf5P07H5qV3hS5kAAAAAElFTkSuQmCC" />
              <span style={{ height: 50, fontSize: 20, fontWeight: "bold" }}>Meta Mask</span>
              <Button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </Button>
              </div>

            </Modal.Body>
          </Modal>

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
            Connect Wallete
          </Button>
          <Modal show={this.state.show}>
            <Modal.Header>Connect Wallet <span></span></Modal.Header>
            <Modal.Body>
              <h3 className='text-center'>Choose your preffered wallet</h3>
              <div className='d-flex flex-row justify-content-between'>
              <img src="data:image/png;base64,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" />
              <span style={{ height: 50, fontSize: 40, fontWeight: "bold" }}>Meta Mask</span>
              <Button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </Button>
              </div>
              <div className='d-flex flex-row justify-content-between'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAerSURBVHgB7Vh9bJ1VGf+dc9773o/e2+92G+02uq6rQZmIzGZQYGbiFDMkRsRo5GMJC0YlS7DVmJg0JgSYCEjCHzN+JURU5pwRJZkg6yYMGJlUtqmjm7S7d23Xlrb3++t93+Pz3tu199733NteAiEhfdI3vfc5zznnd57zez7eC6zIinxIZfg7G934gOThW5oD5caYStl/XXO33yvevKWbHWquwWNteycGyVDifZRTt12h+9eHe0MRc8/zZ63tLG11Dbw8PVZqpylnM3ZrLC31352UO69dJ3bK/ssmQpBPQxpPtf94agjvoZzrX3ONS+KLEuFvv37Bqj8RkjDJNUywO2j4IQc01SL917faoD5+6XtnI8cNlwsEbJJInLKkfFRq2pH1D53/H96FnLl/TbOX8TvA5S6C8NFEFvjHiInhaasQ2dDeo5OfWBJwf09jO3QtWKqv9TDc1CnQVpufQk6Y45CHLIv/vn009Ge2HyaWkFDf6tsszr8sJfs8rZLj6WRM4oWzJmaSxYyjb1KaidWPHItNFuqdlHCJr6s2i6Qk/vRvA9e0C/S0c/uk9RLsdsbl7TNXtCUSDyCDCpJMMxZPyTobySUvDY1bePW8BcNyhgez/4TvXiD2o8qAwbvLxZfNrdeCJqbjEjd0EEX0vN7IwAedngqSzi6umSQKHBo2EAovEccWOhzoHKCYPI4l5NyMhT+cMjAVz2+YNfOHKbsvUdOYJ8xYROI3Q8sAC9tt8iUsBdgy5AtYhkTTEr9908A/x/KBkk6Xt01mbEICr5w38cfTBlLG8jIkF9oxh65UEc9MjRJ/YlimvDRq4iBx+51YHlSp2KqZOHI2Jy5YqEKSDx8d/y+WAvyzE8jSxmdRhQTpevefNDARcSKeoLFn6CbGIlXXnSFVseJKU4b/oEppr2Pw6059jYuho4GhWpEMb6v0DsAD21r8BHgrqpCt6wQ+QznaxZ3AdAFso4zSs5ajGmESvXu21ddjScCDUzEi41+wDNFo9o6NAlva8ssoOTyv66H8/bkuAbFMZ9O0vz4+ODeHpQDnlBxHaUbFCKl1M3xts4buFu4ApwJsy6Zmjq/QnMAy+kCadkyl19TGIgZmOQ6zKsCwqYVhPXHSrzHoJRRQhVXpIVp8DN+4SkOYCsnbsxLDk3IhnxeK4CysWA5lL6ivt3WfS2D3hmaGLvLMhiaGppq8eYJybirlnKO7AH9JvYtRSssYTluvh555T09GJYJzEm9NWfRQuWDywb1Hpn6AagAHv9+yMeB1DetasYld1WwQqut30X0Faop1UbLNGuo9aslWK7njDBWVrBRtLQPBMdUcdT9M0uAT13JFhETIG9GYRS2zzfX8uP3ZfiydEeDiOemMzD25A8o8bSR9sXLtGEdTfbG97SAN2c/Sx1+jGsB09LtVbqz1c0SoCCQzzm7S6xFoLsm5iaSFeMIZv163QJ2fQ8V8LsWd5QArs4QcWNXKpbxRNebSJJoaXTlwtqQoNo/MNmLGcEEoboQxgaip5WzS83HsIbBNDS7ySZnqR3VADjhzcFnASY1fhwr89nosunodmt+NvcFOPBlaj8MzTRTZvOhS7M+Cdnh2qjVn80ioE8znoVvS4fFUzJrupNtzk2pAndYY/1al/G57WacXsY4AdWzbR3BmzkOPG27dPn8xVTRKNb3rUrhz8zA6A2lqMxlxmufWqCTMFLvp336H3gF23yddyekJu1vTK6wH02K5Prdw43hCwOc1cwGYW4uGEimOGu+iN7MGswsTeX4JwDQ1rButq/suxgv1Dg+Hx8Y+zTlXgs2aciFGGBX7Us4KoSoAJUBoXpaKRu59at7cpSnv0+fJaj30/8WKgKMRcZq51KdP0otiJLZ45fW1dvDwXMEoB1gr0GXo1Wh61kI4sriG3y/oBtQENLkYKdU5gm7tY6EL9C+oWsDjIe65FhdnlIdjCTrIfNVT8fLSIRJkY9vygh3ttXyesl3ciOpnBGXQETcP0MJ7SvU2N2vJI+/M5kvXpVYimbY5DfxrluPlkWzRnF5qPa9sXKx2oqDY1AXEAt8dGCQGVXolYE1YBy3J9yjHiG/+Gk7l2VrgsNHUjUTXF/DEvufw2hsni+xPa1fjgR3b4T7zLMTM8EJ19PuEMm8XQP6lcn+VMu11H9cS2QQtp3x193kF8ZHKa3M30t07YTZszOnjiQMO27GLkzAbNyGx9X5oBFgffg56+CS8vooNfWbt692vAOPLA9wxMJIK9bUNUm65uWjAbqQ4zkBah91rOo5Pbb73hx6PvsGueaZpoqEugKs/9pGiKQFq37KGQfzWkK7fgOjm3UM1iUefZIngFhr+FD1XKSD8nQ0OKlumsr0EE/KAtNjNxLGL9Fvaixz8mK7Jv7U8eOGtvMU4nn9m9qAroT/u9bjv8nq8uG/XV3ONTaFwO8pIF43HkEqnnhoKRu+5b+BV+0eBn9vjwb72LnLADjLczqTcQk5qM5n1dFlc5QZGv7muwVWbvdLVmH2j5XvTUVSQwwd+cReVgycImfJ3XcZYmGDfc/2X7t5faZ2J766qMTSth2etc5f9ZHxUuRbeIzl88FeXM0v2kzOLeE8xNg2Bn954664gVmRFVmRF3nf5P07H5qV3hS5kAAAAAElFTkSuQmCC" />
              <span style={{ height: 50, fontSize: 20, fontWeight: "bold" }}>Meta Mask</span>
              <Button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC" />
              </Button>
              </div>

            </Modal.Body>
          </Modal>
            <div className="pos-f-t" style={{marginRight: -20}}>
              <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-white p-4">
               <div className="flex text-[#434343] md:gap-5 md:text-sm lg:gap-8 lg:text-xl ">
                <a href="/" aria-current="page">
                  Home
                </a>
                <a className="" id="contact"
                style={{textDecoration: "none",fontWeight: "bolder",
                  color: "black",
                  borderRadius: 10
                }}
                to="/"
              >
              Place to stay
              </a>
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
    </div>
    <div className=" mt-[5rem] md:mt-[8rem] md:px-0 lg:mt-[10rem]">
      <div className="mx-5 mt-[7rem] md:m-5">
        <div className="flex items-center justify-center  md:justify-start md:px-[3rem]" style={{color: "434343" }}>
          <div className="mr-3 md:hidden">
            <div
              className="relative inline-block text-left"
              data-headlessui-state=""
            >
              <div>
                <button
                  className="flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2"
                  id="headlessui-menu-button-:r2:"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  Places
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdJNDsIgEAXgGU7iUfQGbrWL0mhM1NtYfxa2FqO11/EGegQvICNBbWjL0LdiwpcHJACYbPJSptllDIHgoagGWtPDDgRyNZ+efVAsk8mTUNtNQlD77BZ7G/+L7emqkETMNaM7hDC2j+BwB3LYC9tY6/dIcBDJdP0iSLy8cJeXhaHyO1GyXkR37EWzSHUew6EGDKEa9iEL3U/BIfduMj1WQwjkA4rBaGQB0tEjAAAAAElFTkSuQmCC"
                    alt="open"
                    className="mr-2 mt-1 w-2 rotate-90 "
                  />
                </button>
              </div>
            </div>
          </div>
          <div className=" hidden gap-5 md:grid md:grid-cols-4 lg:grid-cols-8">
            <a href="/placeToStay">Resturant</a>
            <a href="/placeToStay">Cottage</a>
            <a href="/placeToStay">Castle</a>
            <a href="/placeToStay">fantast city</a>
            <a href="/placeToStay">beach</a>
            <a href="/placeToStay">Carbins</a>
            <a href="/placeToStay">Off-grid</a>
            <a href="/placeToStay">Farm</a>
          </div>
          <button className="flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2 md:ml-[5rem] lg:ml-0">
            Location
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZRtCoAgDEA38T6FHqSO0lG6SieoEwidyDaoqBDb/vXhg5Jimxs+BPgNzrmOH1BipIGI2NDSghLLL+5sLXAixjiEEPrDJpX3fhTU3XPt4Qdeg4wxqUQEAancLNw5TTqBEisN5JHVXT0Sra7qmbW6ZjVNQWdR0zJv33eKZzVNQcU49lpMpLgIra5iTTfeq2u5Tctt+mEWx89eJ96f2IsAAAAASUVORK5CYII=" />
            </span>
          </button>
        </div>
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
    )
}
}

export default Contact;