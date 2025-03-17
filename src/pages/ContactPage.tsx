import { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Send, ArrowRight, CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = "Contact | Aman Vyrha";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar profileName="Aman Vyrha" />
      
      <div className="relative pt-28 pb-10">
        <div className="netflix-container">
          <h1 className="text-4xl text-netflix-red font-bold mb-8">Get In Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-netflix-darkgray rounded-lg p-6">
                <h2 className="text-xl text-white font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-netflix-red mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <a href="mailto:manvirha12@gmail.com" className="text-white/70 hover:text-netflix-red transition-colors">
                        manvirha12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-netflix-red mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <a href="tel:+353870313241" className="text-white/70 hover:text-netflix-red transition-colors">
                        +353 870 313 241
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-netflix-red mr-3 shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="text-white font-medium">Location</h3>
                      <p className="text-white/70">
                        Dublin, Ireland
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-white font-medium mb-3">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-netflix-gray/30 flex items-center justify-center text-white hover:bg-netflix-red transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-netflix-gray/30 flex items-center justify-center text-white hover:bg-netflix-red transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-netflix-darkgray rounded-lg p-6">
                <h2 className="text-xl text-white font-bold mb-4">Available For</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/80">
                    <ArrowRight className="text-netflix-red mr-2" size={16} />
                    <span>Full-time Data Analyst positions</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <ArrowRight className="text-netflix-red mr-2" size={16} />
                    <span>Freelance data visualization projects</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <ArrowRight className="text-netflix-red mr-2" size={16} />
                    <span>Consulting on data analytics</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <ArrowRight className="text-netflix-red mr-2" size={16} />
                    <span>Research collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-netflix-darkgray rounded-lg p-6">
                <h2 className="text-xl text-white font-bold mb-6">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-netflix-gray/10 rounded-lg p-8 text-center">
                    <CheckCircle className="text-netflix-red mx-auto mb-4" size={48} />
                    <h3 className="text-white text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-white/70">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-netflix-black border border-netflix-gray/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-netflix-red"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-netflix-black border border-netflix-gray/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-netflix-red"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-netflix-black border border-netflix-gray/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-netflix-red"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-netflix-black border border-netflix-gray/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-netflix-red resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="netflix-button py-2 px-6 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-2" size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
