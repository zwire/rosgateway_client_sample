# ROS Gateway Client Sample

SkyWay WebRTC DataStreamとroslib.jsを使い、ROS/ROS2をWAN経由で操作できるようにしようという試みです。

```
                Local | Remote
                      |
                   (SkyWay)
      rosgateway --- WAN --- client
Web       |           |
----------|-----------|
Host      |           |
      rosbridge       |
          |           |
      ROS/ROS2        |
```

本リポジトリはこのclientにあたる部分のサンプルです。

## 利用方法

以下のページにアクセスください。

https://zwire.github.io/rosgateway_client_sample/

最初にYAMLファイルのアップロードを求めています。
以下のように記載してください。

```yaml
skyway:
  channel: CHANNEL_NAME
  id: SKYWAY_APP_ID
  secret: SKYWAY_SECRET_KEY
```

'CHANNEL_NAME'は接続先のそれと一致するように、
'SKYWAY_APP_ID'と'SKYWAY_SECRET_KEY'はアカウントに紐づきますので、
[こちら](https://skyway.ntt.com/ja/)から取得してください。

操作は以上です。
うまくいっていればブラウザの画面にメッセージが表示され、テキストのエコーができるようになります。
異常があればブラウザのデベロッパーコンソールに何か出ます。

## ソースから実行する場合

Node.jsの環境を用意したのち、本リポジトリのルートで以下を実行。

```
# install packages
npm ci

# run
npm run start
```