import React , {useState, useEffect, useRef} from "react"
import PropTypes from "prop-types"

const useResize = (myRef) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(myRef.current.offsetWidth)
        const newHeight = (myRef.current.offsetWidth * 13)/10;
        setHeight(newHeight)
      }
      handleResize()
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef])
  
    return { width, height }
 }
  
//class ResizablePdf extends React.Component {
const ResizablePdf = ({pdfUrl}) => {
    const componentRef = useRef()
    const { width, height } = useResize(componentRef)
    const styledHeight = height + 'px'

    return (
        <div>
            <iframe ref={componentRef}
                title="pdf-resume"
                id="pdf-resume"
                src={"http://docs.google.com/gview?url="+ pdfUrl + "&embedded=true"}
                style={{ width: '100%' , height: styledHeight }}
                frameborder="0"></iframe>
        </div>
    )
}

ResizablePdf.propTypes = {
   pdfUrl: PropTypes.string.isRequired,
}

export default ResizablePdf