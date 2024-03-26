import React,{useState,useEffect} from 'react'

export default function Progressbar() {
    const [filled, setFilled] = useState(0);
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (filled < 100 && isRunning) {
            const interval = setInterval(() => {
                setFilled(prev => {
                    const newValue = prev + 2;
                    setCurrentPercentage(newValue);
                    return newValue;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    },[filled,isRunning])
  return (
    <div>
          <div className="progressbar">
              <div style={{
                  height: "100%",
                  width: `${filled}%`,
                  backgroundColor: "#a66cff",
                  transition:"width 0.5s"
              }}> </div> 
              <span className='progressPercent'>{filled}%</span>
          </div>
          <button className="btn" onClick={()=>setIsRunning(true)}>Run</button>
    </div>
  )
}
