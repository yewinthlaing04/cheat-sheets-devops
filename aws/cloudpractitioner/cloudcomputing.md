## Cloud computing

the practice of using a network of remoote servers hosted on the internet to store, manage and process data, rather than a local server or a personal computer.

| On-Premise                      | Cloud Providers                                                                                      |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| You own the server              | Someone else own the server                                                                          |
| You hire IT people              | Someone else hire the IT people                                                                      |
| You pay or rent the real-estate | Someone else pays or rents the real-estate                                                           |
| You take all the risk           | You are responsivle for your configuring cloud servies and code, someone else takes care of the rest |

## The evolution of cloud host

### Dedicated Server ( 1st evolution )

- One physical machine dedicated to single a business.
- Run a single web-app/site
- _Very expensive, High Maintenance, High Security_

### Virtual Private Server (VPS) (2nd evolution )

- One physical machine dedicated to a single business
- The Physical machine is virtualized into sub-machines
- Runs Multiple web-apps/sites
- Better Utilization and isolation of resources

### Shared Hosting ( 3rd Evolution )

- One physical machine, shared by hundred of businesses
- Relies on most tenants under-utlizing their resources.
- Very Cheap, limited functionality, poor isolation

### Cloud Hosting ( 4th Evolution )

- Multiple physical machines that act as one system.
- The system is abstracted into multiple cloud services
- Flexible , Scalable, Secure, Cost Effective, High Configurability

CSPs = Cloud Service Providers

#### A Cloud Service Provider is a company which

- provides multiple Cloud Services tens to hundreds of services
- those Cloud Services `can be chained together` to create Cloud Architectures
- those Cloud Services are accessbile via `Single Unifed API` eg. AWS API
- those Cloud Services utilized `metered billing` based on usage eg. per second , per hour
- those Cloud Services have rich monitoring built in eg. AWS CloudTrail
- Those Cloud Services have an Infrastructure as a Service ( IaaS ) offering
- offers automation via infrastructure as Code ( IaC )

| **Tier**   | **Cloud Provider 1** | **Cloud Provider 2** | **Cloud Provider 3**            | **Cloud Provider 4** |
| ---------- | -------------------- | -------------------- | ------------------------------- | -------------------- |
| **1 Tier** | AWS                  | Azure                | Google Cloud Platform           | Alibaba Cloud        |
| **2 Tier** | IBM Cloud            | Oracle Cloud         | Huawei Cloud                    | Tencent Cloud        |
| **3 Tier** | Vultr                | Digital Ocean        | Akamai Connected Cloud (Linode) | —                    |
