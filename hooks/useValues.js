import { useState } from "react";

export const useValues = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

/**Validation Try
 * import { useState } from "react";

export const useValues = (initialValues, pattern = "") => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      if (pattern != "") {
        const re = pattern;
        if (e.target.value === "" || re.test(e.target.value)) {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        }
      } else
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
    },
  ];
};
 * 
 * 
 */
