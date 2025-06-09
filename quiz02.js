var questions = [
  {//41
	type: "true-false",
	question: "The UML state diagram shows the lifecycle of a class.()[Multiplechoicequestions]",
	options: ["true","false"],
	answer: 0,
	justification: [],
  },
  {//42
	type: "true-false",
	question: "You can set the number of pods in Kubernetes' ReplicaSet.()[Multiplechoice]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//43
	type: "multiple-choice",
	question: "When a real estate company migrated offline systems to the cloud, it summarized the following  system transformation requirements: 1) the system and applications smoothly transformed to the  cloud; 2) a multi-language(java,go) hybrid architecture to support hundreds of businesses; 3) days, Rapid innovation of granular business. Respond to the above requirements. Which Huawei Cloud PaaS solution is more suitable? () [Multiple choice questions]"
	options: [
		"Apply SaaS",
		"Application Switch Cloud Middleware Solution",
		"Apply containerization scheme",
		"Application of microservices solution"
	  ],
	answer: 3,
	justification: [],
  },
  {//44
	type: "multiple-choice",
	question: "How can microservices developed using the CSE Microservices Framework SDK be deployed to  ServiceStage and called by other service discovery? () [Multiple choice questions]",
	options: [
		"Developers need to install the service center by themselves. Provide service registration and service discovery services.",
		"The caller service provides peer-to-peer access to the callee service.",
		"The service center deployed directly on the cloud platform is used for service registration and discovery.",
		"Use the Kubernetes DNS service deployed on the cloud platform for service discovery"
	  ],
	answer: 2,
	justification: [],
  },
  {//45
	type: "multiple-choice",
	question: "What is the role of the Dockerfile file used by the application when it is compiled and built in the software development cloud (DevCloud)? () [Multiple choice questions]",
	options: [
		"Save configuration parameters",
		"Make anapplication image",
		"Cloud user authentication",
		"Manage project dependencies"
	  ],
	answer: 1,
	justification: [],
  },
  {//46
	type: "multiple-multiple-choice",
	question: "Which of the following are the middleware services provided by Huawei Public Cloud?. DMS: Distributed Message Service",
	options: [
		"DCS: Distributed Cache Service",
		"DDM:Distributed Database Service",
		"DRDS: distributed relational database",
		"CMQ:Cloud Message Queue"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//47
	type: "multiple-multiple-choice",
	question: "Which of the following are the processing modules provided by default in the CSE microservice  development framework operating model? ()  [Multiple choice questions]",
	options: [
		"Service governance",
		"Load balancing",
		"Call chain tracking",
		"Performance statistics"
	  ],
	answer: [0,1,2],
	justification: [],
  },
  {//48
	type: "multiple-multiple-choice",
	question: "Threshold alarm is set by detecting the upper and lower limits of the indicators defined in the threshold rules. If the trigger condition is reached. An alert message is sent. Perform custom actions at the same time. In what ways can the current alarms on Huawei Cloud be used to notify operation and maintenance personnel? () [Multiple choice questions]",
	options: [
		"Mail",
		"qq",
		"SMS",
		"WeChat"
	  ],
	answer: [0,2],
	justification: [],
  },
  {//49
	type: "multiple-choice",
	question: "In the following diagram. What is correct about the coordination of Huawei Cloud Elastic Load Balancing and Elastic Services? [Multiple choice questions]",
	options: [
		"The service configuration in an AS group can be different.",
		"Huawei Elastic Services supports containers on the current page",
		"When elastic scaling services and load balancing work together, the scaling strategy no longer works",
		"The cloud servers in this figure all provide the same services"
	  ],
	answer: 3,
	justification: [],
  },
  {//50
	type: "multiple-choice",
	question: "Which diagram in UMLis the following? () [Multiple choice questions]",
	options: [
		"Class Diagram",
		"Sequence diagram",
		"State diagram",
		"Use case diagram"
	  ],
	answer: 1,
	justification: [],
  },
  {//51
	type: "multiple-choice",
	question: "Which of the following is the function of Huawei Cloud Distributed Messaging DMS service? () [Multiplechoicequestions]",
	options: [
		"Key-Value data cache",
		"Database horizontal extension",
		"Mass transaction",
		"Module asynchronous decoupling"
	  ],
	answer: 3,
	justification: [],
  },
  {//52
	type: "multiple-multiple-choice",
	question: "Which of the following disaster recovery architecture models are commonly used?()[Multiplechoice questions]",
	options: [
		"Backup recovery",
		"Offsite Recovery",
		"Cold standby",
		"Warm standby",
		"Multi-Live Mode"
	  ],
	answer: [0,2,3,4],
	justification: [],
  },
  {//53
	type: "multiple-choice",
	question: "In the I0T industry, the amount of data transmitted by devices is very small and usually has a fixed  time interval. In this case, the CPU utilization is very low. Which solution can Huawei Cloud PaaS be used to save capital?[Multiplechoicequestions]",
	options: [
		"Serverlessfunctionalcomputingplatform"
	  ],
	answer: 2,
	justification: [],
  },
  {//54
	type: "multiple-choice",
	question: "Each arrow line in the topology map of Huawei Cloud Application Performance Management Service  represents a call relationship. The color of Apdex's health status is shown in the following figure. The red dashed arrow line indicates that the call status is().[Multiplequestions]",
	options: [
		"Request Status Satisfied",
		"Request status is usually caused by delay",
		"Request status is poor due to latency",
		"Request status is poor. Caused by error"
	  ],
	answer: 3,
	justification: [],
  },
  {//55
	type: "multiple-choice",
	question: "Which of the following is not the advantage of the Huawei Cloud CCE managed socket?()[Multiple choicequestions]",
	options: [
		"Isolate by sharing kernel. Fine-grained resources",
		"Defines delivery and deployment specifications for environment-independent standards",
		"Utilize Hypervisor for more efficient use of hardware resources",
		"Quick start and stop in seconds"
	  ],
	answer: 2,
	justification: [],
  },
  {//56
	type: "multiple-choice",
	question: "Microservice processes and tools, self-organizing teams, and technical practices complement each other. Which of the following does not fall into the scope of processes and tools?()[Multiplechoice questions]",
	options: [
		"Actively introduce external tools while continuously optimizing internal tools",
		"Guarantee the stability and efficiency of continuous integration and continuous deployment pipelines",
		"Establish a reliable and repeatable delivery process througha highly mature automation system",
		"Strengthen the construction and management of infrastructure. Speed up feedback efficiency such as monitoring, alerting, and log aggregation"
	  ],
	answer: 2,
	justification: [],
  },
  {//57
	type: "true-false",
	question: "Under the microservices architecture model, developers cannot freely choose development technologies to provide API services.() [Multiplechoicequestions]",
	options: ["true","false"],
	answer: 1,
	justification: [],
  },
  {//58
	type: "multiple-choice",
	question: "Which of the following Huawei cloud middleware services can solve the problem of asynchronous  message decoupling for business applications? () [Multiple choice questions]",
	options: [
		"DCS: Distributed Cache Service",
		"DMS: Distributed Message Service",
		"DDM: Distributed Database Service",
		"RDS: Relational Database Service"
	  ],
	answer: 1,
	justification: [],
  },
  {//59
	type: "multiple-choice",
	question: "The dashboard of application operation and maintenance supports displaying indicator data and status data. For different indicator data, add different icons as required. If you need to monitor the change trend or compare multiple indicators, you can create it; if you need to know the latest value, you can create (",
	options: [
		"graph; digital graph",
		"digital chart; curve",
		"histogram; pie chart",
		"histogram; digital chart"
	  ],
	answer: 0,
	justification: [],
  },
  {//60
	type: "multiple-choice",
	question: "in a kubernetes cluster. Which of the following service types are accessible from the outside? () [Multiple choice questions]",
	options: [
		"deport",
		"load balancer",
		"clouserIP",
		"namespace"
	  ],
	answer: 1,
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