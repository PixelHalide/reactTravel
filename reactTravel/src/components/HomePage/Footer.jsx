function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} Travellr. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with ❤️ by Shlok Verma & Harsh K | Mist WebDev Bootcamp
        </p>
      </footer>
    );
  }

  export default Footer;
