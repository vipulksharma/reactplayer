import ReactPlayer from 'react-player';
import React, { Component } from 'react';

export default class ReactPlayerDemo extends Component {

    state = {
        pip: false,
        url: "https://dawchihliou.github.io/react-use-pip/video-sample.mp4",
        login: false,
        playing: true,
    } 
    componentDidMount() {

        try {
            if (window.webkit) {
                window?.webkit?.messageHandlers?.getAppDetails?.postMessage?.(null)
            } else {
                window?.native?.getAppDetails()
            }
            
        } catch(e) {
            console.log(e);
        }

        try {
            console.log('inside the block');
            if (window.webkit) {
                console.log('is webkit');
                window?.webkit?.messageHandlers?.logWebApi?.postMessage?.("{\"uri\":\"https://mockable.tiket.com/rest\",\"query\":\"some_query=some_value\",\"method\":\"GET\",\"reqPayloadSize\":23,\"respPayloadSize\":2223,\"respCode\":200,\"respTime\":54,\"exception\":\"-\",\"businessCode\":\"SUCCESS\",\"businessMsg\":\"SUCCESS\"}")
            } else {
                console.log('called for android');
                window.app?.logWebApi("{\"uri\":\"https://mockable.tiket.com/rest\",\"query\":\"some_query=some_value\",\"method\":\"GET\",\"reqPayloadSize\":23,\"respPayloadSize\":2223,\"respCode\":200,\"respTime\":54,\"exception\":\"-\",\"businessCode\":\"SUCCESS\",\"businessMsg\":\"SUCCESS\"}")
            }
            
        } catch(e) {
            console.log(e);
        }




    }

    getMobileOperatingSystem = () => {
        let standalone = window.navigator.standalone,
            userAgent = window.navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase(),
            safari = /safari/.test( userAgent ),
            ios = /iphone|ipod|ipad/.test( userAgent ),
            isAndroidWebView = window.hasOwnProperty('app');
             
        if (ios && !standalone && !safari) {
            return 'iOS';
        } else if (/android/i.test(userAgent) && isAndroidWebView) {
            return 'Android';
        } else {
            return 'unknown';
        }
    }

    handleEnablePIP = () => {
        this.setState({
            pip: true
        })
    }

    handleTogglePIP = () => {
        this.setState({
            pip: !this.state.pip
        });
    }

    handleDisablePIP = () => {
        this.setState({
            pip: false,
        })        
    }


    checkLogin = () => {
        // if (sessionStorage.token) {
        //     //fetch login username
        //     // if login details met show
        //     // If not clear localstorage and fetch the function again.
        //     alert('user is already logged in');
        //     return;
        // }
        // if (ReactPlayer.canEnablePIP(this.state.url)) {
        //     // this.handleTogglePIP();
            
            
        // } else {
        //     if (this.getMobileOperatingSystem() === 'Android'){
        //         //call android bridge to enable pip
        //         if (window["app"]) {
        //             // window["app"].tiketTogglePIP(true);
        //         }
        //         else {
        //           alert('bridge not found');
        //         }
        //     } else {
        //         // this.handleTogglePIP();
        //     }
        // }
        // if (this.getMobileOperatingSystem() === 'Android' && window["app"] && window.app.tiketTogglePIP) {
        //     window.location.href = 'https://m.tiket.com/login';
        // } else {
        //     alert('bridge not found bro');
        // }
        // if (this.getMobileOperatingSystem() === 'iOS' || this.getMobileOperatingSystem() === 'Android') {
            
            // App to intercept this call and check login and get login done and return event which we use to fetch username.
        // }

        // window.addEventListener('TL_SET_TOKEN', (event) => {
        //     // if logged in
        //     // based on event data from app call login api to get user details.
        //     this.handleTogglePIP();
        //     // sessionStorage.token = event.detail.token;
        //     if (this.getMobileOperatingSystem() === 'Android'){
        //         //call android bridge to enable pip
        //         if (window["app"]) {
        //             window["app"].tiketTogglePIP(false);
        //         } 
        //     } 
        // });            
    }

     



    
  render() {
    const {url, pip, playing} = this.state;
    return(
      <div className="wrapper">
        <ReactPlayer 
            url={url} 
            pip={!!pip} 
            playing={playing}
            onEnablePIP={this.handleEnablePIP} 
            onDisablePIP={this.handleDisablePIP} 
            stopOnUnmount={false} 
            playsinline={true}
        />
        <a  onClick={this.checkLogin}>{
            pip ? 'Disable PIP' : 'Enable PIP'
        }</a>

        <a href='https://input-poc-ashish.vercel.app/'>Go to another link from here</a>
       
      </div>
    )
  }
}








