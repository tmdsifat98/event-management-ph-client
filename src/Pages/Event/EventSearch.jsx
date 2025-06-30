import React, { useState, useEffect } from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { IoSearchOutline } from "react-icons/io5";

const EventSearch = ({ setEvents, setLoading }) => {
  const axiosLocal = useAxiosLocal();
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosLocal.get("/events/search").then((res) => {
      setEvents(res.data);
      setLoading(false);
    });
  }, [setEvents, setLoading]);

  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setFilterOption(selectedFilter);

    const params = new URLSearchParams();
    if (selectedFilter) params.append("filter", selectedFilter);

    setLoading(true);
    axiosLocal.get(`/events/search?${params}`).then((res) => {
      setEvents(res.data);
      setLoading(false);
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchText) params.append("title", searchText);
    if (filterOption) params.append("filter", filterOption);

    setLoading(true);
    axiosLocal.get(`/events/search?${params}`).then((res) => {
      setEvents(res.data);
      setLoading(false);
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 mb-6 w-full md:w-2/3 lg:w-1/3 mx-auto"
    >
      <div className="bg-white rounded items-center w-full px-0 border border-gray-300 flex gap-2 justify-between pl-2 text-black">
        <IoSearchOutline size={23}/>
        <input
          type="text"
          placeholder="Search by event title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=" text-black w-full py-2 outline-none"
        />
        <button
          type="submit"
          className="btn btn-primary border-none rounded-l-none flex items-center justify-center px-2 md:px-4"
        >
          Search
        </button>
      </div>

      <select
        value={filterOption}
        onChange={handleFilterChange}
        className="select select-bordered w-2/5"
      >
        <option value="">All Dates</option>
        <option value="today">Today</option>
        <option value="currentWeek">Current Week</option>
        <option value="lastWeek">Last Week</option>
        <option value="currentMonth">Current Month</option>
        <option value="lastMonth">Last Month</option>
      </select>
    </form>
  );
};

export default EventSearch;
