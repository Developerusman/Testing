import React from 'react';
import { NavLink} from 'react-router-dom'
import './Inner.css'


function InnerPage() {
  return (
    <div >
      <nav className=" MainNav navbar navbar-expand-lg navbar-Dark bg-Dark fixed-top" style={{ background:"#beeced",
  padding:"5px 150px 5px 130px"}} >
<p  className="navbar-brand" style={{fontSize:"20px",color:'#4e9694',margin:"0 0 0 0"}}><span  style={{color:'gray'}} >JifCast</span></p>
      <button className="navbar-toggler" style={{margin:"0 -100px 0 0",color:'#4e9694'}}   type="button" 
        data-toggle="collapse" data-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="fa fa-arrow-down"  ><span style={{border:'1px solid red',background:'red',color:'white',borderRadius:100,fontSize:10}}>5</span></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
    <a style={{marginRight:'100px' }} className="nav-item nav-link Lineonhover" href="https://www.facebook.com/">
      <span  className="fa fa-refresh"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-8px',color:'#4e9694' }}>Refresh</div>
    </a>
    <a  style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link " href="https://www.instagram.com/"> 
    <span  className="fa fa-microphone"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-13px',color:'#4e9694' }}>Discover</div>
    </a>
    <a style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link "   href="https://twitter.com/">
    <span  className="fa fa-headphones"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-20px',color:'#4e9694' }}>Notifications</div>
    </a>
    <NavLink style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link "   to="/">
    <img src='./assets/Card_Img.png' alt="Card image cap" style={{width:'40px',height:'40px'}}/><br/><div style={{fontSize:"13px",marginLeft:'-10px',color:'#4e9694' }}>Username</div>
    </NavLink>
  </ul>
  </div>
</nav>
<div className="inner">

This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. 
This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. 
This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. 
This is page 2 description. 

</div>
  

    </div>
  );
}

export default InnerPage;
