import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// client-facing pages
import AboutApp from './user_profile/About/about_app';
import HomeApp from './user_profile/home page/home_page_app';
import FindLawyerApp from "./user_profile/find-a-lawyer/FindLawyerApp";
import Result from "./user_profile/resutl_page/result_app";
import DeatailApp from "./user_profile/deatil info/detail_app";
import ReviewApp from "./user_profile/review lawyer/review_app";
import LoginApp from "./user_profile/login/login_app";

// lawyer interface pages
import WorkTableApp from './worktable/worktable_app';
import EditProfilApp from './edit_profile/edit_profil_app';

function App() {
  return (
    <Router>
      <Routes>
        {/* client-facing site */}
        <Route path="/" element={<HomeApp />} />
        <Route path="/Home" element={<HomeApp />} />
        <Route path="/About_us" element={<AboutApp />} />
        <Route path="/Lawyer_directory" element={<FindLawyerApp />} />
        <Route path="/find-a-lawyer" element={<FindLawyerApp />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Detail_App" element={<DeatailApp />} />
        <Route path="/review" element={<ReviewApp />} />
        <Route path="/login" element={<LoginApp />} />

        {/* lawyer interface, under /lawyer to avoid clashing with "/" above */}
        <Route path="/lawyer" element={<WorkTableApp />} />
        <Route path="/lawyer/worktable" element={<WorkTableApp />} />
        <Route path="/lawyer/edit_profil" element={<EditProfilApp />} />
      </Routes>
    </Router>
  );
}

export default App;
