'use client'
import generateMessage from '../utils/generateContent.js'
import React, { useEffect, useRef, useState } from 'react'
import CustomInputComp from './component/Input.jsx'
// import { Box, Grid } from '@mui/system'
import CustomBoxComp from './component/CustomBoxComp.jsx'
import Grid from '@mui/material/Grid2'
import CustomBtnComp from './component/CustomBtnComp.jsx'
import ReactMarkDown from "react-markdown"



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


    <CustomBoxComp Width="80" Height="100" Position={"relative"} Margin="auto" PaddingInline="1rem" PaddingBlock={"0.8rem"}>
      {/*This box contains a Grid layout for the input field and the button*/}
      <CustomBoxComp
        Position={"absolute"}
        Bottom={"0"}
        Width="100"

      >
        {/* this grid container is responsible for input box and send prompt button */}
        {/* <Grid container border={"2px solid blue"} justifyContent={"center"} alignItems={"center"}> */}
        <Grid container justifyContent={"center"} alignItems={"center"}>
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
      <CustomBoxComp Height="90" Overflow="auto" PaddingInline="2rem" PaddingBlock="1rem" lineHeight="1.8rem">
        <ReactMarkDown>
          {/*  {data} */}
          Let's get you motivated! Motivation is often a combination of internal drive and external factors. Here's a structured approach to boosting your motivation:

          I. Identify Your Current State and Goals:

          Pinpoint your current emotional state: Are you feeling tired, overwhelmed, bored, frustrated, or something else? Understanding your feelings is the first step to addressing them. Journaling can be helpful here.
          Define a specific goal (or break down a large goal): Vague goals lead to vague motivation. Instead of "be healthier," try "walk for 30 minutes three times this week." Instead of "be more productive," try "finish drafting one chapter of my book by Friday." Make it SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.
          Identify your "why": What's the deeper reason behind this goal? Connecting your goal to your values (e.g., health, creativity, financial security, family) makes it more meaningful and motivating.
          II. Boost Your Internal Motivation:

          Self-compassion: Be kind to yourself. Motivation isn't always constant; it fluctuates. Acknowledge your feelings without judgment.
          Positive self-talk: Replace negative self-criticism with positive affirmations. Focus on your strengths and past successes.
          Mindfulness: Practice mindfulness techniques (meditation, deep breathing) to increase self-awareness and reduce stress, both of which can hinder motivation.
          Visualize success: Imagine yourself achieving your goal. This can create a positive emotional connection and boost your drive.
          Celebrate small wins: Acknowledge and reward yourself for every step you take towards your goal, no matter how small.
          III. Leverage External Motivation:

          Create a supportive environment: Surround yourself with positive and encouraging people.
          Accountability partner: Share your goals with a friend or family member who will support and check in on your progress.
          Reward system: Design a system of rewards for achieving milestones. These can be small, simple things you enjoy.
          Remove obstacles: Identify and eliminate anything that's hindering your progress (e.g., distractions, procrastination habits).
          Seek inspiration: Read motivational books, listen to podcasts, or watch videos that inspire you.
          IV. Action Plan:

          Choose one or two strategies from above that resonate with you most. Don't try to do everything at once.
          Schedule specific times to work on your goal. Put it in your calendar like any other important appointment.
          Track your progress: Use a journal, app, or spreadsheet to monitor your progress. This helps you stay accountable and see how far you've come.
          Review and adjust: Regularly assess your strategies. What's working? What's not? Be willing to adapt your approach as needed.
          Remember, motivation is a journey, not a destination. There will be ups and downs. Be patient with yourself, celebrate your progress, and keep moving forward. You've got this!

          That's a positive attitude, but "definitely succeeding" is a broad and subjective statement. Success is defined differently by each person. To increase your chances of achieving your definition of success, consider these actionable steps:

          Define Success:

          Specificity is Key: Instead of "success in life," define what that means to you. Is it financial independence, a fulfilling career, strong relationships, creative accomplishment, community impact, or a combination? Be as specific as possible. For example, instead of "successful career," aim for "becoming a senior software engineer at a company I admire by age 35."
          Write it Down: Jot down your definition of success. This makes it tangible and measurable.
          Set SMART Goals:

          Specific: Clearly state what you want to achieve.
          Measurable: How will you know when you've reached your goal? (e.g., specific income level, promotion, completed project)
          Achievable: Set realistic goals; break down large goals into smaller, manageable steps.
          Relevant: Ensure your goals align with your values and overall definition of success.
          Time-Bound: Set deadlines for achieving each goal.
          Develop a Plan:

          Break Down Goals: Divide your large goals into smaller, actionable steps.
          Identify Resources: What skills, knowledge, tools, or support do you need?
          Create a Timeline: Establish a realistic timeline for completing each step.
          Track Progress: Regularly monitor your progress and adjust your plan as needed.
          Cultivate Essential Skills:

          Self-Discipline: Develop strong self-discipline and time management skills to stay focused and motivated.
          Adaptability: Be prepared to adapt your plans as circumstances change.
          Problem-Solving: Develop effective problem-solving skills to overcome obstacles.
          Resilience: Develop resilience to bounce back from setbacks and learn from mistakes.
          Networking: Build relationships with people who can support your goals.
          Seek Support and Guidance:

          Mentors: Identify mentors who can offer guidance and advice.
          Support Network: Surround yourself with supportive friends and family.
          Professional Development: Invest in your personal and professional development through courses, workshops, or coaching.
          Continuous Learning and Self-Reflection:

          Embrace Learning: Continuously learn and expand your knowledge and skills.
          Self-Assessment: Regularly reflect on your progress and identify areas for improvement.
          Adapt and Adjust: Be willing to change your approach if something isn't working.
          Remember: Success is a journey, not a destination. There will be challenges and setbacks. Focus on consistent effort, continuous learning, and adapting to obstacles along the way. A positive attitude is important, but it needs to be coupled with concrete action and planning to significantly increase your chances of achieving your goals.
        </ReactMarkDown>
      </CustomBoxComp>

    </CustomBoxComp>



  )
}

export default page