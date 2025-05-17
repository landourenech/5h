import React from 'react'
import { ArrowRight } from "lucide-react"; // Import de l'icône flèche vers la droite depuis la librairie Lucide

// Composant principal qui affiche une section de deux blocs de fonctionnalités
export default function SupportsSection() {
  return (
    // Section principale contenant deux colonnes à partir du breakpoint "md" (grille responsive)
    <section className="grid md:grid-cols-2 w-full gap-7 pt-4">
      
      {/* Bloc de fonctionnalité n°1 */}
      <div className='flex gap-4 w-full shadow-md rounded-lg p-4 hover:bg-amber-500 transition-colors'>
        
        {/* Colonne gauche : Image illustrative */}
        <div className="flex relative bottom-5">
          <img
            src="/icons/service.png" // Chemin de l'image locale
            alt="Illustration principale" // Texte alternatif pour l'accessibilité
            className="w-[100px] h-[80px]" // Taille de l'image
          />
        </div>

        {/* Colonne droite : Texte explicatif */}
        <div className="flex flex-col justify-center">
          
          {/* Titre de la fonctionnalité avec une flèche à droite */}
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            Explore our features
            <ArrowRight className="w-5 h-5 text-[#FFC059]" /> {/* Icône flèche avec couleur personnalisée */}
          </h2>

          {/* Description de la fonctionnalité */}
          <p className="text-[12px]">
            Get your website ads tests delivered at let collect sample from the victory of the update managments services.
          </p>
        </div>
      </div>

      {/* Bloc de fonctionnalité n°2 (copie du premier pour le moment) */}
      <div className='flex gap-4 w-full shadow-md rounded-lg p-4 hover:bg-amber-500 transition-colors'>
        
        {/* Colonne gauche : Image illustrative */}
        <div className="flex relative bottom-5">
          <img
            src="/icons/service.png"
            alt="Illustration principale"
            className="w-[100px] h-[80px]"
          />
        </div>

        {/* Colonne droite : Texte explicatif */}
        <div className="flex flex-col justify-center">
          
          {/* Titre de la fonctionnalité avec une flèche */}
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            Explore our features
            <ArrowRight className="w-5 h-5 text-[#FFC059]" />
          </h2>

          {/* Description de la fonctionnalité */}
          <p className="text-[12px]">
            Get your website ads tests delivered at let collect sample from the victory of the update managments services.
          </p>
        </div>
      </div>
    </section>
  )
}
