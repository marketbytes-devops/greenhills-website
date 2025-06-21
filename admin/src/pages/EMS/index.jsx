import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import apiClient from '../../helpers/apiClient';

const EMS = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [filterType, setFilterType] = useState('bookings');
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    startDate: null,
    endDate: null,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const url =
      filterType === 'bookings'
        ? 'enquiry/bookings/list/'
        : 'enquiry/contact/list/';

    apiClient
      .get(url)
      .then((response) => {
        if (filterType === 'bookings') {
          setBookings(response.data);
        } else {
          setContacts(response.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again.');
      });
  }, [filterType]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateFilterChange = (date, field) => {
    setFilters((prev) => ({ ...prev, [field]: date }));
  };

  const filteredData = useMemo(() => {
    let data = filterType === 'bookings' ? bookings : contacts;
    if (filters.name) {
      data = data.filter((item) =>
        item.name?.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.email && filterType === 'contacts') {
      data = data.filter((item) =>
        item.email?.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.startDate) {
      data = data.filter(
        (item) => new Date(item.created_at) >= new Date(filters.startDate.setHours(0, 0, 0, 0))
      );
    }
    if (filters.endDate) {
      data = data.filter(
        (item) => new Date(item.created_at) <= new Date(filters.endDate.setHours(23, 59, 59, 999))
      );
    }
    return data;
  }, [filterType, bookings, contacts, filters]);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Enquiry Dashboard</h2>
      {error && <p className="text-red-500 text-center mb-3">{error}</p>}

      {/* Filter Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Enquiry Type
        </label>
        <select
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilters((prev) => ({ ...prev, email: '' })); // Reset email filter when switching
          }}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="bookings">Booking Enquiry</option>
          <option value="contacts">Contact Enquiry</option>
        </select>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Search by name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        {filterType === 'contacts' && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              placeholder="Search by email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <DatePicker
            selected={filters.startDate}
            onChange={(date) => handleDateFilterChange(date, 'startDate')}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select start date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <DatePicker
            selected={filters.endDate}
            onChange={(date) => handleDateFilterChange(date, 'endDate')}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select end date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              {filterType === 'contacts' && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              {filterType === 'bookings' && (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adults</th>
                </>
              )}
              {filterType === 'contacts' && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                {filterType === 'contacts' && (
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                )}
                <td className="px-6 py-4 whitespace-nowrap">{item.phone || item.mobile || 'N/A'}</td>
                {filterType === 'bookings' && (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">{item.room_type_title || item.room_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.checkin}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.checkout}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.adults}</td>
                  </>
                )}
                {filterType === 'contacts' && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.message?.substring(0, 50)}...
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-lg p-6 max-w-lg w-full"
            >
              <h3 className="text-lg font-bold mb-4">EMS Details</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {selectedItem.name}</p>
                {filterType === 'contacts' && (
                  <p><strong>Email:</strong> {selectedItem.email}</p>
                )}
                <p>
                  <strong>Phone:</strong> {selectedItem.phone || selectedItem.mobile || 'Not provided'}
                </p>
                {filterType === 'bookings' && (
                  <>
                    <p><strong>Room Type:</strong> {selectedItem.room_type_title || selectedItem.room_type}</p>
                    <p><strong>Check-in:</strong> {selectedItem.checkin}</p>
                    <p><strong>Check-out:</strong> {selectedItem.checkout}</p>
                    <p><strong>Adults:</strong> {selectedItem.adults}</p>
                  </>
                )}
                {filterType === 'contacts' && (
                  <p><strong>Message:</strong> {selectedItem.message}</p>
                )}
                <p><strong>Referer URL:</strong> {selectedItem.referer_url || 'Not provided'}</p>
                <p><strong>Submitted URL:</strong> {selectedItem.submitted_url || 'Not provided'}</p>
                <p><strong>Created At:</strong> {new Date(selectedItem.created_at).toLocaleString()}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EMS;