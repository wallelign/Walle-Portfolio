const CVTwo = () => {
  return (
    <div className="w-full mx-auto bg-white p-4">
      <h1 className="text-3xl font-bold text-center">Wallelign Workie</h1>
      <p className="text-center text-gray-600 text-sm sm:text-base">
        Email:{" "}
        <a href="mailto:jadhavshree006@gmail.com" className="text-blue-500">
          jadhavshree006@gmail.com
        </a>{" "}
        | LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/rushikesh-jadhav01"
          className="text-blue-500"
        >
          LinkedIn
        </a>{" "}
        | Portfolio:{" "}
        <a href="https://rushij07.github.io/" className="text-blue-500">
          Portfolio
        </a>
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">EDUCATION</h2>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>
            Dr. DY Patil School of MCA - Master in Computer Application (CGPA:
            8.0, July 2024)
          </li>
          <li>
            Dr. Babasaheb Ambedkar Marathwada University - Bachelor's in
            Computer Science (Percent: 71.57, May 2022)
          </li>
          <li>
            State University of New York at Potsdam - Diploma in Artificial
            Intelligence (Percent: 77, November 2024)
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">SKILLS SUMMARY</h2>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>
            <strong>Languages:</strong> Python, Java
          </li>
          <li>
            <strong>Databases/OS:</strong> MySQL, PostgreSQL, Linux, Windows,
            MacOS
          </li>
          <li>
            <strong>Machine Learning:</strong> Supervised Learning, Unsupervised
            Learning, NLP, Computer Vision
          </li>
          <li>
            <strong>Libraries:</strong> Pandas, Numpy, Matplotlib, Sci-kit
            Learn, Pytorch, Tensorflow, Seaborn
          </li>
          <li>
            <strong>Frameworks/Tools:</strong> Power BI, Tableau, Flask, Hadoop,
            Git, Google Colab, Jupyter, Spyder
          </li>
          <li>
            <strong>Soft Skills:</strong> Critical Thinking, Problem-Solving,
            Effective Communication
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">WORK EXPERIENCE</h2>
        <h3 className="text-lg font-medium">Client Project for Aituors</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>
            Developed an AI-powered chatbot to streamline student and manager
            queries.
          </li>
          <li>
            Conducted research on chatbot implementation for academic support.
          </li>
          <li>
            Integrated web scraping and Mistral 7B AI model for response
            generation.
          </li>
          <li>
            Utilized Jupyter & Google Colab (GPU) for model training and
            optimization.
          </li>
          <li>
            Improved chatbot efficiency by 80% and accuracy to 98%, driving a
            20% revenue increase.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">PROJECTS</h2>
        <h3 className="text-lg font-medium">AgroSense</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>Developed an AI-powered agricultural decision-support system.</li>
          <li>Achieved 97% accuracy in crop selection.</li>
          <li>Built CNN-based detection models to optimize recommendations.</li>
        </ul>

        <h3 className="text-lg font-medium">Loan Defaulter Prediction</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>Built ML models with 80% accuracy to predict loan defaults.</li>
          <li>
            Achieved 10% reduction in loan defaulters, saving 1.2M in potential
            losses.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">CERTIFICATES</h2>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>NASSCOM Data Science (Govt. of India)</li>
          <li>Data Science Certificate (360DigiTMG)</li>
          <li>
            Analyzing and Visualizing Data with Microsoft Power BI (360DigiTMG)
          </li>
          <li>Structured Query Language (360DigiTMG)</li>
          <li>Python Programming (360DigiTMG)</li>
        </ul>
      </section>
    </div>
  );
};

export default CVTwo;
