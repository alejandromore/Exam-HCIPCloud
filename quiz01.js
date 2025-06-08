var questions = [
  {//1
	type: "multiple-multiple-choice",
	question: "Which of the following are cloud-native advantages? () [Multiple choice questions]",
	options: [
		"Modules are loosely coupled",
		"Quick deployment",
		"Hardware virtualization 0%",
		"Quick Service Recovery"
	  ],
	answer: [0,1,3]
  },
  {//2
	type: "true-false",
	question: " Cloud architecture design is very flexible and does not require mastering UML. () [Multiple choice questions]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//3
	type: "multiple-multiple-choice",
	question: "Whatare the four major applications of cloud native? () [Multiple choice questions]",
	options: [
		"DevOps",
		"Continuous delivery",
		"Container",
		"Microservices"
	  ],
	answer: [0,1,2,3]
  },
  {//4
	type: "multiple-multiple-choice",
	question: "Whatare the three major middleware services of Huawei Cloud? () [Multiple choice questions]",
	options: [
		"DCS distributed cache service",
		"DMSDistributedMessageService",
		"DDMdistributeddatabasemiddleware"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//5
	type: "multiple-choice",
	question: " Which of the following services does not belong to Huawei Cloud PaaS service?() [Multiple choice questions]",
	options: [
		"MicroservicecloudapplicationplatformServiceStage",
		"ECS",
		"CloudEngineCCE",
		"CloudPerformanceTestingServiceCPTS"
	  ],
	answer: 1,
	justification: [],
  },
  {//6
	type: "multiple-choice",
	question: "ServiceStage includes the following capabilities in addition?() [Multiple choice questions]",
	options: [
		"Cluster and node resource management",
		"Microservice Application Development Toolbox Microservice Management",
		"Database management",
		"Container and virtual machine application deployment and application management"
	  ],
	answer: 2,
	justification: [],
  },
  {//7
	type: "multiple-choice",
	question: "What stage has the application architecture change evolved to?()[Multiple choice questions]",
	options: [
		"Monolithic architecture",
		"SOA architecture",
		"Microservice architecture",
		"Fog technology architecture"
	  ],
	answer: 2,
	justification: [],
  },
  {//8
	type: "multiple-multiple-choice",
	question: "What level solutions does Huawei Cloud PaaS have?()[Multiplechoicequestions]",
	options: [
		"Applying zero transformation to the cloud. Automatic deployment and operation and maintenance",
		"Application + cloud middleware. Reduce operation and operation and maintenance costs",
		"Application containerization. Second-level elastic scaling, higher resource utilization",
		"Application of microservices. Decoupling of features. Go Live",
		"Ultimate business innovation. Function-based programming"
	  ],
	answer: [0,1,2,3,4],
	justification: [],
  },
  {//9
	type: "multiple-multiple-choice",
	question: "What are the benefits of using containers for business?()[Multiplechoicequestions]",
	options: [
		"is isolated by sharing kernel fine-grained resources.(Reducing business costs)",
		"Increases security for the business",
		"Defines delivery and deployment specifications for environment-independent standards.(Improve  Delivery Efficiency)",
		"second fast start and stop (suitable for agile scaling scenarios)",
		"Improve code development quality"
	  ],
	answer: [0,2,4],
	justification: [],
  },
  {//10
	type: "multiple-multiple-choice",
	question: " Microservices can solve the following problems compared to the traditional monolithic architecture? ()[Multiplechoicequestion",
	options: [
		"High maintenance cost",
		"Long lead time",
		"code quality is poor",
		"poors calability",
		"New student training cycle is long"
	  ],
	answer: [0,1,3,4],
	justification: [],
  },
  {//11
	type: "true-false",
	question: "DCS is mainly used for hot data caching to improve data access capability and reduce database  pressure.()[Multiplechoice]",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//12
	type: "true-false",
	question: "If the enterprise develops or maintains the middleware itself, then the enterprise needs to handle the software and hardware installation department by itself Deployment, faults and maintenance, and bug fixes; out-of-the-box if you use cloud middleware services.()[Multiplechoice]",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//13
	type: "true-false",
	question: "Can an application create multiple containers when creating an application? (Multiple choice  questions)",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//14
	type: "multiple-choice",
	question: "What are the types of clusters currently supported by CCE()[multiplechoicequestions]",
	options: [
		"Virtual machine",
		"Bare metal",
		"Windows",
		"All three are supported"
	  ],
	answer: 3,
	justification: [],
  },
  {//15
	type: "multiple-multiple-choice",
	question: "Huawei CSE supports multi-language microservices access and interworking. The supported languages  include()[multiplechoicequestions]",
	options: [
		"Java",
		"GO",
		"net",
		"Node.Js",
		"PHP",
		"Python"
	  ],
	answer: [0,1,2,3,4,5],
	justification: [],
  },
  {//16
	type: "multiple-multiple-choice",
	question: "What are the capabilities provided by Huawei CSE Microservices' full life cycle management ()  [multiple choice questions]",
	options: [
		"Service creation--- local engineering, cloud engineering",
		"CCD--- Application Development Pipeline",
		"Service operation and maintenance--- microservice governance",
		"Service monitoring--- dashboard, docking APM"
	  ],
	answer: [0,1,2,3],
	justification: [],
  },
  {//17
	type: "multiple-multiple-choice",
	question: "Which of the following scenarios is suitable for using Mesher to access CSE () [multiple choice questions]",
	options: [
		"Transforming business code written in non-java languages  into microservices",
		"Old java services transform microservices",
		"Interfacing services developed by non-java SDK with services written by java SDK",
		"Use of distributed transactions",
		"Microservices written in java, especially new microservices projects"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//18
	type: "multiple-choice",
	question: " On the Huawei cloud application operation and maintenance topology map, different colors represent the health of the instance. The colors are determined by the Apdex value. The closer the Apdex value is to 1, the healthier the application is. If an application instance is not called by another application. Then its color is () [multiple choice questions]",
	options: [
		"green",
		"Gray",
		"yellow",
		"red"
	  ],
	answer: 1,
	justification: [],
  },
  {//19
	type: "multiple-choice",
	question: " TP99 latency is the longest time required to satisfy 99% of network requests. There were four  requests that took [Single Choice]",
	options: [
		"10ms",
		"500ms",
		"20ms",
		"100ms"
	  ],
	answer: 0,
	justification: [],
  },
  {//20
	type: "true-false",
	question: "After the user has deployed the application, he needs to manually bury points in the code for APM to monitor the performance of the application. ()[Multiplechoicequestions]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//21
	type: "true-false",
	question: "Monolithic applications can use middleware.()[Multiplechoicequestions",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//22
	type: "multiple-multiple-choice",
	question: "Which of the following are commonly used disaster recovery architecture horizontal forms ()  [multiplechoicequestions]",
	options: [
		"Backup restore",
		"Offsite Recovery",
		"Cold standby",
		"Warm standby",
		"Multi-Live Mode"
	  ],
	answer: [0,2,3,4],
	justification: [],
  },
  {//23
	type: "multiple-choice",
	question: "In the IOT industry. The amount of data transmitted by the device is very small and usually has a fixed time interval. In this case, the CPU utilization is very low. Which solution can Huawei Cloud PaaS be used to save costs? ()[Multiplechoicequestions]",
	options: [
		"Serverless functional computing platform",
		"Apply microservices scheme",
		"Capability Open API Gateway",
		"Apply SaaS transformation plan"
	  ],
	answer: 0,
	justification: [],
  },
  {//24
	type: "true-false",
	question: "Application Orchestration Service (AOS) can realize automatic operation and maintenance of applications.()[Multiplechoicequestions]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//25
	type: "multiple-multiple-choice",
	question: "Which of the following cache engines does the Huawei Cloud Distributed Cache DCS service include? ()[Multiplechoicequestions]",
	options: [
		"Redis",
		"Memcached",
		"IMDG",
		"MySQL"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//26
	type: "multiple-choice",
	question: "When the business does not require high availability of cache. And the cost is low. What type of Huawei Cloud Distributed Cache DCS service should be selected for the application at this time?()  [Multiplechoicequestions]",
	options: [
		"Stand-alone",
		"Active/standby",
		"Cluster",
		"None of the above"
	  ],
	answer: 0,
	justification: [],
  },
  {//27
	type: "multiple-choice",
	question: " Huawei Cloud Distributed Database Middleware DDM Service is a distributed database access service that is used as a front-end.[Multiplechoicequestions]",
	options: [
		"DCS",
		"DMS",
		"RDS",
		"Oracle"
	  ],
	answer: 2,
	justification: [],
  },
  {//28
	type: "multiple-multiple-choice",
	question: "Which of the following are container engines?()[Multiplechoicequestions]",
	options: [
		"Docker",
		"rkt",
		"Warden",
		"eclipse"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//29
	type: "true-false",
	question: "A Pod can contain multiple containers in Kubernetes.()[Multiplechoicequestions",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//30
	type: "multiple-multiple-choice",
	question: "What are the advantages of the services provided by Huawei CCE for stateful containers?()[Multiple choicequestions]",
	options: [
		"Data persistence storage",
		"Multi-instance data sharing",
		"supports a storage format",
		"container instance fails or migrates. Data is not lost"
	  ],
	answer: [0,1,3],
	justification: [],
  },
  {//31
	type: "multiple-choice",
	question: "Which of the following Linux features does docker's resource isolation use? () [Multiple choice questions]",
	options: [
		"namespace",
		"Cgroup",
		"selinux",
		"aufs"
	  ],
	answer: 0,
	justification: [],
  },
  {//32
	type: "true-false",
	question: "Applications evolve to the Cloud Native model. Microservices are the de facto standard for Cloud Native. ()[Multiplechoicequestions]",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//33
	type: "multiple-multiple-choice",
	question: "What benefits can a microservices architecture bring?()[Multiplechoicequestions]",
	options: [
		"The boundaries of service modules are clearer: microservices emphasize modular structure (REST interface calls). This is very important for large teams.",
		"Supports independent deployment: simple services are easier to deploy. Because the services are autonomous, there will be no system crash after a problem occurs.",
		"Simple operation and maintenance: Stateless, self-service operation and maintenance eliminates  the need for a mature operation and maintenance team (mechanism) in the system. Significant cost savings",
		"Allow technology diversity: With micSroservices, you can mix multiple programming languages, development frameworks, and data storage technologies."
	  ],
	answer: [0,1,3],
	justification: [],
  },
  {//34
	type: "multiple-choice",
	question: "Microservices arise froma range of capabilities provided. Which of the following is related to microservice discovery?() [Multiplechoicequestions",
	options: [
		"Registration Center",
		"Configuration Center",
		"Governance Center",
		"Service monitoring"
	  ],
	answer: 0,
	justification: [],
  },
  {//35
	type: "multiple-choice",
	question: "In microservices practical guidance. Which microservice in the following diagram can be published using grayscale? ()[Multiplechoicequestions]",
	options: [
		"weathermapweb",
		"fusionweather",
		"weather",
		"forecast"
	  ],
	answer: 2,
	justification: [],
  },
  {//36
	type: "multiple-multiple-choice",
	question: "Which of the following are the components of Huawei Cloud's three-dimensional operation and maintenance solution?()[Multiplechoicequestions]",
	options: [
		"Infrastructure layer operation and maintenance",
		"Application layer operation and maintenance",
		"Application Performance Analysis",
		"Business Analysis"
	  ],
	answer: [0,1,2,3],
	justification: [],
  },
  {//37
	type: "true-false",
	question: "Use the log query function of Huawei Cloud Application Operation and Maintenance Service to analyze the problem. You can only view the application log on the operation interface. You cannot export the log to the local view.()[Multiplechoicequestions]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//37
	type: "true-false",
	question: "AOS (Application Orchestration Service) in the micro-service cloud application platform (Service Stage) can complete the deployment of replicated distributed systems with one click. () [Multiple choice questions]",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//39
	type: "multiple-multiple-choice",
	question: "The CICD pipeline in the software development cloud (DevCloud) can help developers automatically complete which of the following operations()[multiplechoicequestions]",
	options: [
		"Application construction",
		"Application deployment",
		"Applying automated tests",
		"Application operation and maintenance and failure recovery"
	  ],
	answer: [0,1,3],
	justification: [],
  },
  {//40
	type: "multiple-multiple-choice",
	question: "What solutions does Huawei Cloud PaaS have for cloud systems on traditional industry IT systems?()  [Multiplechoicequestions]",
	options: [
		"Apply zero modification to the cloud. Automatic deployment and operation and maintenance",
		"Application switching cloud middleware. Reduce operation and operation and maintenance costs",
		"Application containerization. Second-level elastic scaling and higher resource utilization",
		"Application of microservices. Decoupling of features. Go Live",
		"Extreme business innovation. Function-based programming"
	  ],
	answer: [0,1,2,3],
	justification: [],
  },
]

/**
  {//1
	type: "true-false",
	question: "",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//2
	type: "multiple-multiple-choice",
	question: "",
	options: [
		"",
		"",
		"",
		""
	  ],
	answer: [0,1,3],
	justification: [],
  },
  {//3
	type: "multiple-choice",
	question: "",
	options: [
		"",
		"",
		"",
		""
	  ],
	answer: 2,
	justification: [],
  },
**/