import React from 'react';
import { NavLink} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
 // Importing CSS From Index.css which is located in same folder 
import './Index.css'

// Make a function instead of Class 
function Index() {
  return (
    <div>
           <nav className=" MainNav navbar navbar-expand-lg navbar-Dark bg-Dark fixed-top" style={{ background:"#beeced"padding:"5px 150px 5px 130px"}} >
                  <p  className="navbar-brand" style={{fontSize:"20px",color:'#4e9694',margin:"0 0 0 0"}}>
                       <NavLink  to="/Inner-page" style={{color:'#4e9694'}} >
                               JifCast
                       </NavLink>
                  </p>
                   <button className="navbar-toggler" style={{margin:"0 -100px 0 0",color:'#4e9694'}}   type="button" 
                           data-toggle="collapse" data-target="#navbarNav" 
                           aria-controls="navbarNav" aria-expanded="false" 
                           aria-label="Toggle navigation">
                      <span className="fa fa-arrow-down"  >
                      <span style={{border:'1px solid red',
                                    background:'red',color:'white',
                                    borderRadius:100,fontSize:10}}>
                                      5
                       </span>
                       </span>
                  </button>
             <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
    <a style={{marginRight:'100px' }} className="nav-item nav-link Lineonhover" href="https://www.google.com.pk/">
      <span  className="fa fa-refresh"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-8px',color:'#4e9694' }}>Refresh</div>
    </a>
    <a  style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link " href="https://www.yahoo.com"> 
    <span  className="fa fa-microphone"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-13px',color:'#4e9694' }}>Discover</div>
    </a>
    <a style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link "   href="https://www.amazon.com/">
    <span  className="fa fa-headphones"  style={{fontSize:'30px',color:'#4e9694'}}></span><br/><div style={{fontSize:"13px",marginLeft:'-20px',color:'#4e9694' }}>Notifications</div>
    </a>
    <NavLink style={{fontSize:"15px",marginRight:'100px' }} className="nav-item nav-link "   to="/">
    <img src='./assets/Card_Img.png' alt="Card image cap" style={{width:'40px',height:'40px'}}/><br/><div style={{fontSize:"13px",marginLeft:'-10px',color:'#4e9694' }}>Username</div>
    </NavLink>
  </ul>
  </div>
</nav>
<div>
<div className="Title" style={{color:'#4e9694'}}>PlayList</div>
<Card className="card-style">
        <CardImg top style={{width:'120px',height:'120px'}}  src='./assets/Card_Img.png' alt="Card image cap" />
        <CardBody>
          <CardSubtitle style={{fontSize:10,color:'#4e9694',marginBottom:'5px',marginTop:'-20px'}}>JoeRegan</CardSubtitle>
          <CardSubtitle >JRE MMA SHOW #75 with Dan Hardy</CardSubtitle>
          <CardSubtitle style={{fontSize:10,marginTop:'5px',color:'#4e9694'}}>Joe is joind by former wolterweigth connection UFC comentator Dan Hardy</CardSubtitle>
          <CardText style={{marginTop:'3%'}}>
            <span className="fa fa-heart-o" style={{marginRight:'5px',color:'#4e9694'}}></span><span style={{marginRight:'5%',color:'#4e9694'}}>84</span>
            <span className="fa fa-headphones" style={{marginRight:'5px',color:'#4e9694'}} ></span><span style={{marginRight:'5%',color:'#4e9694'}}>96</span>
            <span className="fa fa-cloud-download" style={{marginRight:'5px',color:'#4e9694'}}></span>
          <CardText  style={{float:'right',flexDirection:'row',flex:'1'}}>
            <div class="progress Progress-Bar" style={{width:200,height:7}}>
                <div class="progress-bar " style={{width:'70%',background:'#4e9694',fontSize:'10px'}}>70%</div>
           </div>

           </CardText>
           </CardText>          
        </CardBody>
</Card>
<Card className="card-styles">
        <CardImg top style={{width:'120px',height:'120px'}}  src='./assets/Card_Img.png' alt="Card image cap" />
        <CardBody>
        <CardSubtitle style={{fontSize:10,color:'#4e9694',marginBottom:'5px',marginTop:'-20px'}}>Myfavoritemurder</CardSubtitle>
          <CardSubtitle >MFM Minisode 13</CardSubtitle>
          <CardSubtitle style={{fontSize:10,marginTop:'5px',color:'#4e9694'}}>The week's hometown include serial killer connection and an acid trip discovery </CardSubtitle>
          <CardText style={{marginTop:'3%'}}>
            <span className="fa fa-heart-o" style={{marginRight:'5px',color:'#4e9694'}}></span><span style={{marginRight:'5%',color:'#4e9694'}}>43</span>
            <span className="fa fa-headphones" style={{marginRight:'5px',color:'#4e9694'}} ></span><span style={{marginRight:'5%',color:'#4e9694'}}>87</span>
            <span className="fa fa-cloud-download" style={{marginRight:'5px',color:'#4e9694'}}></span>
          <CardText  style={{float:'right',flexDirection:'row',flex:'1'}}>
            <div class="progress Progress-Bar" style={{width:200,height:7}}>
                <div class="progress-bar " style={{width:'48%',background:'#4e9694',fontSize:'10px'}}>48%</div>
           </div>

           </CardText>
           </CardText>     
        </CardBody>
</Card>



<Card className="card-styles">
        <CardImg top style={{width:'120px',height:'120px'}}  src='./assets/Card_Img.png' alt="Card image cap" />
        <CardBody>
        <CardSubtitle style={{fontSize:10,color:'#4e9694',marginBottom:'5px',marginTop:'-20px'}}>JoeRegan</CardSubtitle>
          <CardSubtitle >JRE MMA SHOW #75 with Dan Hardy</CardSubtitle>
          <CardSubtitle style={{fontSize:10,marginTop:'5px',color:'#4e9694'}}>Joe is joind by former wolterweigth connection UFC comentator Dan Hardy</CardSubtitle>
          <CardText style={{marginTop:'3%'}}>
            <span className="fa fa-heart-o" style={{marginRight:'5px',color:'#4e9694'}}></span><span style={{marginRight:'5%',color:'#4e9694'}}>84</span>
            <span className="fa fa-headphones" style={{marginRight:'5px',color:'#4e9694'}} ></span><span style={{marginRight:'5%',color:'#4e9694'}}>96</span>
            <span className="fa fa-cloud-download" style={{marginRight:'5px',color:'#4e9694'}}></span>
          <CardText  style={{float:'right',flexDirection:'row',flex:'1'}}>
            <div class="progress Progress-Bar" style={{width:200,height:7}}>
                <div class="progress-bar " style={{width:'85%',background:'#4e9694',fontSize:'10px'}}>85%</div>
           </div>

           </CardText>
           </CardText>    
        </CardBody>
</Card>
</div>
    </div>
  );
}
export default Index;
