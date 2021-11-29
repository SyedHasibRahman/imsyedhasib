import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('SyedHasib', 'template_xmj8spk', form.current, 'user_9RB091FEfjIrR02muMKct')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className="" style={ {
            marginTop: '50px',
            width: '100%',
            backgroundImage: `https://media.istockphoto.com/videos/twinkle-of-brilliant-multicolored-stars-on-a-black-background-hd-video-id1217965132?s=640x640`,
            backgroundPosition: "center",
            backgroundSize: 'cover',


        } }>
            <h1 className="my-3">Contact Me</h1>
            <form ref={ form } onSubmit={ sendEmail }>
                <label>Name</label> <br />
                <input type="text" name="user_name" className="form-control" /> <br />
                <label>Email</label> <br />
                <input type="email" name="user_email" className="form-control" /> <br />
                <label>Message</label> <br />
                <textarea name="message" className="form-control" /> <br />
                <input type="submit" value="Send" className="form-control btn btn-default filter-button main-btn" />
            </form>
        </div>
    );
};

export default ContactMe;