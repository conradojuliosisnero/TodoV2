export async function postTodo() {
  const URL = "";
  const options = {};
  try {
    const data = await fetch(URL, options);
    if (data.ok) {
      const response = await data.json();
      return response;
    } else {
      console.log("ups...  algo salio mal");
    }
  } catch (error) {
    console.error(error);
  }
}
