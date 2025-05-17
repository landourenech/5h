import React from 'react'

// Composant Footer qui contient deux parties principales :
// - une section d’abonnement à une newsletter
// - un pied de page final avec des liens et droits d’auteur
export default function Footer() {
  return (
    // Élément HTML <footer> : sémantique pour indiquer qu’il s’agit du pied de page
    <footer className="flex flex-col">

      {/* Première section : formulaire d’abonnement */}
      <div className='flex flex-col justify-between items-center py-20 gap-3 bg-[#353448] text-white w-full text-center'>

        {/* Titre invitant à s’abonner */}
        <h3 className="mb-2 text-2xl font-semibold">
          Subscribe to get notified about updates
        </h3>

        {/* Petit texte d'information juridique */}
        <p className='text-xs'>
          By subscribing with your mail, you will accept our privacy policy
        </p>

        {/* Formulaire d'inscription à la newsletter */}
        <form className="flex justify-center max-w-md mx-auto shadow-xl rounded-md overflow-hidden gap-2">

          {/* Champ de saisie de l’adresse e-mail */}
          <input
            type="email"
            placeholder="Enter email address"
            className="
              w-full px-4 py-2 border border-gray-300
              text-gray-800                       // Couleur du texte saisi
              placeholder:text-gray-400           // Couleur du placeholder
              focus:outline-none focus:ring-2 focus:ring-[#FFC059]
              transition-colors duration-200      // Animation fluide au focus
              rounded-l-md
            "
          />

          {/* Bouton de soumission du formulaire avec un style hover */}
          <button
            className="bg-[#FFC059] px-4 py-2 rounded-r-md hover:bg-yellow-500 transition whitespace-nowrap"
          >
            Subscribe us
          </button>
        </form>
      </div>

      {/* Deuxième section : pied de page final */}
      <div className='flex justify-between items-center bg-[#2B293E] w-full p-6 text-white max-md:flex-col max-md:gap-4'>
        
        {/* Mention des droits d’auteur */}
        <p className="text-sm">
          &copy; 2025 StartupLanding. All rights reserved.
        </p>

        {/* Liste des liens de navigation du footer */}
        <ul className='flex gap-4 justify-between items-center text-sm'>
          <li>Home</li>
          <li>Advesite</li>
          <li>Supports</li>
          <li>Marketing</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  )
}
