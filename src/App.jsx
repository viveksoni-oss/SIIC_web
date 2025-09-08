import ProgramOverview from "./pages/ProgramOverview.jsx";
import Programs from "./pages/Programs.jsx";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Branding from "./pages/Branding";
import Cofounders from "./pages/Cofounders";
import FlashNews from "./pages/FlashNews.jsx";
import Lab from "./pages/Lab.jsx";
import ManagePortfolios from "./pages/ManagePortfolios";
import Mentors from "./pages/Mentors";
import OfficeSpaces from "./pages/OfficeSpaces";
import OurTeam from "./pages/OurTeam";
import Partners from "./pages/Partners";
import Startups from "./pages/Startups";
import UpcomingEvents from "./pages/UpcomingEvents";
import WhoWeAre from "./pages/WhoWeAre";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        {/* PROGRAMS SECTION */}
        {/* Main programs listing page */}
        <Route path="/programs" element={<Programs />}></Route>
        {/* Individual program detail page with dynamic ID parameter */}
        <Route path="programs/:id" element={<ProgramOverview />} />

        {/*LEADERSHIP */}
        {/* Board of directors information page */}
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        {/* Company team members page */}
        <Route path="/our-team" element={<OurTeam />} />
        {/* Company information and mission page */}
        <Route path="/who-we-are" element={<WhoWeAre />} />

        {/* SERVICES & FACILITIES */}
        {/* Company branding and marketing materials */}
        <Route path="/branding" element={<Branding />} />
        {/* Laboratory facilities and equipment */}
        <Route path="/lab" element={<Lab />} />
        {/* Available office spaces for startups */}
        <Route path="/office-spaces" element={<OfficeSpaces />} />
        {/* Portfolio management services */}
        <Route path="/manage-portfolios" element={<ManagePortfolios />} />

        {/* NETWORK & COMMUNITY */}
        {/* Co-founder matching and networking */}
        <Route path="/cofounders" element={<Cofounders />} />
        {/* Available mentors and advisors */}
        <Route path="/mentors" element={<Mentors />} />
        {/* Partner organizations and collaborators */}
        <Route path="/partners" element={<Partners />} />
        {/* Portfolio startups and companies */}
        <Route path="/startups" element={<Startups />} />
        {/* NEWS & EVENTS */}
        {/* Latest news and announcements */}
        <Route path="/flash-news" element={<FlashNews />} />
        {/* Upcoming events and workshops */}
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
      {/* Footer  */}
      <Footer></Footer>
    </>
  );
}

export default App;
