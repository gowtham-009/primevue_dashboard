export default defineEventHandler(async (event) => {
    const response = await $fetch("https://smartpayz.gwcindia.in/smartpayz/G1-Single.php?Ce=GZ10219", {
      credentials: "include",
    });
    return response;
  });
  