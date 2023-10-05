export const getMember = async () => {
  // console.log("props in api", props);

  const res = await fetch("http://localhost:5000/members/getMembers", {
    method: "GET", // Use GET method for a GET request
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
  const data = await res.json();
  return data;
};
