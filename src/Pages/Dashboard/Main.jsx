import React, { useState } from 'react';
import { DumbbellIcon, UtensilsIcon, UsersIcon, BarChartIcon, CalendarIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
import TrainingPlan from './TrainingPlan';
import DietPlan from './DietPlan';
import Trainers from './Trainers';
import Progress from './Progress';
import Calendar from './Calendar';
import Settings from './Settings';

const Main = () => {
  const [activeTab, setActiveTab] = useState('training');

  const navItems = [
    { icon: DumbbellIcon, label: 'Training Plan', value: 'training' },
    { icon: UtensilsIcon, label: 'Diet Plan', value: 'diet' },
    { icon: UsersIcon, label: 'Trainers', value: 'trainers' },
    { icon: BarChartIcon, label: 'Progress', value: 'progress' },
    { icon: CalendarIcon, label: 'Calendar', value: 'calendar' },
    { icon: SettingsIcon, label: 'Settings', value: 'settings' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'training':
        return <TrainingPlan />;
      case 'diet':
        return <DietPlan />;
      case 'trainers':
        return <Trainers />;
      case 'progress':
        return <Progress />;
      case 'calendar':
        return <Calendar />;
      case 'settings':
        return <Settings />;
      default:
        return <TrainingPlan />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-green-950 shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold  text-white">Gymnasium</h1>
        </div>
        <nav className="mt-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full px-4 py-3 text-left ${
                activeTab === item.value ? 'bg-green-900 text-white' : 'text-gray-300'
              }`}
              onClick={() => setActiveTab(item.value)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="flex items-center w-full px-4 py-2 text-left text-gray-300 hover:bg-green-9030" onClick={() => console.log('Logout')}>
            <LogOutIcon className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className=" shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-600">{navItems.find(item => item.value === activeTab)?.label}</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};

export default Main;
