import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }
    public render(){
        return(
            <html>
                <head>
                {/* <link rel="stylesheet" href="/static/assets/template/fantom/css/bootstrap.css" /> */}
                
                <link rel="shortcut icon" href="favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
                {/* Animate.css */}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/animate.css" />
                {/* Icomoon Icon Fonts*/}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/icomoon.css" />
                {/* Bootstrap  */}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/bootstrap.css" />
                {/* Flexslider  */}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/flexslider.css" />
                {/* Flaticons  */}
                <link rel="stylesheet" href="/static/assets/template/jackson/fonts/flaticon/font/flaticon.css" />
                {/* Owl Carousel */}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/static/assets/template/jackson/css/owl.theme.default.min.css" />
                {/* Theme style  */}
                <link rel="stylesheet" href="/static/assets/template/jackson/css/style.css" />
                </head>
                <body>
                <Main />
                    <NextScript />
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`}}></style>
                </body>

                <script src="/static/assets/template/jackson/js/modernizr-2.6.2.min.js"></script>
                <script src="static/assets/template/jackson/js/jquery.min.js"></script>
                <script src="/static/assets/template/jackson/js/jquery.easing.1.3.js"></script>
                <script src="/static/assets/template/jackson/js/bootstrap.min.js"></script>
                <script src="/static/assets/template/jackson/js/jquery.waypoints.min.js"></script>
                <script src="/static/assets/template/jackson/js/jquery.flexslider-min.js"></script>
                <script src="/static/assets/template/jackson/js/owl.carousel.min.js"></script>
                <script src="/static/assets/template/jackson/js/jquery.countTo.js"></script>
                <script src="/static/assets/template/jackson/js/main.js"></script>
            </html>
        );
    }
}