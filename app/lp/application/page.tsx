import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ApplicationLP() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
