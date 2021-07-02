import logo from './logo.svg';
import './App.css';
import Slider from './components/slider/slider';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
 <div>
  {/* Menue */}
   <NavBar/>
   {/* EndMenue */}
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>سريع<span></span></h1>
                <p>(Skrill - Neteller - Perfect Money - Paypal - One Card)     شحن وسحب البنوك الإلكترونية  ِشركة وساطة مالية</p>  
                <a href="./#features" className="btn btn-custom btn-lg page-scroll">اقرا المزيد</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>مميزاتنا</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o"></i>
            <h3>راسلنا </h3>
            <p>يمكنك مراسلتنا من خلال تطبيق الشات الموجود لدينا  </p>
          </div>
          <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn"></i>
            <h3>باي بال</h3>
            <p>شحن وسحب البنك الالكتروني العملاق
              باي بال </p>
              <p>يمكنك سحب ارباحك من الانترنت بالاعتماد علي بنك باي بال  كمنصة قوية وامنة لارسال </p>

          </div>
          <div className="col-xs-6 col-md-3"> <i className="fa fa-group"></i>
            <h3>سكريل</h3>
           
              <p>شحن وسحب البنك الالكتروني 
                سكريل</p>
                <p>يمكنك سحب ارباحك من الانترنت بالاعتماد علي بنك سكريل كمنصة قوية وامنة لارسال </p>
              
          </div>
          <div className="col-xs-6 col-md-3"> <i className="fa fa-magic"></i>
            <h3>نيتلر</h3>
            <p>شحن وسحب البنك الالكتروني 
              نيتلر</p>
              
              <p>يمكنك سحب ارباحك من الانترنت بالاعتماد علي بنك نيتلر كمنصة قوية وامنة لارسال </p>
          </div>
        </div>
      </div>
    </div>

    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6"> <img src="./img/about.jpg" className="img-responsive" alt="" /> </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Tempor incididunt</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Incididunt ut labore</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Aliquip ex ea commodo</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>خدماتنا</h2>
          <p>ألان مع سريع يمكنك شحن وسحب البنوك الالكترونية بداية من 1 دولار بدون حد ادني للسحب </p>
        </div>
        <div className="row">
          <div className="col-md-4"> <i className="fa fa-wor dpress">P</i>
            <div className="service-desc">
              <h3>باي بال </h3>
              <p>شحن وسحب البنك الالكتروني العملاق
                  الاموال يمكنك سحب ارباحك من الانترنت بالاعتماد علي بنك باي بال  كمنصة قوية وامنة لارسال</p>
            </div>
          </div>
          <div className="col-md-4"> <i className="fa fa-cart-arrow-down"></i>
            <div className="service-desc">
              <h3>سكريل</h3>
              <p> مع طريقة أكثر ذكاءً للإنفاق في مواقعك المفضلة. يمكنك السحب والايداع ببنك سكريل من خلال منصتنا في امان  </p>
            </div>
          </div>
          <div className="col-md-4"> <i className="fa fa-cloud-download"></i>
            <div className="service-desc">
              <h3>نيتلر</h3>
              <p>ادفع عبر الإنترنت أو أرسل الأموال أو قم بشراء العملات المشفرة وبيعها.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"> <i className="fa fa-globe"></i>
            <div className="service-desc">
              <h3>بايير</h3>
              <p>إرسال أو تبادل أو قبول العملات المشفرة
                على حسابك الشخصي أو موقع الويب الخاص بك..</p>
            </div>
          </div>
          <div className="col-md-4"> <i className="fa fa-plane"></i>
            <div className="service-desc">
              <h3>بيرفكت موني</h3>
              <p>بيرفكت موني هي خدمة مالية رائدة تتيح للمستخدمين إجراء مدفوعات فورية وإجراء تحويلات مالية بأمان</p>
            </div>
          </div>
          <div className="col-md-4"> <i className="fa fa-pie-chart"></i>
            <div className="service-desc">
              <h3>بايسيرا</h3>
              <p>رسال أو تبادل أو قبول العملات المشفرة
                على حسابك الشخصي أو موقع الويب الخاص بك..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  
 
       <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>طلب تحويل </h2>
              <p>  من فضلك قم بملي الخانات التالية </p>
              <p>  و من ثم اضغط علي ارسال وبمجرد ان قمت بذلك سوف نقوم بالتواصل معك</p>
            </div>
            <form name="sentMessage" id="contactForm" novalidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="name" className="form-control" placeholder="ألاسم" required="required"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="phone" className="form-control" placeholder="رقم الهاتف" required="required"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="سحب" checked/>
                      <label className="form-check-label" htmlfor="exampleRadios1">
                        سحب
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="ايداع" />
                      <label className="form-check-label" for="exampleRadios2">
                        ايداع
                      </label>
                    </div>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                   
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>باي بال</option>
                      <option selected >نيتلر</option>
                      <option>سكريل</option>
                      <option>بيرفكت موني</option>
                      <option>بايير</option>
                    </select>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="number" id="name" className="form-control" placeholder="المبلغ المطلوب بالدولار " required="required"/>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="اترك رسالة "
                  required></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contact Info</h3>
            <p><span><i className="fa fa-map-marker"></i> Address</span>4321 California St,<br/>
              San Francisco, CA 12345</p>
          </div>
          <div className="contact-item">
            <p><span><i className="fa fa-phone"></i> Phone</span> +1 123 456 1234</p>
          </div>
          <div className="contact-item">
            <p><span><i className="fa fa-envelope-o"></i> Email</span> info@company.com</p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li><a href="./#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="./#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="./#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="./#"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="footer">
      <div className="container text-center">
        <p> &copy; 2021 All rights reserved to  <a href="./http://www.sare3.com" rel="nofollow">Sare3</a></p>
      </div>
    </div>
    <script type="text/babel" src="/js/jquery.1.11.1.js"></script>
    <script type="text/babel" src="./js/bootstrap.js"></script>
    <script type="text/babel" src="./js/SmoothScroll.js"></script>
    <script type="text/babel" src="./js/nivo-lightbox.js"></script>
    <script type="text/babel" src="./js/jqBootstrapValidation.js"></script>
    <script type="text/babel" src="./js/contact_me.js"></script>
    <script type="text/babel" src="./js/main.js"></script>

  </div>
           
  );
}

export default App;
