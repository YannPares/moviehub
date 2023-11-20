import React from 'react'
import './Landing.css'
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../components/LoginForm/LoginForm'
type Props = {}

function Landing({ }: Props) {
  return (
      <>
              <>
            {/* <div className="loading"><img className="img" src="./src/assets/img/icons/logo.png" /></div> */}
            <Helmet>
                <html lang="en" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="The Greatest Music App on Earth" />
                <title>MovieHub</title>
            </Helmet>

            <div className="container-card">

                <div className="card">
                    <div className="corner-logo">
                     
                    </div>

                    <div className="container-content">
            

                        <LoginForm />

                    </div>
                </div>
            </div>
        </>

    )



      
      </>
  )
}

export default Landing