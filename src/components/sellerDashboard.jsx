import { useState } from "react";
function SellerDashboard() {
    const [stats] = useState({
      totalProperties: 24,
      bookedProperties: 15,
      pendingApprovals: 3,
      totalEarnings: 45200
    });
  
    const recentActivities = [
      { id: 1, title: 'New booking received', date: '2024-03-15', status: 'success' },
      { id: 2, title: 'Property #234 needs verification', date: '2024-03-14', status: 'pending' },
      { id: 3, title: 'Payment received for Property #189', date: '2024-03-13', status: 'success' },
    ];
  
    return (
      <div className="container mx-auto p-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Seller Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <i className="fas fa-plus mr-2"></i>Add New Property
          </button>
        </div>
  
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Properties</p>
                <p className="text-2xl font-bold">{stats.totalProperties}</p>
              </div>
              <i className="fas fa-home text-3xl text-blue-500"></i>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Booked Properties</p>
                <p className="text-2xl font-bold">{stats.bookedProperties}</p>
              </div>
              <i className="fas fa-calendar-check text-3xl text-green-500"></i>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending Approvals</p>
                <p className="text-2xl font-bold">{stats.pendingApprovals}</p>
              </div>
              <i className="fas fa-clock text-3xl text-yellow-500"></i>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Earnings</p>
                <p className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
              </div>
              <i className="fas fa-wallet text-3xl text-purple-500"></i>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Properties Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Bookings Overview</h2>
              <select className="bg-gray-50 border rounded-lg px-3 py-1">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart will be displayed here</p>
            </div>
          </div>
  
          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start border-b pb-4 last:border-0">
                  <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="ml-3 flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <i className="fas fa-list-alt text-2xl text-blue-500 mb-2"></i>
            <p>Manage Listings</p>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <i className="fas fa-calendar-alt text-2xl text-green-500 mb-2"></i>
            <p>View Bookings</p>
          </button>
  
          <button className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <i className="fas fa-chart-line text-2xl text-purple-500 mb-2"></i>
            <p>Performance</p>
          </button>
  
          <button className="bg-white p-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
            <i className="fas fa-cog text-2xl text-gray-500 mb-2"></i>
            <p>Settings</p>
          </button>
        </div>
      </div>
    );
  }

  export default SellerDashboard;