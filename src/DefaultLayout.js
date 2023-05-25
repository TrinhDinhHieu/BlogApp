
// import HeaderOnly from './HeaderOnly';
import Hearder from "./component/Hearder/Hearder";


function Defaultlayout({ children }) {
  return (
    <div >
      <Hearder />
      <div >{children}</div>
    </div>
  );
}

export default Defaultlayout;
