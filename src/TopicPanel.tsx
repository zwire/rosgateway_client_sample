import { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { RemoteCommunication } from './Types';

interface Props {
  remote: RemoteCommunication;
  name: string;
  type: string;
}

export const TopicPanel = ({ remote, name, type }: Props) => {
  const [ text, setText ] = useState('');
  useEffect(() => {
    remote.receiver.subscribe(x => {
      if (x.info.name === name) {
        setText(JSON.stringify(x.msg, null, 2));
      }
    });
  }, []);
  return (
    <Collapse
      style={{ margin: 5 }}
      items={[{
        key: '1',
        label: name,
        children: 
          <>
            <p>{type}</p>
            <pre>{text}</pre>
          </>
      }]}
    />
  );
};
