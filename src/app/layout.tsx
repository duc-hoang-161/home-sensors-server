import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Home Sensor Dashboard',
    description: 'A dashboard for displaying home sensor data',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="data:image/png;base64,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"
                />
                <Script
                    type="text/javascript"
                    defer
                >{`"use strict";var _cc=function(){function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,s,e){return s&&t(i.prototype,s),e&&t(i,e),i}}();function _ccc(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}!function(t){function i(t,i){var s=Math.tan(.017453*Math.abs(t));return Math.ceil(i*s)}function s(t){var i=void 0;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)?(3===(i=t.substring(1).split("")).length&&(i=[i[0],i[0],i[1],i[1],i[2],i[2]]),{r:(i="0x"+i.join(""))>>16&255,g:i>>8&255,b:255&i}):{r:0,g:0,b:0}}var e=function(){function t(i,e,h){_ccc(this,t),this.o=h,this.r=s(i),this.d=this.grd(),this.h=this.grs(),this.s=Math.abs(this.gnfr(this.o.size)),this.srpgq(e),this.vx=this.gnfr(this.o.speed.x)*this.grd(),this.vy=this.gnfr(this.o.speed.y)*this.grd()}return _cc(t,[{key:"srpgq",value:function(t){var i=this.srpiq();return 3===t?(this.x=i.x+i.halfWidth,void(this.y=i.y)):2===t?(this.x=i.x,void(this.y=i.y+i.halfHeight)):1===t?(this.x=i.x+i.halfWidth,void(this.y=i.y+i.halfHeight)):(this.x=i.x,void(this.y=i.y))}},{key:"srpiq",value:function(){var t=this.o.c.w/2,i=this.o.c.h/2;return{x:Math.random()*t,y:Math.random()*i,halfHeight:i,halfWidth:t}}},{key:"gnfr",value:function(t){if(t.min===t.max)return t.min;var i=t.max-t.min;return Math.random()*i+t.min}},{key:"grd",value:function(){return Math.random()>.5?1:-1}},{key:"grs",value:function(){return this.o.shapes[Math.floor(Math.random()*this.o.shapes.length)]}},{key:"gr",value:function(t,i){return"rgba("+t.r+", "+t.g+", "+t.b+", "+i+")"}},{key:"an",value:function(t,s,e){this.o.size.pulse&&(this.s+=this.o.size.pulse*this.d,(this.s>this.o.size.max||this.s<this.o.size.min)&&(this.d*=-1),this.s=Math.abs(this.s)),this.x+=this.vx,this.y+=this.vy,this.x<0?(this.vx*=-1,this.x+=1):this.x>s&&(this.vx*=-1,this.x-=1),this.y<0?(this.vy*=-1,this.y+=1):this.y>e&&(this.vy*=-1,this.y-=1),t.beginPath(),this.o.blending&&"none"!==this.o.blending&&(t.globalCompositeOperation=this.o.blending);var h=this.gr(this.r,this.o.opacity.center),a=this.gr(this.r,this.o.opacity.edge),n="c"===this.h?this.s/2:"t"===this.h?.577*this.s:"s"===this.h?.707*this.s:this.s,o=t.createRadialGradient(this.x,this.y,.01,this.x,this.y,n);o.addColorStop(0,h),o.addColorStop(1,a),t.fillStyle=o;var r=Math.abs(this.s/2);if("c"===this.h&&t.arc(this.x,this.y,r,0,6.283185,!1),"s"===this.h){var c=this.x-r,l=this.x+r,u=this.y-r,d=this.y+r;t.moveTo(c,d),t.lineTo(l,d),t.lineTo(l,u),t.lineTo(c,u)}if("t"===this.h){var v=i(30,r),g=this.y+v;t.moveTo(this.x-r,g),t.lineTo(this.x+r,g),t.lineTo(this.x,this.y-2*v)}t.closePath(),t.fill()}}]),t}(),h=function(){function h(i){var s=this;_ccc(this,h),this.c=document.createElement("canvas"),this.x=this.c.getContext("2d"),this.c.setAttribute("id","finisher-canvas"),this.gr(i.className).appendChild(this.c);var e=void 0;t.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout(s.resize.bind(s),150)}),!1),this.init(i),t.requestAnimationFrame(this.an.bind(this))}return _cc(h,[{key:"gr",value:function(t){var i=document.getElementsByClassName(t||"finisher-header");if(!i.length)throw new Error("No .finisher-header element found");return i[0]}},{key:"resize",value:function(){var t=this.gr(this.o.className);this.o.c={w:t.clientWidth,h:t.clientHeight},this.c.width=this.o.c.w,this.c.height=this.o.c.h;var s=i(this.o.skew,this.o.c.w/2),e="skewY("+this.o.skew+"deg) translateY(-"+s+"px)";this.c.setAttribute("style","position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;-webkit-transform:"+e+";transform:"+e+";outline: 1px solid transparent;background-color:rgba("+this.bc.r+","+this.bc.g+","+this.bc.b+",1);")}},{key:"init",value:function(t){this.o=t,this.bc=s(this.o.colors.background),this.ps=[],this.resize(),this.cp()}},{key:"cp",value:function(){var i=0;this.ps=[],this.o.ac=t.innerWidth<600&&this.o.count>5?Math.round(this.o.count/2):this.o.count;for(var s=0;s<this.o.ac;s++){var h=s%4,a=new e(this.o.colors.particles[i],h,this.o);++i>=this.o.colors.particles.length&&(i=0),this.ps[s]=a}}},{key:"an",value:function(){t.requestAnimationFrame(this.an.bind(this)),this.x.clearRect(0,0,this.o.c.w,this.o.c.h);for(var i=0;i<this.o.ac;i++){this.ps[i].an(this.x,this.o.c.w,this.o.c.h)}}}]),h}();t.FinisherHeader=h}(window);`}</Script>
                <Script type="text/javascript" defer>
                    {`
                    new FinisherHeader({
                    "count": 10,
                    "size": {
                        "min": 1300,
                        "max": 1500,
                        "pulse": 0
                    },
                    "speed": {
                        "x": {
                        "min": 0.1,
                        "max": 0.6
                        },
                        "y": {
                        "min": 0.1,
                        "max": 0.6
                        }
                    },
                    "colors": {
                        "background": "#9138e5",
                        "particles": [
                        "#ff4848",
                        "#000000",
                        "#2235e5",
                        "#000000",
                        "#ff0000"
                        ]
                    },
                    "blending": "overlay",
                    "opacity": {
                        "center": 0.5,
                        "edge": 0.05
                    },
                    "skew": -2,
                    "shapes": [
                        "c"
                    ]
                    });`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 relative`}
            >
                <div className="header finisher-header w-screen h-[120vh] absolute z-0 top-0 left-0"></div>
                {children}
            </body>
        </html>
    );
}
