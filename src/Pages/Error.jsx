import { Helmet } from "react-helmet";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="flex gap-4 items-end">
        <h2 className="text-3xl font-bold text-black">{error.status}</h2>
        <p>{error.statusText}</p>
      </div>
      <span>{error.data}</span>
    </div>
  );
};

export default Error;