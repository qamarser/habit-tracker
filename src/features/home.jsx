import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Habit Tracker</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/performance')}
        >
          View Performance
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
         <button
            className="btn btn-secondary"
            onClick={() => navigate('/MonthlyCalendar')} >
              Monthly Progress
         </button>
      </div>
      {/* Move your existing habit tracker UI here */}
    </div>
  );
};

export default Home;