export default function LandingPage() {

  return (

    <div className="landing-page">

      <div className="landing-inner">

        <img
          className="landing-logo"
          src="/assets/logo.svg"
          alt="DK Holding GmbH"
        />

        <h1>
          DK Group
        </h1>

        <p>
          Integrated Global Business Network
        </p>

        <div className="company-grid">

          <a href="#" className="company-card">
            <h2>DK Holding GmbH</h2>
            <span>Corporate Headquarters</span>
          </a>

          <a href="#" className="company-card">
            <h2>DK Europe GmbH</h2>
            <span>European Operations</span>
          </a>

          <a href="#" className="company-card">
            <h2>DK Logistics GmbH</h2>
            <span>Global Logistics</span>
          </a>

          <a href="#" className="company-card">
            <h2>DK Foods GmbH</h2>
            <span>KOREA Food</span>
          </a>

        </div>

      </div>

    </div>

  );

}