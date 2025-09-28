import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const AcceptTask = ({ data, empName }) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl px-2 py-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
        <h3 className="text-sm">{data.date}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button  className="bg-green-500 py-3 px-2 text-sm rounded-2xl">
          Mark as Completed
        </button>
        <button 
          className="bg-red-500 py-3 px-6 text-sm rounded-2xl"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;

