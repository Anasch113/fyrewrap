import React from 'react'
import "./info.css"


const Info = () => {
  const cocfilepath = '/CertificateofConformity.pdf';
  const articlesfilepath = '/Articles.pdf';
  const IGpath = '/Installation_General.pdf';
  const IPpath = '/Installation_Penetration.pdf';
  const tdpath = '/TechnicalDrawing.pdf';
  const msdspath = '/MaterialSafetyDataSheet.pdf';
  const mssppath = '/MaterialSubmittalSheet.pdf';
  const pcspath = '/PCS.pdf';
  const picpath = '/ProductInformationSheet.pdf';
  const videopath = '/insvideo.mp4'
  const openCOCfile = () => {
    window.open(cocfilepath, '_blank');
  };
  const openArticlesPAth = () => {
    window.open(articlesfilepath, '_blank');
  };
  const openIGpath = () => {
    window.open(IGpath, '_blank');
  };
  const openIPpath = () => {
    window.open(IPpath, '_blank');
  };
  const opentdpath = () => {
    window.open(tdpath, '_blank');
  };
  const openmsdspath = () => {
    window.open(msdspath, '_blank');
  };
  const openmssppath = () => {
    window.open(mssppath, '_blank');
  };
  const openpcspath = () => {
    window.open(pcspath, '_blank');
  };
  const openpicpath = () => {
    window.open(picpath, '_blank');
  };
  const openvideopath = () => {
    window.open(videopath, '_blank');
  };

  return (
    <div className='info-container'>
        <div className='info-main-container'>



            <div className='row'>
<div className='box'>

<div className="box-data  wow animate__animated animate__fadeInUp">
<h5 className='h5-text '>Certifications</h5>
<h2 className='long-h2 '>Certifications of Conformity COC</h2>
<button onClick={openCOCfile}>View files</button>
</div>
</div>
<div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='long-h2'>Material Submittle Sheet</h2>
<button  onClick={openmssppath}>View Files</button>
</div>
</div>
<div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='small-h2'>Articles</h2>
<button  onClick={openArticlesPAth}>View files</button>
</div>
</div>



            </div>




            <div className='row'>
            <div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='long-h2'>Product 
Information 
Sheet</h2>
<button  onClick={openpicpath}>View files</button>
</div>
</div>
<div className='box'>

<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='medium-h2'>Technical 
Drawing</h2>
<button  onClick={opentdpath}>View files</button>
</div>
</div>
<div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='medium-h2'>Installation 
Video</h2>
<button  onClick={openvideopath}>View Video</button>
</div>
</div>




            </div>




            <div className='row'>
<div className='box'>

<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='medium-h2'>Safety Data 
Sheet</h2>
<button onClick={openmsdspath}>View files</button>
</div>
</div>
<div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='medium-h2'>Installation 
Manual</h2>
<button onClick={openIGpath}>View Files</button>
</div>
</div>
<div className='box'>
<div className="box-data  wow animate__animated animate__fadeInUp">
<p className= "p-text">Certifications</p>
<h2 className='small-h2'>Application</h2>
<button onClick={openpcspath}>View files</button>
</div>
</div>



            </div>
        

        </div>
      

    </div>
  )
}

export default Info
