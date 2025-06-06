import "./contact.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0unszne', 'template_zzem2yf', form.current, {
        publicKey: 'D16Y9MuBWZZuFiih3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
           form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <main id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contacto</h1>
        </div>
        <div className="sketch-border">
          <div className="content">
              <form ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>¿Sobre qué quieres hablar?</label>
                <textarea name="message" />
                <input type="submit" value="Enviar" />
              </form>
          </div>
         
        </div>
      </div>
    </main>

    
  );
};