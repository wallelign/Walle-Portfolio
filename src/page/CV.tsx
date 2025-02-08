const CV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-6 shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center bg-gray-800 text-white p-6 rounded-lg">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold">Richard Sanchez</h1>
          <p className="text-lg">Marketing Manager</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="col-span-1 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold border-b pb-2">Contact</h2>
          <p className="mt-2">📞 +123-456-7890</p>
          <p>📧 hello@reallygreatsite.com</p>
          <p>📍 123 Anywhere St., Any City</p>
          <p>🌐 www.reallygreatsite.com</p>

          <h2 className="text-xl font-bold border-b pb-2 mt-4">Skills</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>Project Management</li>
            <li>Public Relations</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
            <li>Digital Marketing</li>
          </ul>

          <h2 className="text-xl font-bold border-b pb-2 mt-4">Languages</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>English (Fluent)</li>
            <li>French (Fluent)</li>
            <li>German (Basic)</li>
            <li>Spanish (Intermediate)</li>
          </ul>

          <h2 className="text-xl font-bold border-b pb-2 mt-4">Reference</h2>
          <p className="mt-2">Estelle Darcy</p>
          <p>Wardiere Inc. / CTO</p>
        </div>

        {/* Right Column */}
        <div className="col-span-2 bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold border-b pb-2">Profile</h2>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h2 className="text-xl font-bold border-b pb-2 mt-4">
            Work Experience
          </h2>
          <div className="mt-2">
            <h3 className="font-bold">Borcelle Studio</h3>
            <p className="text-gray-600">
              Marketing Manager & Specialist | 2030 - Present
            </p>
            <ul className="list-disc ml-5 mt-1 text-gray-700">
              <li>Develop and execute comprehensive marketing strategies.</li>
              <li>
                Lead, mentor, and manage a high-performing marketing team.
              </li>
              <li>Monitor brand consistency across channels.</li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-bold">Faucet Studio</h3>
            <p className="text-gray-600">
              Marketing Manager & Specialist | 2025 - 2029
            </p>
            <ul className="list-disc ml-5 mt-1 text-gray-700">
              <li>Create and manage marketing budgets.</li>
              <li>Oversee market research and competitor strategies.</li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-bold">Studio Shodwe</h3>
            <p className="text-gray-600">
              Marketing Manager & Specialist | 2024 - 2025
            </p>
            <ul className="list-disc ml-5 mt-1 text-gray-700">
              <li>Develop and maintain strong relationships with partners.</li>
              <li>Monitor and maintain brand consistency.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold border-b pb-2 mt-4">Education</h2>
          <div className="mt-2">
            <h3 className="font-bold">Master of Business Management</h3>
            <p className="text-gray-600">Wardiere University | 2025 - 2030</p>
            <p>GPA: 3.8 / 4.0</p>
          </div>
          <div className="mt-2">
            <h3 className="font-bold">Bachelor of Business Management</h3>
            <p className="text-gray-600">Wardiere University | 2020 - 2025</p>
            <p>GPA: 3.8 / 4.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
