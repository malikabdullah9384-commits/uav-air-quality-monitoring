
import { useState } from "react";
import {
  Activity, AirVent, Bell, BrainCircuit, ChevronRight,
  CloudSun, Database, Gauge, LayoutDashboard, MapPin,
  Menu, Plane, Route, ShieldCheck, Wind, X
} from "lucide-react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis
} from "recharts";

const readings = [
  { time: "09:00", pm25: 28 },
  { time: "10:00", pm25: 35 },
  { time: "11:00", pm25: 31 },
  { time: "12:00", pm25: 42 },
  { time: "13:00", pm25: 48 },
  { time: "14:00", pm25: 39 },
];

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "UAV Monitoring", icon: Plane },
  { name: "Air Quality Map", icon: MapPin },
  { name: "Analytics", icon: Activity },
  { name: "Forecast", icon: CloudSun },
  { name: "Alerts", icon: Bell },
  { name: "Mission Planning", icon: Route },
  { name: "Mission History", icon: Database },
  { name: "Pollution Solutions", icon: ShieldCheck },
];

function StatCard({ title, value, unit, icon: Icon, description }) {
  return (
    <article className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        <div className="stat-icon"><Icon size={20} /></div>
      </div>
      <div className="stat-value">
        {value}<small> {unit}</small>
      </div>
      <p>{description}</p>
    </article>
  );
}

function Dashboard() {
  return (
    <>
      <div className="page-heading">
        <div>
          <span className="eyebrow">ENVIRONMENTAL INTELLIGENCE</span>
          <h1>Air Quality Dashboard</h1>
          <p>Monitor pollution levels and simulated UAV activity.</p>
        </div>
        <span className="demo-badge">DEMO DATA</span>
      </div>

      <div className="stats-grid">
        <StatCard title="PM2.5" value="42" unit="µg/m³"
          icon={Wind} description="Sample particulate reading" />
        <StatCard title="PM10" value="65" unit="µg/m³"
          icon={AirVent} description="Sample particulate reading" />
        <StatCard title="Temperature" value="27" unit="°C"
          icon={CloudSun} description="Simulated environment" />
        <StatCard title="Humidity" value="61" unit="%"
          icon={Activity} description="Simulated environment" />
      </div>

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>PM2.5 Monitoring</h2>
              <p>Hourly sample measurements</p>
            </div>
            <span className="chart-label">µg/m³</span>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={readings}>
                <defs>
                  <linearGradient id="pollutionFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#26364a" />
                <XAxis dataKey="time" stroke="#8294aa" />
                <YAxis stroke="#8294aa" />
                <Tooltip contentStyle={{
                  background: "#101c2c",
                  border: "1px solid #304158",
                  borderRadius: "8px"
                }} />
                <Area type="monotone" dataKey="pm25"
                  stroke="#38bdf8" strokeWidth={3}
                  fill="url(#pollutionFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>UAV Status</h2>
              <p>Simulated flight information</p>
            </div>
            <span className="status-badge">Demo</span>
          </div>

          <div className="drone-display">
            <div className="drone-circle"><Plane size={42} /></div>
            <h3>UAV-001</h3>
            <p>Simulated vehicle</p>
          </div>

          <div className="detail-row">
            <span>Connection</span><strong>Demo mode</strong>
          </div>
          <div className="detail-row">
            <span>Latitude</span><strong>33.6844</strong>
          </div>
          <div className="detail-row">
            <span>Longitude</span><strong>73.0479</strong>
          </div>
          <div className="detail-row">
            <span>Altitude</span><strong>50 m</strong>
          </div>
          <div className="detail-row">
            <span>Battery</span><strong>82% (sample)</strong>
          </div>
        </section>
      </div>

      <div className="dashboard-grid lower-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>System Components</h2>
              <p>Planned project integrations</p>
            </div>
          </div>

          {[
            ["Website", "React frontend", "In development"],
            ["Database", "MongoDB", "Future integration"],
            ["AI Forecasting", "Python ML model", "Future integration"],
            ["UAV Sensors", "Telemetry and air quality", "Future integration"],
          ].map(([name, detail, status]) => (
            <div className="detail-row component-row" key={name}>
              <div><strong>{name}</strong><small>{detail}</small></div>
              <span>{status}</span>
            </div>
          ))}
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Pollution Alerts</h2>
              <p>Illustrative events</p>
            </div>
            <Bell size={19} />
          </div>

          <div className="alert-card">
            <span className="alert-symbol">!</span>
            <div>
              <strong>Elevated PM2.5</strong>
              <p>Sample reading requires verification.</p>
            </div>
          </div>

          <div className="alert-card">
            <span className="alert-symbol amber">!</span>
            <div>
              <strong>Pollution trend increasing</strong>
              <p>Review the sample readings and forecast.</p>
            </div>
          </div>

          <div className="solution-note">
            <ShieldCheck size={21} />
            <div>
              <strong>Pollution Solutions</strong>
              <p>Identify possible sources and recommend targeted interventions.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function OtherPage({ name }) {
  const descriptions = {
    "UAV Monitoring": "View UAV coordinates, altitude, battery and connection status.",
    "Air Quality Map": "Display UAV routes, sampling points and pollution hotspots.",
    "Analytics": "Explore historical PM2.5, PM10, temperature and humidity readings.",
    "Forecast": "Display future PM2.5 predictions from the AI model.",
    "Alerts": "Review pollution spikes, invalid readings and connection warnings.",
    "Mission Planning": "Configure a survey area, altitude and waypoint route.",
    "Mission History": "Review previous missions, durations and outcomes.",
    "Pollution Solutions": "Investigate pollution sources and track recommended interventions."
  };

  return (
    <section className="panel placeholder-page">
      <div className="placeholder-icon"><Gauge size={35} /></div>
      <span className="eyebrow">PROJECT MODULE</span>
      <h1>{name}</h1>
      <p>{descriptions[name]}</p>
      <div className="solution-note">
        <BrainCircuit size={22} />
        <div>
          <strong>Module foundation created</strong>
          <p>This page will be developed in the next steps. Future data and model integrations will be added here.</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      {menuOpen && (
        <button className="mobile-overlay" onClick={() => setMenuOpen(false)}
          aria-label="Close navigation" />
      )}

      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-icon"><Wind size={25} /></div>
          <div>
            <strong>ATMOS<span>AI</span></strong>
            <small>UAV AIR INTELLIGENCE</small>
          </div>
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <p className="nav-heading">MAIN MENU</p>
        <nav>
          {navigation.map(({ name, icon: Icon }) => (
            <button key={name}
              className={`nav-link ${page === name ? "selected" : ""}`}
              onClick={() => { setPage(name); setMenuOpen(false); }}>
              <Icon size={18} />
              <span>{name}</span>
              {page === name && <ChevronRight size={15} />}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="online-dot" />
          <div><strong>Development Mode</strong><small>No real sensors connected</small></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"><Menu /></button>
          <div className="breadcrumb">Workspace <ChevronRight size={14} /> <strong>{page}</strong></div>
          <span className="topbar-label"><span className="online-dot" /> PROTOTYPE</span>
        </header>

        <div className="page-content">
          {page === "Dashboard" ? <Dashboard /> : <OtherPage name={page} />}
          <footer>
            ATMOS AI · Academic FYP prototype · Demo data only
          </footer>
        </div>
      </main>
    </div>
  );
}
