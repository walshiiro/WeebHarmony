import './TradePage.css';
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import GetUserCardData from "../../components/GetUserCardData/GetUserCardData.tsx";
function TradePage() {
  return (
    <div>
        <NavigateBar />
        <div className={"Trade-container"}>
            <div className={"TradePage-header"}>

            <div className={"Trade-container-userpage"}>
                <div className={"Trade-container-userpage-packshowcase"}>
                    <GetUserCardData/>

                </div>
            </div>
                <button className={"Trade-container-btn"}>Trade!</button>

                <div className={"Trade-container-anotheruser"}>
                <div className={"Trade-container-anotheruser-packshowcase"}>
                </div>
            </div>
            </div>

        </div>
    </div>
  );
}
export default TradePage;