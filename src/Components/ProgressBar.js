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
            <h2 className="progressH2">{progress.toFixed(1)+'%'}</h2>
        </motion.div>
    )
}
export default ProgressBar;