'use client'
import generateMessage from '../utils/generateContent.js'
import React, { useEffect, useRef, useState } from 'react'
import CustomInputComp from './component/Input.jsx'
// import { Box, Grid } from '@mui/system'
import CustomBoxComp from './component/CustomBoxComp.jsx'
import Grid from '@mui/material/Grid2'
import CustomBtnComp from './component/CustomBtnComp.jsx'
const page = () => {
  // console.log("this is reasponse=>", text);
  const [data, setdata] = useState();
  const inputRef = useRef(null); // Create a ref in the parent

  const handeledFetchedText = async () => {
    if (inputRef.current) {
      console.log("inputRef.current.value==>", inputRef.current.value);

      const inputValue = inputRef.current.value; // Access the input's value
      const res = await generateMessage(inputValue); // Pass the value to the function
      console.log('res---->', res);
      setdata(res);
    }

  }
  useEffect(() => {

    handeledFetchedText();
  }, [])
  console.log("fetched res==>", data);




  return (
    /* this cumtom box is my main container  */
    <CustomBoxComp Width="80" Height="100" Position={"relative"} Margin="auto">
      {/*This box contains a Grid layout for the input field and the button*/}
      <CustomBoxComp
        Position={"absolute"}
        Bottom={"0"}
        Width="100"

      >
        {/* this grid container is responsible for input box and send prompt button */}
        <Grid container border={"2px solid blue"} justifyContent={"center"} alignItems={"center"}>
          {/* Input box */}
          <Grid item size={{ xs: 6 }} >
            <CustomInputComp Width="100" Height="100" inputRef={inputRef} />
          </Grid>
          {/* Button */}
          <Grid item size={{ xs: 2 }} >
            <CustomBtnComp Width="100" fontWeight="900" OnclickFunc={handeledFetchedText}>
              Search
            </CustomBtnComp>
          </Grid>
        </Grid>
      </CustomBoxComp>
      {data}
    </CustomBoxComp>


  )
}

export default page