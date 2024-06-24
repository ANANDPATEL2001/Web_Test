import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive"
import { MdCloudUpload } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import PhoneInput from 'react-phone-input-2'
import { Upload } from 'antd';

import 'react-phone-input-2/lib/style.css'
const { Dragger } = Upload;

function ProfileSection() {
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const smallScreen = useMediaQuery({ query: "(max-width: 720px)" });

    const props = {
        name: 'file',
        multiple: false,
        action: 'https://localhost:3000',
        accept: '.png,.jpg',
        onChange(info) {
            setProfilePhoto(info.file.originFileObj);
            // const { status } = info.file;
            // if (status !== 'uploading') {
            //     console.log(info.file, info.fileList);
            // }
            // if (status === 'done') {
            //     message.success(`${info.file.name} file uploaded successfully.`);
            // } else if (status === 'error') {
            //     message.error(`${info.file.name} file upload failed.`);
            // }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        showUploadList: false,
    };

    return (
        <>
            <div className="m-10 py-2 px-8 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`flex items-center justify-between mb-6 ${smallScreen ? '' : 'px-10'}`}>
                    {/* Profile Photo */}
                    <div className={smallScreen ? 'hidden' : 'p-2 gap-2'}>
                        <h3 className='font-bold my-2'>Your Photo</h3>
                        <p className='text-sm text-gray-500'>This Photo will be displayed on your profile</p>
                    </div>
                    <div>
                        <div className="relative h-28 min-w-24 w-28 rounded-full overflow-hidden my-auto shadow-2xl z-0">
                            {profilePhoto ? (
                                <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <RxAvatar className="text-gray-500 text-4xl" />
                                </div>
                            )}
                            {/* <label htmlFor="photoUpload" className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600">
                            <input type="file" id="photoUpload" className="hidden" onChange={handlePhotoChange} />
                            Change Photo
                        </label> */}
                        </div>
                        <div className='relative w-20 h-7 -mt-6 bg-blue-900 text-white rounded-sm text-center mx-auto shadow-lg z-10'>Admin</div>
                    </div>
                    <div className='h-28 lg:w-96 rounded-xl mx-4 cursor-pointer'>
                        <Dragger {...props}>
                            <p className="relative ant-upload-drag-icon place-self-center" style={{ left: '45%' }}>
                                <MdCloudUpload style={{ width: '21px', height: '21px' }} />
                            </p>
                            <div className='flex flex-col'>
                                <p className="ant-upload-text md:text-xs"
                                    style={{
                                        fontSize: '12px',
                                        color: 'rgba(0,0,0,0.7)'
                                    }}>
                                    <strong className='text-black'>Click to Upload</strong> or Drag & Drop file here</p>
                                <p
                                    className={smallScreen ? "hidden" : "ant-upload-hint"}
                                    style={{ fontSize: '10px' }}>
                                    PNG or JPG(max 800x400px)
                                </p>
                            </div>
                        </Dragger>
                    </div>
                </div>

                <div className={`grid grid-cols-5 grid-rows-4 grid-flow-col ${smallScreen ? 'gap-4' : 'gap-10 px-4'} py-8`}>
                    <span className={`mb-2 pr-1 font-semibold ${smallScreen ? 'text-sm' : 'text-base'} col-start-1`}>Full Name</span>
                    <span className={`mb-2 pr-1 font-semibold ${smallScreen ? 'text-sm' : 'text-base'} col-start-1`}>Company Name and Designation</span>
                    <span className={`mb-2 pr-1 font-semibold ${smallScreen ? 'text-sm' : 'text-base'} col-start-1`}>Email ID</span>
                    <span className={`mb-2 pr-1 font-semibold ${smallScreen ? 'text-sm' : 'text-base'} col-start-1`}>Phone No.</span>

                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-2`}
                        placeholder='First Name'
                    />

                    <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className={`px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-2`}
                        placeholder='Example pvt. ltd.'
                    />

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-4"
                        placeholder='example12$@gmail.com'
                    />

                    <div className='col-span-2'>
                        <PhoneInput
                            country={'in'}
                            // value={phoneNumber}
                            // onChange={handleNumberChange}
                            inputProps={{
                                required: true,
                            }}
                            dropdownStyle={{
                                width: '32vw',
                                minWidth: '200px',
                            }}
                            buttonStyle={{
                                width: '50px',
                                borderRight: 'none',
                            }}
                            containerStyle={{ height: '3rem', width: '100%' }}
                            inputStyle={{ height: '3rem', width: '100%' }}
                        />
                    </div>

                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-2`}
                        placeholder='Last Name'
                    />

                    <input
                        type="text"
                        id="designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        className={`px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-2`}
                        placeholder='Marketing Head'
                    />

                    <input
                        type="number"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={`px-4 py-2 border rounded focus:outline-none focus:border-blue-500 max-h-12 col-span-2`}
                        placeholder='xxxxxxx148'
                    />
                </div>
            </div>
        </>
    );
}

export default ProfileSection;
