import React , {Component} from 'react';




class Footer extends Component{
	render(){
		return(
	 		<footer className="page-footer footerColor" >
        <div className="container" >
          <div className="row right-align">
            <div className="col l6 s12">
              <h5 > ایوند دومی در راه است</h5>
              <p> لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانهفارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
							</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>: لینک های مرتبط</h5>
              <ul>
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          	© 2014 Copyright Text
          	<a className="right" href="#!">More Links</a>
          </div>
        </div>
	    </footer>


     	);
	}
}

export default Footer;
