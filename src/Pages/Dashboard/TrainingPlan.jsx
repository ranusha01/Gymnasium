import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline'; // Ensure this matches the installed version

const TrainingPlan = () => {
            const [activeTab, setActiveTab] = useState('training')
            const [trainingPlan, setTrainingPlan] = useState([
              { day: "Monday", exercises: [
                { name: "Bench Press", sets: 3, reps: 10, weight: 135 },
                { name: "Tricep Pushdowns", sets: 3, reps: 12, weight: 50 },
              ]},
              { day: "Tuesday", exercises: [
                { name: "Deadlifts", sets: 3, reps: 8, weight: 225 },
                { name: "Bicep Curls", sets: 3, reps: 12, weight: 30 },
              ]},
              { day: "Wednesday", exercises: [] },
              { day: "Thursday", exercises: [
                { name: "Squats", sets: 3, reps: 10, weight: 185 },
                { name: "Shoulder Press", sets: 3, reps: 10, weight: 65 },
              ]},
              { day: "Friday", exercises: [
                { name: "Pull-ups", sets: 3, reps: 8, weight: 0 },
                { name: "Leg Press", sets: 3, reps: 12, weight: 200 },
              ]},
              { day: "Saturday", exercises: [
                { name: "Running", sets: 1, reps: 1, weight: 0 },
              ]},
              { day: "Sunday", exercises: [] },
            
    ]);

    const trainingDays = trainingPlan.filter(day => day.exercises.length > 0).length;

    const handleExerciseChange = (dayIndex, exerciseIndex, field, value) => {
        const updatedTrainingPlan = [...trainingPlan];
        if (field === 'name') {
            updatedTrainingPlan[dayIndex].exercises[exerciseIndex][field] = value;
        } else {
            updatedTrainingPlan[dayIndex].exercises[exerciseIndex][field] = parseInt(value) || 0;
        }
        setTrainingPlan(updatedTrainingPlan);
    };

    const addExercise = (dayIndex) => {
        const updatedTrainingPlan = [...trainingPlan];
        updatedTrainingPlan[dayIndex].exercises.push({ name: "New Exercise", sets: 3, reps: 10, weight: 0 });
        setTrainingPlan(updatedTrainingPlan);
    };

    const removeExercise = (dayIndex, exerciseIndex) => {
        const updatedTrainingPlan = [...trainingPlan];
        updatedTrainingPlan[dayIndex].exercises.splice(exerciseIndex, 1);
        setTrainingPlan(updatedTrainingPlan);
    };

    return (
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {activeTab === 'training' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Training Plan</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Your weekly workout schedule - {trainingDays} training days</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            {trainingPlan.map((day, dayIndex) => (
                                <div key={dayIndex} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">{day.day}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {day.exercises.length === 0 ? (
                                            <p className="text-gray-500">Rest day</p>
                                        ) : (
                                            <div className="space-y-4">
                                                {day.exercises.map((exercise, exerciseIndex) => (
                                                    <div key={exerciseIndex} className="flex items-center space-x-2">
                                                        <input
                                                            type="text"
                                                            value={exercise.name}
                                                            onChange={(e) => handleExerciseChange(dayIndex, exerciseIndex, 'name', e.target.value)}
                                                            className="flex-grow border rounded px-2 py-1"
                                                        />
                                                        <input
                                                            type="number"
                                                            value={exercise.sets}
                                                            onChange={(e) => handleExerciseChange(dayIndex, exerciseIndex, 'sets', e.target.value)}
                                                            className="w-16 border rounded px-2 py-1"
                                                            placeholder="Sets"
                                                        />
                                                        <input
                                                            type="number"
                                                            value={exercise.reps}
                                                            onChange={(e) => handleExerciseChange(dayIndex, exerciseIndex, 'reps', e.target.value)}
                                                            className="w-16 border rounded px-2 py-1"
                                                            placeholder="Reps"
                                                        />
                                                        <input
                                                            type="number"
                                                            value={exercise.weight}
                                                            onChange={(e) => handleExerciseChange(dayIndex, exerciseIndex, 'weight', e.target.value)}
                                                            className="w-20 border rounded px-2 py-1"
                                                            placeholder="Weight"
                                                        />
                                                        <button onClick={() => removeExercise(dayIndex, exerciseIndex)} className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                                                            <PencilIcon className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <button onClick={() => addExercise(dayIndex)} className="mt-2 px-3 py-1 bg-green-900 text-white rounded hover:bg-green-950">
                                            Add Exercise
                                        </button>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            )}
        </main>
    );
};

export default TrainingPlan;
