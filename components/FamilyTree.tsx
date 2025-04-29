import React from 'react'

const FamilyTree: React.FC = () => (
  <div className="max-w-4xl mx-auto overflow-x-auto p-4 bg-cream rounded-xl">
    <div className="min-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Primo albero */}
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <img
            src="/icons/cat-black.svg"
            alt="Maschio Alfa"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2">Maschio Alfa</p>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <img
              src="/icons/cat-white.svg"
              alt="Cucciolo"
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-1">Cucciolo</p>
          </div>
          <div className="text-center">
            <img
              src="/icons/cat-black.svg"
              alt="Femmina"
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-1">Femmina</p>
          </div>
          <div className="text-center">
            <img
              src="/icons/cat-white.svg"
              alt="Cucciolo"
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-1">Cucciolo</p>
          </div>
        </div>
      </div>

      {/* Secondo albero */}
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <img
            src="/icons/cat-white.svg"
            alt="Femmina"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2">Femmina</p>
        </div>
        <div className="flex gap-8">
          <div className="text-center">
            <img
              src="/icons/cat-black.svg"
              alt="Cucciolo"
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-1">Cucciolo</p>
          </div>
          <div className="text-center">
            <img
              src="/icons/cat-white.svg"
              alt="Cucciolo"
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-1">Cucciolo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FamilyTree

