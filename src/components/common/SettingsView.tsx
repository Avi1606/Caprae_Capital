import React from 'react';
import React from 'react';
import { Settings } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Settings className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600 mb-6">Application settings coming soon</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          Configure Settings
        </button>
      </div>
    </div>
  );
};
export const SettingsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
            <label className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-gray-700">Enable AI Suggestions</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </label>
          </div>
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};


