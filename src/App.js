import "./App.css";
import { useEffect } from "react";
import GeoInput from "./components/GeoInput";
import { fetchISDGeoData } from "./apis/awsApiGateway";

function App() {
  const APIResult = async () => {
    const geodata = await fetchISDGeoData({
      options: {
        method: "POST",
        body: JSON.stringify({ cityName: "Taipei" }),
      },
    });
    console.log(14, geodata);
  };

  useEffect(() => {
    APIResult();
  }, []);

  return (
    <div className="App">
      <div className="bg-white">
        <div className="relative isolate px-6 pt-6 lg:px-8">
          <div className="mx-auto max-w-10xl py-12 sm:py-18 lg:py-26">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>

            <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                    <GeoInput />
                  </div>

                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
                      <dt className="mt-4 font-semibold text-black">
                        Weekly articles
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod
                        non irure cupidatat duis commodo amet.
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
                      <dt className="mt-4 font-semibold text-black">No spam</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non
                        adipisicing. Voluptate incididunt anim.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
