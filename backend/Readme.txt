Do these things to make it work!
1. Install npm if you dont ahve it already
2. npm Install
3. npm install nodemon
4. Now we will set up the cockroach DB
install cockroachdb  using https://www.cockroachlabs.com/docs/v21.1/install-cockroachdb-linux.html
4a.windows: run these in the cmd line
4a.$ErrorActionPreference = "Stop"; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $ProgressPreference = 'SilentlyContinue'; mkdir -p $env:appdata/cockroach; Invoke-WebRequest -Uri https://binaries.cockroachdb.com/cockroach-v21.1.7.windows-6.2-amd64.zip -OutFile cockroach.zip; Expand-Archive -Path cockroach.zip; Copy-Item cockroach/cockroach-v21.1.7.windows-6.2-amd64/cockroach.exe -Destination $env:appdata/cockroach; $Env:PATH += ";$env:appdata/cockroach"
4b.mkdir -p $env:appdata\.postgresql\; Invoke-WebRequest -Uri https://cockroachlabs.cloud/clusters/166b1abd-8561-4dbe-baa9-62efc69385d6/cert -OutFile $env:appdata\.postgresql\root.crt
4c.cockroach sql --url "postgresql://yash:tZL02rNcIwQKSOJM@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=$env:appdata\.postgresql\root.crt&options=--cluster%3Dcreamy-fox-3645"
5. Change the pathToCRTFile variable in server.js to the location of the newly created .crt file
6. nodemon server.js