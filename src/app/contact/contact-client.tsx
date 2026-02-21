'use client';

import { useState, FormEvent, useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Contact } from '@/lib/types';
import emailjs from '@emailjs/browser';


export default function ContactClient({ contactInfo }: { contactInfo: Contact }) {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Utiliser les identifiants EmailJS de Sanity ou les valeurs par défaut
  const serviceId = contactInfo.emailjsServiceId || 'service_913ggoi';
  const templateId = contactInfo.emailjsTemplateId || 'template_kvxi77m';
  const publicKey = contactInfo.emailjsPublicKey || 'eYa8kth0QRmbd_-zL';
  
  // Déterminer l'email de destination (email de test ou email public)
  const destinationEmail = (contactInfo.useTestingEmail && contactInfo.testingEmail) 
    ? contactInfo.testingEmail 
    : contactInfo.email;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Préparer les données pour EmailJS
      const templateParams = {
        to_email: destinationEmail,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
      
      // Envoyer l'email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send email:', err);
      const errorMsg = language === 'en'
        ? contactInfo.errorMessageEN || 'Failed to send email. Please try again later.'
        : contactInfo.errorMessageNL || 'Er is een fout opgetreden bij het verzenden van de e-mail. Probeer het later opnieuw.';
      setError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Message de remerciement en fonction de la langue
  const thankYouMessage = language === 'en' 
    ? contactInfo.thankYouMessageEN || 'Thank you for your message. I will get back to you soon.'
    : contactInfo.thankYouMessageNL || 'Bedankt voor je bericht. Ik neem binnenkort contact met je op.';
    
  // Textes des boutons en fonction de la langue
  const submitButtonText = language === 'en'
    ? contactInfo.submitButtonTextEN || 'Send'
    : contactInfo.submitButtonTextNL || 'Verzenden';
    
  const submittingButtonText = language === 'en'
    ? contactInfo.submittingButtonTextEN || 'Sending...'
    : contactInfo.submittingButtonTextNL || 'Verzenden...';

  // Texte de description de la page
  const pageDescription = language === 'en'
    ? contactInfo.pageDescriptionEN
    : contactInfo.pageDescriptionNL;

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-4">{contactInfo.title || 'Contact'}</h1>
      
      {pageDescription && (
        <p className="mb-8 text-lg">{pageDescription}</p>
      )}

      <div className="flex flex-col md:flex-row gap-12">
        {/* Informations de contact (côté gauche) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-medium mb-6">{contactInfo.contactInfoTitle || 'Contact Information'}</h2>
          
          <div className="space-y-6 mb-8">
            {contactInfo.email && (
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm">{contactInfo.email}</p>
              </div>
            )}
            
            {contactInfo.phone && (
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm">{contactInfo.phone}</p>
              </div>
            )}
            
            {contactInfo.studioAddress && (
              <div>
                <p className="font-medium mb-1">Studio</p>
                <p className="text-sm whitespace-pre-line">{contactInfo.studioAddress}</p>
                {contactInfo.openingHours && (
                  <p className="text-sm italic mt-1">{contactInfo.openingHours}</p>
                )}
              </div>
            )}
          </div>
          
          {/* Réseaux sociaux */}
          {contactInfo.instagram && (
            <div>
              <h3 className="text-lg font-medium mb-3">{contactInfo.socialMediaTitle || 'Social Media'}</h3>
              <div className="flex space-x-4">
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 flex items-center gap-2">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span>{contactInfo.instagramLabel || 'Instagram'}</span>
                </a>
              </div>
            </div>
          )}
          
          {/* Texte d'acquisition */}
          {contactInfo.acquisitionText && (
            <div className="mt-8 text-sm italic">
              <p>{contactInfo.acquisitionText}</p>
            </div>
          )}
        </div>

        {/* Formulaire de contact (côté droit) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-lg font-medium mb-6">{contactInfo.formTitle || 'Get in Touch'}</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 p-4 rounded">
              <p>{thankYouMessage}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm">
                  {contactInfo.nameFieldLabel || 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-sm">
                  {contactInfo.emailFieldLabel || 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm">
                  {contactInfo.messageFieldLabel || 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-black text-white hover:bg-gray-800 disabled:bg-gray-400"
              >
                {isSubmitting ? submittingButtonText : submitButtonText}
              </button>
              
              {/* Afficher l'email de destination pour les tests */}
              {contactInfo.useTestingEmail && contactInfo.testingEmail && (
                <div className="mt-4 p-2 bg-yellow-50 text-xs">
                  <p>Mode test actif : les emails seront envoyés à {contactInfo.testingEmail}</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
