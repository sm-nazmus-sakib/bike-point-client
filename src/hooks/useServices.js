import { useEffect, useState } from "react";
const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://young-basin-54611.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services };
};
export default useService;
