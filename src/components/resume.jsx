import React from "react";

const Resume = () => {
    const downloadOnClick = () => {
        // temporary anchor
        const link = document.createElement('a');
        // link points to
        link.href = '/JasonMerchan_Resume.pdf';
        link.download = 'JasonMerchan_Resume.pdf';

        // make the link a part of the DOM but not visible
        document.body.appendChild(link);

        // clicks the link within the DOM to trigger download
        link.click()

        // removes the link very quickly after it was appended
        document.body.removeChild(link)
    }
    return (
        <div id="resume" className="space-y-8 pt-24 mb-12">
            <h2 className="text-4xl font-museomoderno font-bold mb-6">Resume</h2>
                <div className="w-[300px] h-[400px] md:w-[600px] md:h-[600px]">
                    <iframe
                        className="rounded-md"
                        src="/JasonMerchan_Resume.pdf"
                        title="Jason Merchan Resume"
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                    />
                </div>
                <button 
                    onClick={downloadOnClick}
                    className="
                    bg-primaryGreen text-xl rounded-xl 
                    font-museomoderno w-[250px] h-[75px] 
                    items-center justify-center text-white font-medium">
                    Download Resume
                </button>
        </div>
    );
}
export default Resume;

// import React from "react";

// const Resume = () => {
//   return (
//     <div className="space-y-8 mb-24">
//       <h2 className="text-4xl font-museomoderno font-bold mb-6">Resume</h2>
//       <div className="w-full h-[600px]"> {/* Adjust height as needed */}
//         <iframe
//           src="/JasonMerchan_Resume.pdf"
//           title="Jason Merchan Resume"
//           width="100%"
//           height="100%"
//           style={{ border: "none" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Resume;