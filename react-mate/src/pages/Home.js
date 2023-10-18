import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        console.log(token);
    });

  return (
    <div>
      Home
    </div>
  );
};

export default Home;