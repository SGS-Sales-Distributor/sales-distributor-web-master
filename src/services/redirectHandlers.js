import router from "../router";

export function redirectToHomePage() {
  setTimeout(() => {
    router.push({
      path: "/dashboard",
    });
  }, 1000);
}

