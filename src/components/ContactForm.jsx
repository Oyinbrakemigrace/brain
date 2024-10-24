import React, { useState } from 'react'
import { SquareLoader } from 'react-spinners';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        fetch('https://formspree.io/f/xdknkbkr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Email sent successfully!');
                    setLoading(false)
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    alert('Failed to send email. Please try again.');
                }
            })
            .catch((error) => {
                setLoading(false)
                console.error('Error:', error);
                alert('Failed to send email. Please try again.');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-center w-full max-w-lg mx-auto'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="name" className='mb-2 text-white font-medium'>Full Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        id="name"
                        placeholder='Enter your full name'
                        className='w-full p-3 border text-zinc-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]'
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="email" className='mb-2 text-white font-medium'>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter your email here'
                        className='w-full p-3 border text-zinc-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]'
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="message" className='mb-2 text-white font-medium'>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder='Enter your message here'
                        id="message"
                        cols="20"
                        rows="6"
                        className='w-full p-3 border text-zinc-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]'
                    />
                </div>
                <button
                    type="submit"
                    className={`mt-5 w-full px-6 py-4 ${loading ? 'cursor-none' : 'mt-8 bg-gradient-to-r from-[#676767] to-[#313131]'} text-white text-xl border border-zinc-600 font-bold rounded-md hover:bg-gradient-to-l hover:from-[#321D4A] hover:to-[#4A535A] lg:mt-6 mt-3`}
                >
                    {loading ? (<div className='flex justify-center items-center gap-2'>
                        <span>Submitting</span>
                        <SquareLoader color='#FFF' size={14} />
                    </div>) : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm