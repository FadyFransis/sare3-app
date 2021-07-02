
import './NavBar.css';
function NavBar() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
             data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span
               className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
           <a className="navbar-brand page-scroll" href="./#page-top">Sare'3'</a>
 
         </div>
         <div className="navbar-header">
           <a  className="navbar  navbar-brand page-scroll"> 
           <img width="100px" height="20px" src="https://images-platform.99static.com/yY74ki_0_pDD2ipm1V68dK8RDro=/500x500/top/smart/99designs-contests-attachments/19/19672/attachment_19672192" className="navbar img-circular" alt=""/>
           </a>
         </div>
         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           <ul className="nav navbar-nav navbar-right">
             <li><a href="./#features" className="page-scroll">المميزات</a></li>
             <li><a href="./#about"  className="page-scroll">عن سريع</a></li>
             <li><a href="./#services" className="page-scroll">خدماتنا</a></li>
             <li><a href="./#contact" className="page-scroll">ارسل رسالة</a></li>
             <li><a href="./#contact" className="page-scroll">طلب تحويل</a></li>
           </ul> 
         </div>
       </div>
     </nav>
  );
}

export default NavBar;
