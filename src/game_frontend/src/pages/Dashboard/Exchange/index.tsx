import ProgressBar from "../../../components/ui/Progressbar"
import Sidebar from "../../../components/ui/Sidebar"
import '../index.css'
import usePoints from "../../../hooks/usePoints"
import Loader from "../../../components/ui/Loader"

const Exchange=()=>{
    const {points, incrementPoints, isLoading} = usePoints(0)
    // Future 
    /**
     * Batch Update after a set of interval
     */

    return(
        <main className="exchange-container">
       {isLoading ? <Loader/>: (
        <>
        <div className="progressbar-container z-10">
            <ProgressBar/>
        </div>
        <section className="z-10">
            <img src='/assets/images/ufo.svg' alt="ufo" width={50} height={50} loading="lazy"/>
            <h3 className="exchange-points">{points.toFixed(3)}</h3>
        </section>
        {/* <Sidebar/> */}
        <section
            onClick={incrementPoints}
            className="click-to-earn"
            style={{
                backgroundImage: 'url("/assets/images/firefly.webp")',
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',  
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
                zIndex:1
                
            }}
        >
        </section>
    </>    
    ) 
    } 
        </main>
    )
}
export default Exchange