import Footers from "./Footers";
import Headers from "./headers";

export default function Layouts({ children }: any) {
  return (
    <div>
      <Headers />
      {children}
      <Footers />
    </div>
  );
}
