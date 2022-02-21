import React from 'react'
import './Cube.css'

const Cube = () => {
  return (
    <div className="box-area">
        <div id="box-front" className="box">
                <img alt='crypto' className='opacity-90' src="https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg"></img>
        </div>
        <div id="box-right" className="box">                        
                <img alt="crypto" className='opacity-90' src="https://cdn.pixabay.com/photo/2021/04/30/16/47/btc-logo-6219386_960_720.png"></img>
        </div>
        <div id="box-back" className="box">                        
                <img alt="crypto" className='opacity-90' src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg"></img>
        </div>
        <div id="box-left" className="box">                        
                <img alt="crypto" className='opacity-90' src="https://ih1.redbubble.net/image.529301911.4088/st,small,507x507-pad,600x600,f8f8f8.u8.jpg"></img>
        </div>
        <div id="box-top" className="box">                        
                <img alt="crypto" className='opacity-90' src="https://globalcrypto.tv/wp-content/uploads/2021/12/Binance-Gets-To-Be-The-First-ever-Crypto-Regulator-In-Bahrain-small.png"></img>
        </div>
        <div id="box-bottom" className="box">                        
                <img alt="crypto" className='opacity-90' src="https://zondaglobal.com/documents/20124/454444/XRP2.png/457d0cda-2d75-a21d-7984-d3a2c235b0ff"></img>
        </div>
  </div>
  )
}

export default Cube;