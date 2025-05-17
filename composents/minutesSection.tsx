// On importe React pour pouvoir utiliser JSX
import React from 'react'

// On importe le composant Image de Next.js, qui optimise les images automatiquement
import Image from 'next/image';

// On importe l'icône ChevronRight depuis la bibliothèque lucide-react pour l’utiliser dans le bouton
import { ChevronRight } from "lucide-react";

// On définit un composant fonctionnel React appelé NimutesSection
export default function NimutesSection() {
  return (
    // On retourne une section avec une grille responsive : 1 colonne sur petit écran, 2 colonnes sur écran moyen et plus
    <section className="grid md:grid-cols-2 w-full gap-7 pt-4">

      {/* Colonne de gauche : Contenu textuel + fonctionnalités */}
      <div className="flex flex-col justify-center gap-10">

        {/* Titre principal de la section */}
        <h2 className="text-2xl font-bold ">
          Meet our premium features that will make you wow
        </h2>

        {/* Description ou sous-titre en petit texte */}
        <p className="text-sm">
          Build an incredible workplace and grow your business with Gusto’s
          all-in-one platform with amazing contents.
        </p>

        {/* Grille à deux colonnes contenant les différentes fonctionnalités listées */}
        <div className='grid grid-cols-2 gap-4'>
          
          {/* Première colonne de la grille des fonctionnalités */}
          <div className='flex flex-col gap-4'>

            {/* Chaque fonctionnalité est composée d’une icône et d’un texte descriptif */}
            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">Medical and vision</span>
            </h4>

            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">Life insurance</span>
            </h4>

            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">400(k) savings</span>
            </h4>
          </div>

          {/* Deuxième colonne de la grille des fonctionnalités */}
          <div className='flex flex-col gap-4'>
            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">HSAs and FSAs</span>
            </h4>

            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">Commuter benefits</span>
            </h4>

            <h4 className='flex gap-2'>
              <Image
                src="/icons/shape.svg"
                alt="Feature"
                width={20}
                height={20}
              />
              <span className="text-sm">529 college savings</span>
            </h4>
          </div>
        </div>

        {/* Bouton d’action avec texte et icône flèche vers la droite */}
        <button className="flex text-blue-500 gap-2 items-center">
          Explore more
          <ChevronRight className="w-4 h-4 text-blue-600" />
        </button>
      </div>

      {/* Colonne de droite : Image illustrative */}
      <div className="flex w-full justify-center items-center">
        <Image
          src="/images/minutes.svg"
          alt="Feature"
          width={400}
          height={400}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        />
      </div>
    </section>
  )
}
