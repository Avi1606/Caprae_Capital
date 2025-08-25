import React from 'react';

export const ProfileView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Company</label>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Acme Inc" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Bio</label>
              <textarea className="w-full px-4 py-2 border rounded-lg" rows={4} placeholder="Tell others about you..." />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};