import React from 'react';
import Sidebar from "./Sidebar";
import NoteScreen from "../notes/NoteScreen";
import {useSelector} from "react-redux";
import NothingSelected from "./NothingSelected";

const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)

    return (
        <div className='journal__main-content'>

            <Sidebar/>

            <main>
                {
                    active !== null
                        ?
                        <NoteScreen/>
                        :
                        <NothingSelected/>
                }


            </main>

        </div>
    );
};

export default JournalScreen;