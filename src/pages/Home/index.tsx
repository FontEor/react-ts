import './style.css'
import { Tabs } from 'antd-mobile'
import { useFetchChannels } from './useFetchChannels'
import HomeList from './HomeList'

const Home = () => {
    const { channels } = useFetchChannels()
    return (
      <div className="tabContainer">
         <Tabs defaultActiveKey="0">
            {channels.map((item) => (
                <Tabs.Tab title={item.name} key={item.id}>
                <div className="listContainer">
                        <HomeList channelId={'' + item.id} ></HomeList>
                </div>
                </Tabs.Tab>
            ))}
        </Tabs>
      </div>
    )
  }
  
  export default Home