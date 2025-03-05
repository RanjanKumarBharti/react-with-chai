// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //  first method
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //     fetch("https://api.github.com/users/RanjanKumarBharti")
  //     .then(response=> response.json())
  //     .then(data=>{
  //         console.log(data)
  //         setData(data)
  //     })
  // })
  return (
    <div className=" bg-gray-600 text-3xl text-center p-4 m-4 text-white rounded-xl">
      <div className=" pb-4">Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

// second method
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/RanjanKumarBharti"
  );
  return response.json();
};
