export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chanucsj@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>

          <a
            href="https://github.com/chanukacsj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chanuka-sri-jeewantha"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
