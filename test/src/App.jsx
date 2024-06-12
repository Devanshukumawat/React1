// import Card from "./Day1/Card"
// import Footer from "./Day1/Footer";
// import Hompage from "./Day1/Hompage";
// import Form from "./Day2/Form";
// import FormComp from "./Day2/FormComp";
// import Styling from "./Day2/Styling";
// import { useState } from "react";
// import Counter from "./Day3/Counter";
// import ExampleState from "./Day3/ExampleState";
// import Hook from "./Day3/Hook";

// import UseEffectHook from "./Day5/UseEffectHook";
// import Data from "./Day6/Data";
// import Todo from "./todo/Todo";

// import FormComp from "./Day2/FormComp";
// import FormCompo from "./Day4/FormCompo";
// import Data from "./Day4/Data";

// const firtsName = "Devanshu"

// const data = [
//   {name:"Manny",age:34},
//   {name:"SSR",age:31},
//   {name:"Aman",age:38},
//   {name:"Swastik",age:27}

// ]
import Hompage from "./Day7/Homepage";
import Navbar from "./Day7/Navbar";
import About from "./Day7/About";
import Todo from "../src/todo/Todo";
import Card from "../src/Day1/Card"
import Form from "../src/Day2/FormComp";
import Footer from "../src/Day7/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Data from "./Day6/Data";
import Single from "./Day7/Single";


function App(){
  
  return(
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home/:id" element={<Hompage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/card/:abc" element={<Card/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/singleproduct/:id" element={<Single/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    {/* <Data/> */}

    {/* <UseEffectHook/> */}

    {/* <Todo/> */}

    {/* {
      data.map((value)=>(
        <Card name={value.name} field={value.age}/>
      ))
    } */}

  

    {/* <Data/> */}

    {/* <FormCompo/> */}
    {/* <FormComp/> */}

    {/* <Data/> */}

      {/* <ExampleState/> */}

      {/* <Counter/> */}

        {/* <Hook/> */}

        {/* <Hompage/>
        <Card name = {"Devanshu"} field={"Web_developer"}/>
        <Card name = {"Manny"} field={"Actor"}/>
        <Card name = {"Kizie"} field={"Dancer"}/>
        <Styling/>
        <Form/>
        <FormComp/>
        <Footer/> */}
    </>
  )
}

export default App;