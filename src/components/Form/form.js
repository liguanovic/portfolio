import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d+$/;

        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const phone = formData.get('phone');

        if (!validateEmail(email)) {
            setEmailError('L\'adresse email doit contenir un "@" et un "."');

            return;
        }

        if (!validatePhone(phone)) {
            setPhoneError('Le numéro de téléphone doit contenir uniquement des chiffres.');

            return;
        }

        setEmailError('');
        setPhoneError('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitStatus('Votre message a été envoyé avec succès !');
                form.reset();

            } else {
                setSubmitStatus('Une erreur est survenue, veuillez réessayer.');
            }

        } catch (error) {
            setSubmitStatus('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <section id="form">
            <h2>Contactez-moi</h2>
            <p>Pour toutes demandes de contact, veuillez utiliser le formulaire ci-dessous.</p>

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="6a4c924c-8e4e-449f-ad41-38cbab08c446" />

                <fieldset>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="Prénom"
                        aria-label="Prénom"
                        required />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Nom"
                        aria-label="Nom"
                        required />
                </fieldset>

                <fieldset>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        aria-label="E-mail"
                        required />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Téléphone"
                        aria-label="Téléphone"
                        required />
                </fieldset>

                <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    className="form-control"
                    aria-label="Message"
                    required >
                </textarea>

                {emailError && <p className="error-message">{emailError}</p>}
                {phoneError && <p className="error-message">{phoneError}</p>}
                {submitStatus && <p>{submitStatus}</p>}

                <input type="submit" className="send-btn" value="Envoyer" />
            </form>
        </section>
    )
}

export default Form