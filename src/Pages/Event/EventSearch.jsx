import React, { useState, useEffect } from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";

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
      <input
        type="text"
        placeholder="Search by event title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="input input-bordered w-full"
      />
      <select
        value={filterOption}
        onChange={handleFilterChange}
        className="select select-bordered w-full md:w-auto"
      >
        <option value="">All Dates</option>
        <option value="today">Today</option>
        <option value="currentWeek">Current Week</option>
        <option value="lastWeek">Last Week</option>
        <option value="currentMonth">Current Month</option>
        <option value="lastMonth">Last Month</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default EventSearch;
