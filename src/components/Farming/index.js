import React, { useEffect } from 'react';
import './Farm.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { TbArrowsExchange } from 'react-icons/tb';

import MAX from '../../images/MAX.png'

function Farming() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    useEffect(() => {
        Aos.init({ duration: 900 });
    }, []);

    if (isConnected) return <div>

        <div className='FarmingMonitor'
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-offset="300"
            data-aos-delay="500">

            <div className='FarmingTitle'>
                <h3>Buy and Redeem Bonds</h3>
                <p>Earn premium upon redemption</p>
            </div>

            <div className='FarmingBoxes'>

                <div className='BigBoxes'>


                    <div className='IBox'>
                        <div className='IBoxTitle'>
                            <h3>Purchase SNYX</h3>
                        </div>

                        <div className='IBoxChange'>
                            <div className='IBoxT'>
                                <img className='IBoxTImage' src={MAX} />
                                <p>SNYX</p>
                            </div>

                            <TbArrowsExchange style={{ verticalAlign: 'middle' }} size='2rem' />

                            <div className='IBoxT'>
                                <img className='IBoxTImage' src={MAX} />
                                <p>BONE</p>
                            </div>
                        </div>
                        <p>00.00 BONE avalible for purchase</p>
                        <button>Approve SNYX</button>
                    </div>

                    <div className='BoxMid'>
                        <div className='IBox'>
                            <h2>1 SNYX = 00.00 CRO</h2>
                            <p>Last-hour TWAP price</p>
                        </div>
                        <div className='IBox'>
                            <h2>1,000 SNYX = 00.00 CRO</h2>
                            <p>Current price: $0.00</p>
                        </div>
                    </div>

                    <div className='IBox'>
                        <div className='IBoxTitle'>
                            <h3>Redeem SNYX</h3>
                        </div>

                        <div className='IBoxChange'>
                            <div className='IBoxT'>
                                <img className='IBoxTImage' src={MAX} />
                                <p>SNYX</p>
                            </div>

                            <TbArrowsExchange style={{ verticalAlign: 'middle' }} size='2rem' />

                            <div className='IBoxT'>
                                <img className='IBoxTImage' src={MAX} />
                                <p>BONE</p>
                            </div>
                        </div>
                        <p>00.00 OBOND avalible for purchase</p>
                        <button>Approve SNYX</button>
                    </div>

                </div>

            </div>
        </div>
    </div>

    return <div className='Disclaimer'>
        <h2>Please connect your wallet</h2>
        {/* <CustomButton onClick={() => connect()} /> */}
        <Web3Button />
        <Web3Modal
            themeVariables={{
                '--w3m-accent-color': '#494949',
                '--w3m-accent-fill-color': '#f0f8ff',
                '--w3m-background-color': '#000000',
                '--w3m-logo-image-url': 'https://i.imgur.com/hFJdADh.png'
            }}
        />
    </div>
}
export default Farming;