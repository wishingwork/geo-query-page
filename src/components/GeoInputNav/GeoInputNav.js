import classnames from "classnames";
export default function GeoInputNav(props) {
  const { geoInputType, setGeoInputType } = props;
  console.log(5, geoInputType);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a
          href="#"
          className={classnames(
            "text-sm font-semibold leading-6 text-gray-900 flex-1",
            { "bg-gray-100": geoInputType === "map" }
          )}
          onClick={() => setGeoInputType("map")}
        >
          Map
        </a>
        <a
          href="#"
          className={classnames(
            "text-sm font-semibold leading-6 text-gray-900 flex-1",
            { "bg-gray-100": geoInputType === "city" }
          )}
          onClick={() => setGeoInputType("city")}
        >
          Enter City
        </a>
      </nav>
    </header>
  );
}
