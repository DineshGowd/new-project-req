import { useEffect } from 'react'

const useIntersectionObs = (ref, options) => {
  useEffect(() => {
    console.log("ref",ref);
    console.log("root",options.root);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=>{
        entry.target.classList.add("show")
      })
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

};

export default useIntersectionObs;
