import React from 'react'
import Image from 'next/image'

// Composant principal de la section Hero (bannière d’introduction de la page)
export default function HeroSection() {
  return (
    // Section principale pleine hauteur avec fond orange clair
    <section className="flex  items-center justify-center  gap-2  ">
      
      {/* Contenu centré avec fond jaune très clair */}
      <div className="flex flex-col min-md:w-1/3">
        
        {/* Titre principal en grand et en gras */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-justify max-md:text-center pb-20">
          Ultimate support system  for leading agencies
        </h1>

        {/* Paragraphe de description en gris */}
        <p className="text-gray-600 mb-6 text-justify">
          Get your tools enhanced and collaborate seamlessly from support desk to team management.
        </p>

        {/* Formulaire d'inscription (email + bouton) */}
        <form className="flex justify-center max-w-md mx-auto shadow-xl rounded-md overflow-hidden">
          {/* Champ de saisie d’e-mail */}
          <input
            type="email"
            placeholder="Enter email address"
            className="
              w-full px-4 py-2 border border-gray-300
              text-gray-800                       // Couleur du texte saisi
              placeholder:text-gray-400           // Couleur du texte placeholder
              focus:outline-none focus:ring-2 focus:ring-[#FFC059]
              transition-colors duration-200      // Animation douce au focus
              rounded-l-md
            "
          />

          {/* Bouton "Get Started" avec style fixe pour éviter les retours à la ligne */}
          <button
            className="bg-[#FFC059] px-4 py-2 rounded-r-md hover:bg-yellow-500 transition whitespace-nowrap"
          >
            Get Started
          </button>
        </form>

        {/* Liste des logos partenaires, alignés horizontalement */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          {/* Chaque logo est contenu dans une div avec Image optimisée Next.js */}
          <div>
            <Image
              src="/partners/sponsored.svg"
              alt="Sponsored"
              width={100}
              height={40}
              className="bg-white p-2 rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/partners/paypal.svg"
              alt="Paypal"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/partners/google.svg"
              alt="Google"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/partners/dropbox.svg"
              alt="Dropbox"
              width={100}
              height={40}
            />
          </div>
        </div>

        {/* Illustration supplémentaire centrée en dessous */}
      </div>
        <div className="hidden md:flex justify-center items-center mt-12 w-2/3 mx-auto" >
          <Image
            src="/illustration.svg"
            alt="Illustration principale"
            width={500}
            height={500}

        />
        </div>
    </section>
  )
}
