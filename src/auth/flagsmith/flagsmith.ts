import flagsmith from "flagsmith";

flagsmith.init({
  environmentID: import.meta.env.VITE_FLAGSMITH_ENVIRONMENT,
  cacheFlags: true,
  enableAnalytics: true,
});

export default flagsmith;
