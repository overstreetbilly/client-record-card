const ClientRecord = () => {
    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
            <h1 className='text-3xl'>Client Record</h1>
            <div className='flex'>
                <p>Name:</p>
                <p>Date: </p>
                <p>Phone: </p>
                <p>Email: </p>
            </div>
            <div>
                <h2>Medical Info</h2>
                <p>Allergies:</p>
                <p>Medications:</p>
                <p>Notes: </p>
            </div>
            <div>
                <h2>Lash Info</h2>
                <div>
                    <h3>Service</h3>

                    <form>
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
            </div>
        </div>
    );
};

export default ClientRecord;
