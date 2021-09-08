var Minio = require('minio')

module.exports = () => {
  var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9001,
    useSSL: true,
    accessKey: 'adminminio',
    secretKey: 'adminminio',
  })
  minioClient.listBuckets().then((it) => {
    console.log('haha')
  })
}
