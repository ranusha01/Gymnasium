import React from 'react';
import johnDoeImage from '../../assets/john-doe.jpg'; // Ensure this path is correct
import janeSmithImage from '../../assets/jane-smith.jpg'; // Ensure this path is correct
import mikeJohnsonImage from '../../assets/mike-johnson.jpg'; // Ensure this path is correct

const Trainers = ({ activeTab }) => {
  // Check if activeTab is correctly passed
  console.log('Active Tab:', activeTab);

  const trainers = [
    { name: "John Doe", specialty: "Strength Training", image: johnDoeImage, rating: 5 },
    { name: "Jane Smith", specialty: "Yoga", image: janeSmithImage, rating: 4 },
    { name: "Mike Johnson", specialty: "Cardio", image: mikeJohnsonImage, rating: 3 },
  ];

  const renderStars = (rating) => {
    return (
      <div>
        {Array(rating).fill().map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
    );
  };

  const handleSelectTrainer = (trainerName) => {
    console.log(`Trainer selected: ${trainerName}`);
  };

  return (
    <>
      {activeTab === 'trainers' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Choose Your Trainer</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Select a trainer that fits your goals</p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
              {trainers.map((trainer, index) => (
                <li key={index} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-sm font-medium truncate">{trainer.name}</h3>
                      </div>
                      <p className="mt-1 text-gray-500 text-sm truncate">{trainer.specialty}</p>
                      <div className="mt-2">
                        {renderStars(trainer.rating)}
                      </div>
                    </div>
                    <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={trainer.image} alt={trainer.name} />
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="w-0 flex-1 flex">
                        <button
                          onClick={() => handleSelectTrainer(trainer.name)}
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                        >
                          <span className="ml-3">Select</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Trainers;
