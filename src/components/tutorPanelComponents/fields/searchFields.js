import React from 'react'
import './fields.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchByCouseName = () => {
    return (
        
        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by cource name
                </p>
                <div  >

                    <input id='' placeholder='search by course name' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

export const SearchByPrice = () => {
    return (
        
        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by price
                </p>
                <div  >

                    <input id='' placeholder='search by price' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search by date

export const SearchByDate = () => {
    return (
        
        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by date
                </p>
                <div  >

                    <input id='' placeholder='search by date' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search field

export const SearchFieldWithIcon = () => {
    return(
        <>

            <div className='tutor-panel-component-search-field-container' >
                <SearchIcon  style={{marginLeft:'12px'}} />
                <input  type='text' placeholder='search...' />
            </div>
        
        </>
    )
}