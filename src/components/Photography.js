import React from 'react';
import baguio from '../assets/image/273924865_2937927983184736_1286414493951505713_n.jpg';
import baguio2nd from '../assets/image/273018909_2937556573221877_8750808447718442153_n.jpg';
import bgc from '../assets/image/IMG_7325.jpg';
import bgc2nd from '../assets/image/IMG_7318.jpg';
import tagaytay from '../assets/image/IMG_7040 (1).jpg';
import tagaytay2nd from '../assets/image/IMG_7087.jpg';
import tagaytay3rd from '../assets/image/055.png';

const Photography = () => {
  const size = '500x400';
  const [width, height] = size.split('x');

  return (
    <div className="container p-2">
      <div className="row">
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={baguio} alt="Baguio" width={280} height={400} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={bgc} alt="BGC" width={width} height={height} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={bgc2nd} alt="BGC 2nd" width={300} height={height} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={tagaytay3rd} alt="Tagaytay 3rd" width={280} height={400} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={baguio2nd} alt="Baguio 2nd" width={500} height={400} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={tagaytay} alt="Tagaytay" width={300} height={400} className="img-photography" />
        </div>
        <div className="col-md-4 col-lg-3 mb-4">
          <img src={tagaytay2nd} alt="Tagaytay 2nd" width={280} height={400} className="img-photography" />
        </div>
      </div>
    </div>
  );
}

export default Photography;
