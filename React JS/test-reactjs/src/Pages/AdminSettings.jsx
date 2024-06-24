import { Tabs } from 'antd';
import { useState } from 'react';
import { TfiLocationArrow } from "react-icons/tfi";
import { useMediaQuery } from 'react-responsive';

const AdminSettings = () => {
    const [detailView, setDetailView] = useState(false)
    const smallScreen = useMediaQuery({ query: "(max-width: 800px)" });

    const userSearchInfo = () => {
        return (
            <>
                <div className='flex m-2 p-2 justify-between max-h-26'>
                    <div className='gap-1 p-1 mx-2'>
                        <h4 className='text-red-500 font-semibold mb-2'>Profile:</h4>
                        <p>https://linkedin.com/in/</p>
                        <p>Lorem ipsum dolor sit amet.at <strong>Hershey</strong></p>
                    </div>
                    <div className='gap-1 p-1 mx-2'>
                        <h4 className='text-red-500 font-semibold mb-2'>Search Date:</h4>
                        <p>18 Dec 2023</p>
                        <p>8:48:34PM</p>
                    </div>
                    <div className='gap-1 p-1 mx-2'>
                        <h4 className='text-red-500 font-semibold mb-2'>Credits Used:</h4>
                        <p>Profile: 1</p>
                        <p>Mail:0</p>
                    </div>
                    <button className='text-red-600 rounded-3xl flex px-4 my-auto h-10 items-center border-red-600 border-2 font-semibold cursor-pointer'>View Results</button>
                </div>
            </>
        )
    }

    const userInfo = () => {
        return (
            <>
                <div className='flex justify-between py-2 px-4 my-1 max-h-28'>
                    <img className='rounded-full w-12 h-12 my-auto' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Profile" />
                    <div className='flex flex-col max-w-40 gap-2 mx-2'>
                        <h3 className='font-bold text-base'>Ben thomas(Name)</h3>
                        <p className='text-xs'>Senior Developer at Harshey(Role)</p>
                    </div>

                    <div className={smallScreen ? 'hidden' : `flex text-sm text-gray-500 items-center px-1`}>
                        example@gmail.com
                    </div>

                    <button className='py-1 px-6 my-auto mx-2 text-gray-900 bg-gray-400 h-8 rounded-md'>Admin</button>
                    <div className={smallScreen ? 'hidden' : 'flex flex-col p-2 gap-2'}>
                        <h3 className='font-semibold text-base'>Total Credits used : </h3>
                        <p className='text-red-600 text-center font-bold'>24</p>
                    </div>
                    {!detailView &&
                        <button
                            className='text-red-600 rounded-3xl flex px-4 my-auto h-10 items-center border-red-600 border-2 font-semibold cursor-pointer'
                            onClick={() => setDetailView(true)}
                        >View Details</button>}

                    {detailView && <div className={smallScreen ? 'hidden' : 'flex p-1'}>
                        <div className='flex flex-col py-1 px-4 gap-1 border-e-2 border-red-600'>
                            <p className='font-semibold'>Total Credits</p>
                            <p className='font-semibold'>Used: 24</p>
                        </div>
                        <div className='flex flex-col py-1 px-4 gap-1'>
                            <p className='font-semibold'>Profile Credits: 16</p>
                            <p className='font-semibold'>Mail Credits: 8</p>
                        </div>
                    </div>}
                </div>

                {detailView &&
                    <div className='flex flex-col p-2'>
                        <h4 className='text-gray-700 m-2'>No. of Records: 12</h4>
                        {userSearchInfo()}
                    </div>
                }
            </>
        )
    }


    const Notifications = () => {
        return (
            <>
                <div className='flex justify-around py-2 px-4 my-1 max-h-20'>
                    <img className='rounded-full w-12 h-12 my-auto' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Profile" />

                    <div className="text-sm text-gray-500 items-center px-1 mx-2 my-auto">
                        <strong>example@gmail.com</strong><span className={smallScreen ? 'hidden' : ''}>Requested you to become part of your team</span>
                    </div>

                    <div className={`flex mx-1 ${smallScreen ? 'gap-1' : 'gap-4'}`}>
                        <button
                            className={`bg-red-600 rounded-3xl justify-items-center ${smallScreen ? 'w-32 h-9' : 'w-40 h-10'} my-auto items-center text-white font-semibold cursor-pointer`}
                        >Confirm</button>
                        <button
                            className={`border-gray-600 border-2 rounded-3xl justify-items-center ${smallScreen ? 'w-32 h-9' : 'w-40 h-10'} my-auto items-center text-gray-600 font-semibold cursor-pointer`}
                        >Delete</button>
                    </div>

                </div>
            </>
        )
    }

    const CurrentTeam = () => {
        return (
            <>
                <div className='my-2'>
                    <button className='bg-red-600 rounded-3xl flex px-4 h-10 mx-auto text-white py-2 cursor-pointer'><TfiLocationArrow className='text-xl mr-1 pt-1' />Invite Teammates</button>
                </div>
                {userInfo()}
            </>
        )
    }

    const onTabChange = (key) => {
        console.log(key);
    }

    const items = [
        {
            key: 'currentTeam',
            label: 'Current Team',
            children: <CurrentTeam />,
        },
        {
            key: 'notifications',
            label: 'Notifications',
            children: <Notifications />,
        }
    ]

    return (
        <>
            <div className="bg-white shadow-sm rounded-xl py-2 px-6 tab-container" >
                <Tabs
                    defaultActiveKey="currentTeam"
                    items={items}
                    onChange={onTabChange}
                />
            </div>
        </>
    )
}

export default AdminSettings