# MongoDB-Zen-Class-Programme


## The Commands for Each Questions


1. Find all the topics and tasks which are thought in the month of October

```bash
db.topics.aggregate([
{ $lookup: 
	{ 
	from: "tasks", 
	localField: "taskID", 
	foreignField: "taskID", 
	as: "taskinfo" 
} }, 
{ $unwind: "$takinfo" }, 
{ $project:
	{
	topic:1,
  	topicDate:1,
 	task:"$taskinfo.task",
 	task_dueDate:"$taskinfo.dueDate"
} },
{ $match:
	{
	$and:[ {topicDate:{$regex:"2024-10"}},
    		{task_dueDate:{$regex:"2024-10"}} ]
} }
] );
```

2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

```bash
db.company_drive.find({ 
	driveDate: { 
		$gte: "2024-10-15", 
		$lte: "2024-10-31" 
	} 
});
```

3. Find all the company drives and students who are appeared for the placement.

```bash
db.company_drive.aggregate(
{
	$lookup: { 
		from: "users", 
		localField: "userId", 
		foreignField: "userId", 
		as: "result" 
}},
{
	$unwind:{
		path:"$result"
}},
{
	$project:{
		"_id":0,
		company:1,
		user_name:"$result.userName"
}} );
```

4. Find the number of problems solved by the user in codekata

```bash
db.codekata.aggregate( 
{ 
	$lookup: {
		from: "users", 
		localField: "userId", 
		foreignField: "userId", 								
		as: "result" 
}},
{
	$unwind:{
		path:"$result"
}},
{
	$project:{
		"_id":0,
		problemSolved:1,
		user_name:"$result.userName"
}} );
```

5. Find all the mentors with who has the mentee's count more than 15

```bash
db.users.aggregate( 
{ 
	$lookup: { 
		from: "mentors", 
		localField: "mentorId", 
		foreignField: "mentorId", 
		as: "result" 
}},
{
	$unwind:{
		path:"$result"
}},
{
	$group:{
		"_id":"$result.mentorName",
		mentees_count:{$sum:1}
}},
{
	$match:{
		mentees_count:{$gt:15}
}} );
```

6. Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020

```bash
db.topics.aggregate(
{
$lookup: {
	from: "user_tasks", 
	localField: "taskId", 
	foreignField: "taskId", 
	as: "Topic_Task_Info" 
}}, 
{
$unwind: "$Topic_Task_Info" 
},
{
$match:{
	$and:[
		{topicDate:{$gte:"2024-10-15",$lte:"2024-10-31"}},
		{"Topic_Task_Info.submitted":false}
]}},
{
$lookup:{
	from:"attendance",
	localField:"Topic_Task_Info.userId",
	foreignField:"userId",
	as:"User_attendance"
}},
{
$unwind:"$User_attendance"
},
{
$match:{
	"User_attendance.attended":false
}},
/**
 * Project used for check values
 */
{
$project:{
	"_id":0,
	topic:1,
	topicDate:1,
	task:"$Topic_task_Info.task",
	userId:"$Topic_Task_Info.userId",
	submitted:"$Topic_Task_Info.submitted",
	attendance:"$User_attendance.attended"
}},
{
$count:"Total number of users who all are absent and task not submitted between 2024-10-15 to 2024-10-31"
});
```
