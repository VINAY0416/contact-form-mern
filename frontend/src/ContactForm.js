import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/messages', form);
            alert(res.data.msg); // Show backend response (e.g., "Message sent!")
            setForm({ name: '', email: '', contact: '', message: '' });
        } catch (err) {
            // Check for duplicate email/contact response from backend
            if (err.response && err.response.status === 400 && err.response.data.msg) {
                alert(err.response.data.msg); // Show "email or contact already submitted"
            } else {
                alert('Error sending message');
            }
        }
    };

    return (
        <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Your Contact Number"
                    value={form.contact}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
