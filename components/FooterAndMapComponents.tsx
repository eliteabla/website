export function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Elite Auto Body LA. All rights reserved.</p>
      <p>1821 Hyperion Ave, Los Angeles, CA 90027 | (323) 665-2470 | info@eliteabla.com</p>
      <div className="mt-2 space-x-4">
        <a href="https://www.instagram.com/eliteautobodyla" target="_blank" className="underline text-blue-600">Instagram</a>
        <a href="https://www.facebook.com/elitemotorsportsla" target="_blank" className="underline text-blue-600">Facebook</a>
        <a href="https://www.tiktok.com/@elitemotorsports8" target="_blank" className="underline text-blue-600">TikTok</a>
      </div>
    </footer>
  );
}

export function MapSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Visit Us</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.1327421688853!2d-118.27497868478083!3d34.10154388059819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7dc674b4bc3%3A0x1c1aa8b0334c5d9a!2sElite%20Auto%20Body!5e0!3m2!1sen!2sus!4v1712209014095!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Elite Auto Body LA Map"
        ></iframe>
      </div>
    </section>
  );
}