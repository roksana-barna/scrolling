import React, { useEffect, useState } from 'react';


const Home = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);
    const [selectedAttachments, setSelectedAttachments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        // Fetch orders from the server
        fetch('api.json')
            .then((res) => res.json())
            .then((data) => {

                setOrders(data);

            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, []);
    console.log(orders)

    useEffect(() => {
        // Fetch orders from the server
        fetch('api.json')
            .then((res) => res.json())
            .then((data) => {

                setOrder(data);
                console.log(data)

            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, []);
    console.log(order)


    const openModal = (attachments) => {
        console.log('Opening modal with attachments:', attachments);

        setSelectedAttachments(attachments);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='overflow-x-scroll max-w-screen'>
            <div className='grid grid-cols-5 my-16 bg-slate-100  '>
                <div className='overflow-y-auto max-h-screen '>
                    <div className='flex mt-2 justify-between'>
                        <div className=' bg-red-500 w-4 rounded-s-md '></div>
                        <p className='ml-1'>Incomplete</p>
                        <p>0</p>



                    </div>
                    {
                        orders.map((order) => <div className='bg-white rounded-xl' key={order.id}>

                            <p>{order.trelloName}
                                <div className='md:flex mt-4 '>
                                    <img className='h-6 w-6 rounded-full mt-2' src={order.client.image} alt="" />
                                    <p className='ml-1 font-serif mt-2'>Client Name</p>
                                    <div className='md:flex'>
                                        <img className='h-6 w-6 rounded-full ml-6 mt-2' src={order.client.image} alt="" />
                                        <p className='ml-1 font-serif mt-2'>{order.client.name}</p>
                                    </div>

                                </div>
                                <p className='font-serif mb-3 mt-3'>{order.description}</p>
                                <div className='md:flex gap-2'>
                                    <img className='h-6 w-6 rounded-full mb-2' src={order.path} alt="" />
                                    <img className='h-6 w-6 rounded-full mb-2' src={order.path2} alt="" />
                                    <p>{order.contentRating}</p>
                                    <p>{order.commentLength}</p>
                                    <button onClick={() => document.getElementById('my_modal_3').showModal()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />

                                    </svg> </button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            {order.attachments.map((att) => <div className='bg-white rounded-xl' key={order.id}>

                                                <p>{att.name}</p>
                                                <p>{att.path}</p>
                                                <p>{att.extension}</p>
                                            </div>
                                            )
                                            }
                                        </div>
                                    </dialog>

                                    <p>{order.date}</p>
                                </div>                        </p>
                        </div>
                        )
                    }
                </div>
                <div>
                    <div>
                        <div className='overflow-y-auto max-h-screen'>
                            <div className='flex mt-2 justify-between'>
                                <div className=' bg-blue-400 w-4 rounded-s-md '></div>
                                <p className='ml-1'>TODO</p>
                                <p>0</p>
                            </div>
                            {
                                order.map((orderr) => <div className='bg-white rounded-xl' key={orderr.id}>

                                    <p>{orderr.trelloName}
                                        <div className='md:flex mt-4 '>
                                            <img className='h-6 w-6 rounded-full   mt-2' src={orderr.client.image} alt="" />
                                            <p className='ml-1 font-serif  mt-2'>Client Name</p>
                                            <div className='md:flex'>
                                                <img className='h-6 w-6 rounded-full ml-6  mt-2' src={orderr.client.image} alt="" />
                                                <p className='ml-2 font-serif  mt-2'>{orderr.client.name}</p>
                                            </div>

                                        </div>
                                        <p className='font-serif mb-3 mt-3'>{orderr.description}</p>
                                        <div className='md:flex gap-2'>
                                            <img className='h-6 w-6 rounded-full' src={orderr.path} alt="" />
                                            <img className='h-6 w-6 rounded-full' src={orderr.path2} alt="" />
                                            <p>{orderr.contentRating}</p>
                                            <p>{orderr.commentLength}</p>
                                            <button onClick={() => document.getElementById('my_modal_3').showModal()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />

                                            </svg> </button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    {orderr.attachments.map((att) => <div className='bg-white rounded-xl' key={orderr.id}>

                                                        <p>{att.name}</p>
                                                        <p>{att.path}</p>
                                                        <p>{att.extension}</p>
                                                    </div>
                                                    )
                                                    }
                                                </div>
                                            </dialog>
                                            <p>{orderr.date}</p>
                                        </div>                        </p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='overflow-y-auto max-h-screen'>
                            <div className='flex mt-2 justify-between'>
                                <div className=' bg-yellow-300 w-4 rounded-s-md  '></div>
                                <p className='ml-1'>Doing</p>
                                <p>0</p>

                            </div>
                            {
                                order.map((orderr) => <div className='bg-white rounded-xl' key={orderr.id}>

                                    <p>{orderr.trelloName}
                                        <div className='md:flex mt-4 '>
                                            <img className='h-6 w-6 rounded-full  mt-2' src={orderr.client.image} alt="" />
                                            <p className='ml-1 font-serif  mt-2'>Client Name</p>
                                            <div className='md:flex'>
                                                <img className='h-6 w-6 rounded-full  mt-2 ml-6' src={orderr.client.image} alt="" />
                                                <p className='ml-2 font-serif  mt-2'>{orderr.client.name}</p>
                                            </div>

                                        </div>
                                        <p className='font-serif mb-3 mt-3'>{orderr.description}</p>
                                        <div className='md:flex gap-2'>
                                            <img className='h-6 w-6 rounded-full' src={orderr.path} alt="" />
                                            <img className='h-6 w-6 rounded-full' src={orderr.path2} alt="" />
                                            <p>{orderr.contentRating}</p>
                                            <p>{orderr.commentLength}</p>
                                            <button onClick={() => document.getElementById('my_modal_3').showModal()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />

                                            </svg> </button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    {orderr.attachments.map((att) => <div className='bg-white rounded-xl' key={orderr.id}>

                                                        <p>{att.name}</p>
                                                        <p>{att.path}</p>
                                                        <p>{att.extension}</p>
                                                    </div>
                                                    )
                                                    }
                                                </div>
                                            </dialog>
                                            <p>{orderr.date}</p>
                                        </div>                        </p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='overflow-y-auto max-h-screen'>
                            <div className='flex justify-between'>
                                <p className='ml-1 mt-2'>Under Review</p>
                                <p>0</p>

                            </div>
                            {
                                order.map((orderr) => <div className='bg-white rounded-xl' key={orderr.id}>

                                    <p>{orderr.trelloName}
                                        <div className='md:flex mt-4 '>
                                            <img className='h-6 w-6 rounded-full  mt-2' src={orderr.client.image} alt="" />
                                            <p className='ml-1 font-serif  mt-2'>Client Name</p>
                                            <div className='md:flex'>
                                                <img className='h-6 w-6 rounded-full  mt-2 ml-6' src={orderr.client.image} alt="" />
                                                <p className='ml-2 font-serif  mt-2 '>{orderr.client.name}</p>
                                            </div>

                                        </div>
                                        <p className='font-serif mb-3 mt-3'>{orderr.description}</p>
                                        <div className='md:flex gap-2'>
                                            <img className='h-6 w-6 rounded-full' src={orderr.path} alt="" />
                                            <img className='h-6 w-6 rounded-full' src={orderr.path2} alt="" />
                                            <p>{orderr.contentRating}</p>
                                            <p>{orderr.commentLength}</p>
                                            <button onClick={() => document.getElementById('my_modal_3').showModal()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />

                                            </svg> </button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    {orderr.attachments.map((att) => <div className='bg-white rounded-xl' key={orderr.id}>

                                                        <p>{att.name}</p>
                                                        <p>{att.path}</p>
                                                        <p>{att.extension}</p>
                                                    </div>
                                                    )
                                                    }

                                                </div>
                                            </dialog>
                                            <p>{orderr.date}</p>
                                        </div>                        </p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='overflow-y-auto max-h-screen'>
                            <div className='flex mt-2 justify-between'>
                                <p className='ml-1'>Completed</p>
                                <p>0</p>

                            </div>
                            {
                                order.map((orderr) => <div className='bg-white rounded-xl' key={orderr.id}>

                                    <p>{orderr.trelloName}
                                        <div className='md:flex mt-4 '>
                                            <img className='h-6 w-6 rounded-full  mt-2' src={orderr.client.image} alt="" />
                                            <p className=' font-serif  mt-2'>Client Name</p>
                                            <div className='md:flex'>
                                                <img className='h-6 w-6 rounded-full  mt-2 ml-6' src={orderr.client.image} alt="" />
                                                <p className='ml-1 font-serif  mt-2'>{orderr.client.name}</p>
                                            </div>

                                        </div>
                                        <p className='font-serif mb-3 mt-3'>{orderr.description}</p>
                                        <div className='md:flex gap-2'>
                                            <img className='h-6 w-6 rounded-full' src={orderr.path} alt="" />
                                            <img className='h-6 w-6 rounded-full' src={orderr.path2} alt="" />
                                            <p>{orderr.contentRating}</p>
                                            <p>{orderr.commentLength}</p>

                                            <button onClick={() => document.getElementById('my_modal_3').showModal()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />

                                            </svg> </button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    {orderr.attachments.map((att) => <div className='bg-white rounded-xl' key={orderr.id}>

                                                        <p>{att.name}</p>
                                                        <p>{att.path}</p>
                                                        <p>{att.extension}</p>
                                                    </div>
                                                    )
                                                    }


                                                </div>
                                            </dialog>


                                            <p>{orderr.date}</p>
                                        </div>                        </p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;