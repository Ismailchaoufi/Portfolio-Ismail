import { useState } from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const error = await response.json();
        console.error('Server error:', error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form 
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='name' 
                className='input' 
                required 
                disabled={isSubmitting}
              />
              <input 
                type='email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='email' 
                className='input' 
                required 
                disabled={isSubmitting}
              />
            </div>
            <input 
              type='text' 
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='subject' 
              className='input' 
              required 
              disabled={isSubmitting}
            />
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='message' 
              className='textarea'
              required
              disabled={isSubmitting}
            ></textarea>
            <button 
              type='submit'
              disabled={isSubmitting}
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className={`transition-all duration-500 ${isSubmitting ? 'opacity-0' : 'group-hover:-translate-y-[120%] group-hover:opacity-0'}`}>
                Let&apos;s talk
              </span>
              {isSubmitting ? 
                <span className='absolute'>Sending...</span> : 
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              }
            </button>
          </motion.form>
          {submitStatus === 'success' && (
            <p className='text-green-500 mt-4'>Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className='text-red-500 mt-4'>Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;