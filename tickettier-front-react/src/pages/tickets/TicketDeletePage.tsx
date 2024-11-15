import {useState} from 'react'
import BackButton from '../../components/back-button/BackButton'
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TicketDeletePage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const deleteTicketHandler = async () => {
        setLoading(true);
        try {
            await axios.delete(`/DeleteTicketById/${id}`);
            setLoading(false);
            navigate("/tickets");
        } catch (error) {
            setLoading(false);
            navigate("/404");
        }
    };
    

    return (
        <div  className="pageGeneralClass">
            <BackButton previousroute={"/tickets"} />
            <h1 className="text-2xl sm:text-4xl font-bold my-8">Delete Ticket</h1>
            <div className={`border-2 border-gray-200 w-[400px] max-w-full mx-auto  mt-8 p-2 rounded-lg ${loading ? "blur-sm" : ""}`}>
                <p>Are you sure you want to delete this ticket?</p>
                <div className='flex items-center m-3'>
                    <button onClick={deleteTicketHandler} className="bg-sky-800 text-white px-4 py-2 mx-8 my-2 rounded-md max-md:hidden" >
                        Yes, Delete it
                    </button>
                    <button onClick={() => navigate('/tickets')} className="bg-orange-800 text-white px-4 py-2 mx-8 my-2 rounded-md max-md:hidden">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TicketDeletePage