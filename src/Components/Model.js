import React from 'react'
import { motion } from 'framer-motion';

const Model = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{y:"-150vh"}}
                animate={{y:"10vh"}}
            />
        </motion.div>
    )
}

export default Model