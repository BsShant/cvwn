import React from 'react'
import face1 from '../../../assets/bj.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function VolunteerComponent() {
    return (
        <div className='volnt-box'>

            <div className='image-container'>
                <img src={face1} height={200} width={200} style={{ objectFit: "cover", borderRadius: "50%" }} />
            </div>
            <div className='Intel'>
                <h5>ASHLEY SIMMONS</h5>

                <div className='post'>
                    Individual Registration
                </div>

                <div class="items">
                    <a
                        class="social facebook"
                        href="https://www.facebook.com/Login-Designs-2284503471807329/"
                        target="_blank"
                    >
                        <FontAwesomeIcon  className='facebook' icon={brands('facebook-f')} />
                    </a>
                    <a
                        class="social linkedin"
                        href="https://www.linkedin.com/in/login-pvt-ltd-4b93a7172"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={brands('linkedin')} />
                    </a>
                    <a
                        class="social twitter"
                        href="https://www.twitter.com/LoginLtd"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={brands('twitter')} />
                    </a>
                    <a
                        class="social instagram"
                        href="https://www.instagram.com/loginpvtltd/?hl=en"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={brands('instagram')} />
                    </a>

                </div>
            </div>

        </div>
    )
}
