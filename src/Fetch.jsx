import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllFetchThingHandler } from "./Action/FetechActionCreater";


function Fetch() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.fetch);
  const [searchText, setSearchText] = useState("");

  // Fetch data handler
  const fetchDataHandler = async () => {
    dispatch(AllFetchThingHandler());
  };

  // Search data handler
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-12">
            <h1 className="text-center">Fetch Data</h1>
            <div className="text-center my-3">
              <button className="btn btn-primary" onClick={fetchDataHandler}>
                Fetch Data
              </button>
            </div>
          </div>

          <div className="col-12 my-3 text-center">
            <input
              type="text"
              placeholder="Search by name"
              className="form-control d-inline-block w-50"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="col-12">
            <div className="card">
              <div className="card-header bg-dark text-center">
                <h2 className="text-white">Employee Details</h2>
              </div>
              <div className="card-body">
                <table className="table table-responsive text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && data.length === 0 && (
                      <tr>
                        <td colSpan="6">
                          <h1>Loading...</h1>
                        </td>
                      </tr>
                    )}
                    {!loading && Object.keys(error).length > 0 && (
                      <tr>
                        <td colSpan="6">
                          <h1>Something went wrong</h1>
                        </td>
                      </tr>
                    )}
                    {!loading && filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>{item.website}</td>
                        </tr>
                      ))
                    ) : (
                      !loading && (
                        <tr>
                          <td colSpan="6">
                            <h1>No Data Found</h1>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fetch;
