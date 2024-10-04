export default function RegistrationForm() {
    return (
        <form className="bg-slate-200 max-w-lg mx-auto rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>

            <div className="space-y-2">
                <label htmlFor="name" className="block text-left font-medium text-gray-700">
                    Name:
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter your name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-left font-medium text-gray-700">
                    Email:
                </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter your email"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block text-left font-medium text-gray-700">
                    Password:
                </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Enter your password"
                />
            </div>

            <div className="space-y-2">
                <label className="block text-left font-medium text-gray-700">
                    Subscription Type:
                </label>
                <select 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                >
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="block text-left font-medium text-gray-700">
                    Message:
                </label>
                <textarea 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                    placeholder="Your message..."
                ></textarea>
            </div>

            <div className="text-center">
                <button 
                    type="submit" 
                    className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
            </div>
        </form>
    );
}
