'use client'
import generateMessage from '../utils/generateContent.js'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import CustomInputComp from './component/Input.jsx'
// import { Box, Grid } from '@mui/system'
import CustomBoxComp from './component/CustomBoxComp.jsx'
import Grid from '@mui/material/Grid2'
import CustomBtnComp from './component/CustomBtnComp.jsx'
import ReactMarkDown from "react-markdown"
import Loading from './loading.js'
import ResponseData from './data.jsx'



const page = () => {
  // console.log("this is reasponse=>", text);
  const [data, setdata] = useState("");
  const [loading, setLoading] = useState(false);
  // const [helperText,sethelperText] = useState("How can i help you 🙏");
  const [hlperTextDisplay, sethelperTextDisplay] = useState(true);
  const inputRef = useRef(null); // Create a ref in the parent

  const handeledFetchedText = async () => {
    if (inputRef?.current) {
      const input = inputRef.current.value; // Access the input's value

      setLoading(true);  // Show loading spinner

      sethelperTextDisplay(false)

      // Simulate async fetching with a delay
      const res = await generateMessage(input);  // Fetch data from generateMessage

      setdata(res);  // Set response data
      setTimeout(() => {
        // setLoading(false);  // Hide loading spinner after fetching the response

      }, 4000)

    }

  }
  const helperText = "How can I help you 🙏";
  console.log("fetched res==>", data);




  return (
    /* this cumtom box is my main container  */


    <CustomBoxComp Width="80" Height="100" Position={"relative"} Margin="auto" PaddingInline="1rem" PaddingBlock={"0.8rem"} >


      {/* heading or name of our chatbot*/}
      <p className='heading'>Response.OS</p>
      {/*This box contains a Grid layout for the input field and the button*/}
      <CustomBoxComp
        Position={"absolute"}
        Bottom={"0"}
        Width="100"
        PaddingBottom="1rem"

      >
        {/* this grid container is responsible for input box and send prompt button */}
        {/* <Grid container border={"2px solid blue"} justifyContent={"center"} alignItems={"center"}> */}
        <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
          {/* Input box */}
          <Grid item size={{ xs: 6 }} >
            <CustomInputComp Width="100" Height="100" inputRef={inputRef} />
          </Grid>
          {/* Button */}
          <Grid item size={{ xs: 2 }} >
            <CustomBtnComp Width="100" fontWeight="700" Color="Black" BackgroundColor="white" OnclickFunc={handeledFetchedText}>
              Search
            </CustomBtnComp>
          </Grid>
        </Grid>
      </CustomBoxComp>
      {/* below box will display the response of the prompt */}
      <CustomBoxComp BR="10px" Width="100" Height="82" Overflow="auto" PaddingInline="2rem" PaddingBlock="1rem" lineHeight="1.8rem" resBg={true}>

        {
          hlperTextDisplay ? <p className='helperText'>{helperText}</p> :
            loading ? (
              // Loading spinner
              <Loading />
            ) : (
              // Render the response
              <ReactMarkDown>{data}</ReactMarkDown>
            )
        }
      </CustomBoxComp>

    </CustomBoxComp>



  )
}

export default page