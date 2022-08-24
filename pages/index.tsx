import { AnimatePresence } from "framer-motion";
import React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import EyeAnimation from "../components/eyeAnimation/EyeAnimation";
import Layout from "../components/layout/Layout";
const Home:FunctionComponent = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000 )
    } )
    return (
    <AnimatePresence >
    <div className="w-screen min-h-[100vh]">
        { loading ? <EyeAnimation/> : <Layout />}
    </div>
    </AnimatePresence>
    )
}
export default Home;