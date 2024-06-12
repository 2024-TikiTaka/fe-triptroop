

import {ReactComponent as SouthKorea} from '@svg-maps/south-korea/south-korea.svg';
import {useState} from "react";

const JobPostingsStatus = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleRegionClick = (regionName) => {
        setSelectedRegion(regionName);
    };

    return (
        <div>
            <SouthKorea onClick={() => handleRegionClick('전체')} />
            {selectedRegion && <p>선택한 지역: {selectedRegion}</p>}
        </div>
    );
};


export default JobPostingsStatus