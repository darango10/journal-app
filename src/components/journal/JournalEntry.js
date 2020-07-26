import React from 'react';
import moment from "moment";
import {useDispatch} from "react-redux";
import {activeNote} from "../../actions/notes";

const JournalEntry = ({entry}) => {

    const dispatch = useDispatch();
    const noteDate = moment(entry.date)
    // console.log(noteDate)

    const handleEntryClick = () => {
        dispatch(activeNote(entry.id,entry))
    }

    return (
        <div className="journal__entry pointer" onClick={handleEntryClick}>

            {entry.url &&

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${entry.url})`
                }}
            >

            </div>

            }
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    {entry.title}
                </p>
                <p className='journal__entry-content'>
                    {entry.body}
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
