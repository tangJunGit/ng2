```bash
        
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    map $http_upgrade $connection_upgrade {
        default upgrade;
        '' close;
    }

    upstream websocket {
        server localhost:8087;
    }

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    #sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;
        client_max_body_size    1000m;

    #gzip  on;

    server {
        listen       3001;
        server_name  localhost;
                
        #charset koi8-r;

        #access_log  logs/host.access.log  main;
            

        location / {
              root   D:/web/ng2/dist;     
              index index.php index.html index.htm;
         }
         location /ng2 {
              root   D:/web/ng2/dist;     
              index index.php index.html index.htm;
         }

         location /command-center {
              root   F:/changhong/loving-command-center-service/command-center-web/dist;      
              index index.php index.html index.htm;
         }
         location /commandcenter {
                proxy_set_header X-Forwarded-HOST 10.9.62.41:3001;
                    proxy_pass http://103.245.129.20:8089;
         }
                                                        
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    
    }

}
```
