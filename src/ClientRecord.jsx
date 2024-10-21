import ClientInfo from "./ClientInfo";

const ClientRecord = () => {
    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12'>
            <h1 className='text-3xl'>Client Record</h1>
            <ClientInfo />

            <div>
                <h2 className='text-2xl'>Lash Info</h2>
                <div>
                    <h3 className='text-xl'>Service</h3>
                    <form className='flex flex-row justify-evenly'>
                        <input
                            type='radio'
                            id='full-set'
                            name='service'
                            value='full-set'
                        />
                        <label htmlFor='full-set'>Full Set</label>

                        <input
                            type='radio'
                            id='fill'
                            name='service'
                            value='fill'
                        />
                        <label htmlFor='fill'>Fill</label>

                        <input
                            type='radio'
                            id='removal'
                            name='service'
                            value='removal'
                        />
                        <label htmlFor='removal'>Removal</label>
                    </form>
                </div>
                <div>
                    <h2 className='text-2xl'>Curl</h2>
                </div>
                <div>
                    <h2 className='text-2xl'>Length</h2>
                </div>
                <div>
                    <h2 className='text-2xl'>Thickness</h2>
                </div>
            </div>
        </div>
    );
};

export default ClientRecord;
