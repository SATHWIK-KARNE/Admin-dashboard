import Chart from "../../components/chart/Chart"
import Featured from "../../components/featuredInfo/Featured"
import "./home.css"
import { userData } from "../../data"
import WidgetSm from "../../components/widgetsSmall/WidgetSm"
import WidgetLg from "../../components/widgetsLarge/WidgetLg"
const Home = () => {
  return (
    <div className="home">
      <Featured/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>

      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
