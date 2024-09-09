import React, { useState, useEffect } from 'react';

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState([
    { name: "Breakfast", description: "Oatmeal with fruits", calories: 300 },
    { name: "Lunch", description: "Grilled chicken salad", calories: 450 },
    { name: "Dinner", description: "Salmon with vegetables", calories: 550 },
    { name: "Snacks", description: "Nuts and Greek yogurt", calories: 200 },
  ]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('diet'); // Add this state to handle active tab

  useEffect(() => {
    const total = dietPlan.reduce((sum, meal) => sum + meal.calories, 0);
    setTotalCalories(total);
  }, [dietPlan]);

  const handleDietChange = (index, field, value) => {
    const updatedDietPlan = [...dietPlan];
    if (field === 'calories') {
      updatedDietPlan[index][field] = parseInt(value) || 0;
    } else {
      updatedDietPlan[index][field] = value;
    }
    setDietPlan(updatedDietPlan);
  };

  return (
    <>
      {activeTab === 'diet' && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Diet Plan</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Your daily meal plan and calories</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {dietPlan.map((meal, index) => (
                <div key={index} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    <input
                      type="text"
                      value={meal.name}
                      onChange={(e) => handleDietChange(index, 'name', e.target.value)}
                      className="font-bold border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <textarea
                      value={meal.description}
                      onChange={(e) => handleDietChange(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full border rounded px-2 py-1"
                    />
                    <input
                      type="number"
                      value={meal.calories}
                      onChange={(e) => handleDietChange(index, 'calories', e.target.value)}
                      className="mt-2 w-32 border rounded px-2 py-1"
                      placeholder="Calories"
                    />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <p className="font-bold">Total Calories: {totalCalories}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DietPlan;
