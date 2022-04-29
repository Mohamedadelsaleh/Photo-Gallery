import React,{useEffect} from 'react'
import UseStorage from '../GlobalHooks/UseStorge'
import { motion } from 'framer-motion';

const ProgressBar = ({file , setFile}) => {
    const {url, progress} = UseStorage(file);

    useEffect(() =>{
        if(url) {
            setFile(null);
        }
    },[url,setFile])

    return (
        <motion.div className="progress-bar"
            initial={{width:0}}
            animate={{width:progress + '%'}}
        
        >
            
        </motion.div>
    )
}
export default ProgressBar;