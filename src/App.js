import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Settings from './Pages/Settings';

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filterUsers, setFilterUsers] = useState(false);
  const [changedNationalities, setChangedNationalities] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [checkNationalitiesString, setCheckNationalitiesString] = useState("");
  const [selectedNationalities, setSelectedNationalities] = useState("");
  const [page, setPage] = useState(1);

  var apiLink = "https://randomuser.me/api/?page=";


  /**
  * Get users from the API
  *
  * @returns {object} List of users
  */

  async function fetchUsers() {

    // if there are nationalities selected by the user on the settings page, then only users of that nationality will be fetched
    const { data } = await axios.get(apiLink + page + "&results=50" + nationalities.toString());
    if (users.length >= 1000) {
      //if the user selects a nationality, the users will be refreshed
      if (changedNationalities) {
        setUsers([...data.results]);
        setHasMore(true);
        setChangedNationalities(false);
      }
      else {
        setHasMore(false);
      }
    }
    //checks whether the displayed users are of the same nationality, and if they are, it adds new users with the selected nationalities
    else if (nationalities.toString() == checkNationalitiesString) {
      setUsers([...users, ...data.results]);
    }
    else {
      setUsers([...data.results]);
    }

    setPage(page + 1);
    setCheckNationalitiesString(nationalities.toString());
  }


  useEffect(() => {
    fetchUsers();
    //when the user scrolls, the search field gets a white background and remains fixed
    window.addEventListener("scroll", function () {
      var searchblock = this.document.querySelector(".search__block");
      searchblock.classList.toggle("search__block--background-white", this.window.scrollY > 10)
    })
  }, [nationalities]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home users={users} fetchusers={fetchUsers} hasmore={hasMore} setuserfirstname={setUserFirstName} nationalities={nationalities} setuserlastname={setUserLastName} userfirstname={userFirstName} userlastname={userLastName} filterusers={filterUsers} setfilterusers={setFilterUsers} selecteduser={selectedUser} setselecteduser={setSelectedUser} />}></Route>
          <Route path="/settings" element={<Settings setnationalities={setNationalities} nationalities={nationalities} setpage={setPage} setchangednationalities={setChangedNationalities} selectednationalities={selectedNationalities} setselectednationalities={setSelectedNationalities} setfilterusers={setFilterUsers}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
