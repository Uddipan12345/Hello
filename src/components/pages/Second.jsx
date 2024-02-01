// import React from 'react';
// import { useParams, useLocation } from 'react-router-dom';

// function Second(props) {
//     const { id } = useParams();
    
//     const location = useLocation();
//     const { imageUrl, summary, showId, showName } = location.state || {};

//     return (
//         <div className="container">
//             <div className='container'>
//                 <h3>Details</h3>
//                 <p>Show ID: {id}</p>
//                 <p>Show Name: {showName}</p>
//                 <img src={imageUrl} alt="Show" />    
//                 <p>{summary}</p>
//             </div>
//             <div className='container'>
//                 <button>Next</button>
//             </div>
//         </div>
//     );
    
// }

// export default Second;
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Second(props) {
    const { id } = useParams();
    
    const location = useLocation();
    const { imageUrl, summary, showId, showName } = location.state || {};

    // State variables to track form inputs
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    // State variable to track whether the button has been clicked
    const [showForm, setShowForm] = useState(false);

    // Function to handle the click event of the "Next" button
    const handleNextClick = () => {
        setShowForm(true);
    };

    return (
        <div className="container">
            <div className='container'>
                <h3>Details</h3>
                <p>Show ID: {id}</p>
                <p>Show Name: {showName}</p>
                <img src={imageUrl} alt="Show" />    
                <p>{summary}</p>
            </div>
            <div className='container'>
                <button onClick={handleNextClick}>Next</button>
            </div>
            {showForm && (
                <div className='container'>
                    <h3>Form</h3>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender:</label>
                            <select 
                                id="gender" 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Second;
