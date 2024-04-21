import { useState } from 'react';
import { Typography, Space, Input, Button } from 'antd';
import { SetupApp } from './SetupApp';
import { SetupSkyWay } from './SetupSkyWay';
import { AppConfig, RemoteCommunication } from './Types';
import { TopicPanel } from './TopicPanel';

const App = () => {
  const [ config, setConfig ] = useState<AppConfig>();
  const [ remote, setRemote ] = useState<RemoteCommunication>();
  const [ input, setInput ] = useState('Hello, World!');

  if (!config) {
    return <SetupApp onUploaded={setConfig} />;
  }
  if (!remote){
    SetupSkyWay(config, setRemote);
    return <></>;
  }

  return (
    <div style={{ margin: 15 }}>
      <Typography.Title level={3}>Publishing Topics</Typography.Title>
      <Space.Compact>
        <Input value={input} onChange={e => setInput(e.target.value)} />
        <Button type="primary" onClick={() => remote.sender.next({
          info: {
            name: '/dummy_in',
            type: 'std_msgs/msg/String'
          },
          msg:  { data: input }
        })}>
          Send
        </Button>
      </Space.Compact>
      <Typography.Title level={3}>Subscribing Topics</Typography.Title>
      <TopicPanel remote={remote} name='/dummy_out' type='std_msgs/msg/String' />
      <TopicPanel remote={remote} name='/fix' type='sensor_msgs/msg/NavSatFix' />
      <TopicPanel remote={remote} name='/vectornav/IMU' type='sensor_msgs/msg/Imu' />
      <TopicPanel remote={remote} name='/tracker' type='nav_msgs/msg/Odometry' />
    </div>
  );
}

export default App;
