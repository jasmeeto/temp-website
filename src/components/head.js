import React from "react"
import {Helmet} from "react-helmet"

const Head = ({ siteTitle }) => (
    <Helmet>
        {/* <script type="text/javascript" src="/assets/js/main.js"> </script> */}

        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"/>

        <link  rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>

        <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300' rel='stylesheet' type='text/css'/>

        <link rel="stylesheet" href="/assets/css/main.css"/>

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
)

export default Head
