# DeadDrop

For this sprint, imagine that you belong to a top-secret government agency. Your organization has agents all over the world who are actively deployed into 
dangerous situations, and who need to get access to information, as well as provide information back to the organization. 

In the past, agents used dead drops –messages hidden in physical locations in the world –to relay information back and forth between headquarters and agents. 
But this is a dangerous process! What if malicious actors became aware of the location of a dead drop, and compromised the message? 
Or worse, apprehended the agent! Luckily, we are programmers, and we are going to solve this problem using our programming skills. 

The basic idea is that weare going to create a service that has at least two endpoints: one that allows users to send a request to a server and store a message, and another that allows the user to retrieve a previously stored message. 
Critically, when a message is retrieved, it should be removed from circulation so that it cannot be retrieved again, since, as we all know from watching many cheesy spy movies, when secret agents send messages, they always self-destruct after you read them.

We’re going to provide two versions of these end points, one that works like a stack, and one that works like a queue. The stack version will allow us to post a message, and then when someone retrieves a message, the most recentunretrievedmessagewill be returnedto the user. 
For the queue version, when someone retrieves a message it will instead be the oldest unretrieved message. These two endpoints can be used for different purposes, for simple status updates that are not mission critical, agents can use the queue. 
For situations where the information is critical and more-up-to-date information is more important than older information, the agents can use the stack.
When we send requests to this endpoint, it will be in the form of(for example):

{
data: “Data Here”,
AgentId: “SomeNumberHere”,
StructureId: “SomeNumberHere”
}

Let’s 
break this down. The “data” portion of the request is the message that the agent is trying to send. 
The “agent_id” is a unique number identifying the agent sending 
the information –this number will be stored with the message in the database butwill be kept secret from retrievers. 
The StructureId is a number that identifies a particular “dead drop” queue or stack. 

If your system gets arequest for a StructureId that itdoesn’t have a queue or stack associated with already, it should 
create one and add the new message to that structure.Whenwe send a retrieve request, it is in the form of(for example):

{
AgentId: “SomeNumberHere”,
StructureId: “SomeNumberHere”
}

When this occurs, the database should store a record of who retrieved the message for the structure, and then return some the data to the user.
If it uses the stack endpoint, it should be the most recent message added to the structure, with the queue endpoint it should be the oldest. 

Note that we only return the “data” field from the stored message to the user of this endpoint, we keep the agent id a secret that only the database knows.Finally,
the agency would like you to develop some queries to help them analyze the usage data of the service.

They want a query that can identify all the messages 
submitted by a particular agent given their agent idacross all queues and stacks, as well as all the messages retrieved by a particular agent given their agent 
id(again, across all queues and stacks). 

They also want a query that can return all the messages stored in a particular queue or stack given a structure id.
Note that this means that your database muststore all ofthis information somehow, so consider that carefully as you design your tables.
You can submit the code for these queries in a separate documentif you wish.
