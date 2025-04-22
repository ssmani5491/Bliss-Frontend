import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Import 'Routes' instead of 'Switch'


import Confirmation from './components/confirmation';
import Doctor from './components/doctor';
import Service from './components/service';
import Contact from './components/contact';
import Department from './components/departments/department';
import DepartmentSingle from './components/departments/department-single';
import Documentation from './components/documentation';

import Login from './components/login';
import Register from './components/register';
import About from './components/About';
import DoctorSingle from './components/doctors/doctor-single';
import Shanthi from './components/doctors/Shanthi';
import Seetha from './components/doctors/seetha';
import Murugan from './components/doctors/murugan';
import Ajith from './components/doctors/Ajith';
import Jaanu from './components/doctors/Jaanu';
import Ram from './components/doctors/Ram';
import Mani from './components/doctors/Mani';
import Divya from './components/doctors/Divya';
import Ajay from './components/doctors/Ajay';
import Janaki from './components/doctors/Janaki';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import CompanySupport from './components/CompanySupport';
import FAQ from './components/FAQ';
import CompanyLicense from './components/CompanyLicense';
import Cardiology from './components/departments/Cardiology';
import Opthomology from './components/departments/Opthomology';
import DentalCare from './components/departments/Dental-Care';
import Pulmology from './components/departments/Pulmology';
import Gynecology from './components/departments/Gynecology';
import MbbsUg from './components/courses/mbbs-ug';
import MBBSPG from './components/courses/mbbs-pg';
import BDSUG from './components/courses/bds-ug';
import BDSPG from './components/courses/bds-pg';
import Nursing from './components/courses/nursing';
import BLS from './components/courses/bls';
import Index from './components';
import Appointment from './components/appointment';
import ACLS from './components/courses/acls';
import Contact_Confirmation from './components/contact_confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {" "}
          {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookings" element={<Appointment />} />
          <Route path="/success" element={<Confirmation />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor-single" element={<DoctorSingle />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/generalmedicine" element={<DepartmentSingle />} />
          <Route path="/document" element={<Documentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shanthi" element={<Shanthi />} />
          <Route path="/seetha" element={<Seetha />} />
          <Route path="/murugan" element={<Murugan />} />
          <Route path="/ajith" element={<Ajith />} />
          <Route path="/jaanu" element={<Jaanu />} />
          <Route path="/ram" element={<Ram />} />
          <Route path="/mani" element={<Mani />} />
          <Route path="/divya" element={<Divya />} />
          <Route path="/ajay" element={<Ajay />} />
          <Route path="/janaki" element={<Janaki />} />
          <Route path="/termsandcondition" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/companysupport" element={<CompanySupport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/companylicence" element={<CompanyLicense />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/opthomology" element={<Opthomology />} />
          <Route path="/dentalcare" element={<DentalCare />} />
          <Route path="/pulmology" element={<Pulmology />} />
          <Route path="/gynecology" element={<Gynecology />} />
          <Route path="/mbbsug" element={<MbbsUg />} />
          <Route path="/mbbspg" element={<MBBSPG />} />
          <Route path="/bdsug" element={<BDSUG />} />
          <Route path="/bdspg" element={<BDSPG />} />
          <Route path="/nursing" element={<Nursing />} />
          <Route path="/bls" element={<BLS />} />
          <Route path="/acls" element={<ACLS />} />
          <Route path="//ussuccess" element={<Contact_Confirmation />} />
        </Routes>{" "}
        {/* Close 'Routes' here */}
      </Router>
    </div>
  );
}

export default App;
