"use client"

import { useState } from "react"
import type React from "react"

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
}

const rooms = [
    {
        id: 1,
        name: "Standard Room",
        price: "$199",
        image: "/luxury-hotel-standard-room-interior.jpg",
    },
    {
        id: 2,
        name: "Deluxe Suite",
        price: "$299",
        image: "/luxury-hotel-deluxe-suite-with-balcony.jpg",
    },
    {
        id: 3,
        name: "Presidential Suite",
        price: "$599",
        image: "/luxury-hotel-presidential-penthouse-suite.jpg",
    },
]

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        selectedRoom: "",
        checkInDate: "",
        checkOutDate: "",
        name: "",
        nic: "",
        mobile: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Booking submitted:", formData)
        // Handle booking submission here
        onClose()
        setFormData({
            selectedRoom: "",
            checkInDate: "",
            checkOutDate: "",
            name: "",
            nic: "",
            mobile: "",
            email: "",
        })
    }

    if (!isOpen) return null

    const selectedRoomData = rooms.find((room) => room.id.toString() === formData.selectedRoom)

    return (
        <div
            className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
                    <h2 className="text-3xl font-bold" style={{ color: "#003580" }}>
                        Book Your Stay
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Room Selection */}
                    <div>
                        <label htmlFor="selectedRoom" className="block text-sm font-semibold text-gray-700 mb-2">
                            Select Room
                        </label>
                        <select
                            id="selectedRoom"
                            name="selectedRoom"
                            value={formData.selectedRoom}
                            onChange={handleChange}
                            className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580] appearance-none"
                            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.75rem center", backgroundSize: "1.5rem" }}
                            required
                        >
                            <option value="">Choose a room...</option>
                            {rooms.map((room) => (
                                <option key={room.id} value={room.id}>
                                    {room.name} - {room.price}/night
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Selected Room Preview */}
                    {selectedRoomData && (
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={selectedRoomData.image}
                                alt={selectedRoomData.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 bg-gray-50">
                                <h3 className="font-bold text-lg text-gray-900">{selectedRoomData.name}</h3>
                                <p className="text-[#003580] font-semibold">{selectedRoomData.price} per night</p>
                            </div>
                        </div>
                    )}

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="checkInDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                Check-in Date
                            </label>
                            <input
                                type="date"
                                id="checkInDate"
                                name="checkInDate"
                                value={formData.checkInDate}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="checkOutDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                Check-out Date
                            </label>
                            <input
                                type="date"
                                id="checkOutDate"
                                name="checkOutDate"
                                value={formData.checkOutDate}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                required
                            />
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">Guest Information</h3>

                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="nic" className="block text-sm font-semibold text-gray-700 mb-2">
                                NIC Number
                            </label>
                            <input
                                type="text"
                                id="nic"
                                name="nic"
                                value={formData.nic}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                placeholder="123456789V"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                placeholder="+94 76 123 4567"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#003580]"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#006CE4] text-white rounded-lg hover:bg-black transition font-semibold text-lg flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    )
}
