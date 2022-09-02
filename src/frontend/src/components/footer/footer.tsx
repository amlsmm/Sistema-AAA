export default function Footer() {
  const copyright = `Copyright ${new Date().getFullYear()} AAA. Todos os direitos reservados.`;
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container lg:py-8">
        <div className="text-sm text-gray-400 text-center">
          <p>&copy; {copyright}</p>
        </div>
      </div>
    </footer>
  );
}
